import { createServer } from "http";
import cors from "cors";
import express, { Request, Response } from "express";
import { Server, Socket } from "socket.io";

import aposToLexForm from "apos-to-lex-form";
import natural, { WordTokenizer } from "natural";
import SpellCorrector from "spelling-corrector";
import SW from "stopword";

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

io.on("connection", (socket: Socket) => {
    console.log("connected");
    const chatRoomId = socket.handshake.query.chatRoomId;
    console.log(chatRoomId);

    socket.join(chatRoomId);

    // io.to("chat-room").emit("private-chat", "room initialized");

    // socket.on("private message", (anotherSocketId, msg) => {
    //     socket.to(anotherSocketId).emit("private message", socket.id, msg);
    // });

    socket.on("private-chat", (arg) => {
        console.log(arg);
        // socket.emit("private-chat", `server: ${arg}`);

        // ############################################################################################
        const lexedReview = aposToLexForm(arg);

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

        console.log(`Sentiment for "${arg}": ${analysis}`);

        // ############################################################################################

        // socket.to(chatRoomId).emit("private-chat", `${arg}`);
        socket.to(chatRoomId).emit(
            "private-chat",
            JSON.stringify({
                sentiment: !analysis ? 0 : analysis,
                content: arg,
            })
        );
    });
});

httpServer.listen(8000, () => console.log(`server is running on port 8000`));
// WARNING !!! app.listen(8000); will not work here, as it creates a new HTTP server
