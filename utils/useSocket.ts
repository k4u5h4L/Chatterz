import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

export function useSocket(chatRoomId) {
    const [socket, setSocket] = useState<Socket>(null);

    useEffect(() => {
        const socketIo = io(
            process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000/",
            {
                query: {
                    chatRoomId: chatRoomId,
                },
            }
        );

        setSocket(socketIo);

        function cleanUp() {
            socketIo.disconnect();
        }

        return cleanUp;
    }, []);

    return socket;
}
