import { queryType, idArg } from "nexus";
import { AuthenticationError } from "apollo-server-micro";

import { Message as ChatMessage } from "./index";
import dbConnect from "@/utils/dbConnect";
import Message from "@/models/Message";

export const Query = queryType({
    definition(t) {
        t.list.field("Message", {
            type: ChatMessage,
            description: "All messages sent till now",
            resolve: async (_root, _args, ctx) => {
                await dbConnect();

                const messages = await Message.find({});

                return messages;
            },
        });
    },
});
