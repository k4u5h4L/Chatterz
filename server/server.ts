import { createServer } from "http";
import cors from "cors";
import express, { Request, Response } from "express";
import { Server, Socket } from "socket.io";

import aposToLexForm from "apos-to-lex-form";
import natural, { WordTokenizer } from "natural";
import SpellCorrector from "spelling-corrector";
import SW from "stopword";

// @ts-ignore
import Chat from "./Chat";
import dbConnect from "./dbConnect";

const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

const app = express();
let count = 1;

const httpServer = createServer();

const options = {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
};
const io = new Server(httpServer, options);

app.use(cors());

app.get("/api", (req: Request, res: Response) => {
    res.send({ message: "you've reached api root!" });
});

io.on("connection", async (socket: Socket) => {
    await dbConnect();

    console.log("connected");
    const chatRoomId = socket.handshake.query.chatRoomId;
    console.log(chatRoomId);

    socket.join(chatRoomId);

    // io.to("chat-room").emit("private-chat", "room initialized");

    // socket.on("private message", (anotherSocketId, msg) => {
    //     socket.to(anotherSocketId).emit("private message", socket.id, msg);
    // });

    socket.on("private-chat", async (arg) => {
        const MessageContent = JSON.parse(arg);
        console.log(MessageContent);
        // socket.emit("private-chat", `server: ${arg}`);

        // ############################################################################################
        const lexedReview = aposToLexForm(MessageContent.content);

        // casing
        const casedReview = lexedReview.toLowerCase();

        // removing
        const alphaOnlyReview = casedReview.replace(/[^a-zA-Z\s]+/g, "");

        // tokenize review
        //   const { WordTokenizer } = natural;
        const tokenizer = new WordTokenizer();
        const tokenizedReview = tokenizer.tokenize(alphaOnlyReview);

        // spell correction
        tokenizedReview.forEach((word, index) => {
            tokenizedReview[index] = spellCorrector.correct(word);
        });

        // remove stopwords
        const filteredReview = SW.removeStopwords(tokenizedReview);

        const { SentimentAnalyzer, PorterStemmer } = natural;
        const analyzer = new SentimentAnalyzer(
            "English",
            PorterStemmer,
            "afinn"
        );

        const analysis = analyzer.getSentiment(filteredReview);

        console.log(`Sentiment for "${MessageContent.content}": ${analysis}`);

        // ############################################################################################

        // socket.to(chatRoomId).emit("private-chat", `${arg}`);

        const mess = {
            ...MessageContent,
            date: `${new Date()}`,
            sentiment: !analysis ? 0 : analysis,
        };

        // const updatedChat = await Chat.findOneAndUpdate(
        //     { chatId: chatRoomId },
        //     { $push: { messages: mess } }
        // );

        Chat.findOneAndUpdate(
            { chatId: chatRoomId },
            { $push: { messages: mess } }
        )
            .then((res) => console.log(res))
            .catch((err) => console.error(err));

        socket.to(chatRoomId).emit(
            "private-chat",
            JSON.stringify({
                sentiment: !analysis ? 0 : analysis,
                content: MessageContent.content,
            })
        );
    });
});

httpServer.listen(8000, () => console.log(`server is running on port 8000`));
// WARNING !!! app.listen(8000); will not work here, as it creates a new HTTP server
