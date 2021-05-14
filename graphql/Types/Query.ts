import { queryType, idArg } from "nexus";
import { AuthenticationError } from "apollo-server-micro";

import {
    Message as ChatMessage,
    Note as ChatNote,
    Todo as ChatTodo,
} from "./index";
import dbConnect from "@/utils/dbConnect";
import Message from "@/models/Message";
import Note from "@/models/Note";
import Todo from "@/models/Todo";

export const Query = queryType({
    definition(t) {
        // t.list.field("Message", {
        //     type: ChatMessage,
        //     description: "All messages sent till now",
        //     resolve: async (_root, _args, ctx) => {
        //         await dbConnect();

        //         const messages = await Message.find({});

        //         return messages;
        //     },
        // });

        t.field("NoteByEmail", {
            type: ChatNote,
            description: "Get the notes by its corresponding email of the user",
            args: { email: idArg() },
            resolve: async (_root, { email }: { email: string }, ctx) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const note = await Note.findOne({
                            email: email,
                        });

                        if (!note) {
                            console.log("does not exist");
                        }

                        return note;
                    } else {
                        throw new AuthenticationError(
                            `I guess you are not ${email}. If you are, login first before acessing the data.`
                        );
                    }
                } else {
                    throw new AuthenticationError("User is not logged in.");
                }
            },
        });

        t.field("TodoByEmail", {
            type: ChatTodo,
            description:
                "Get the Todo tasks by its corresponding email of the user",
            args: { email: idArg() },
            resolve: async (_root, { email }: { email: string }, ctx) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const todo = await Todo.findOne({
                            email: email,
                        });

                        if (!todo) {
                            console.log("does not exist");
                        }

                        return todo;
                    } else {
                        throw new AuthenticationError(
                            `I guess you are not ${email}. If you are, login first before acessing the data.`
                        );
                    }
                } else {
                    throw new AuthenticationError("User is not logged in.");
                }
            },
        });
    },
});
