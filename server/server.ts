import { createServer } from "http";
import cors from "cors";
import express, { Request, Response } from "express";
import { Server, Socket } from "socket.io";

const app = express();

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

    socket.join("chat-room");

    io.to("chat-room").emit("room initialized");

    socket.on("private message", (anotherSocketId, msg) => {
        socket.to(anotherSocketId).emit("private message", socket.id, msg);
    });

    socket.on("private-chat", (arg) => {
        console.log(arg);
        socket.emit("private-chat", `server: ${arg}`);
        io.to("chat-room").emit("someone sent a message");
    });
});

httpServer.listen(8000, () => console.log(`server is running on port 8000`));
// WARNING !!! app.listen(8000); will not work here, as it creates a new HTTP server
