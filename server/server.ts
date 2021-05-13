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
    socket.on("chat-message", (arg) => {
        console.log(arg);
        socket.emit("chat-message-response", `server: ${arg}`);
    });
});

httpServer.listen(8000, () => console.log(`server is running on port 8000`));
// WARNING !!! app.listen(8000); will not work here, as it creates a new HTTP server
