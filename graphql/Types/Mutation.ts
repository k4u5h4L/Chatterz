import { stringArg, nonNull, mutationType } from "nexus";
import { AuthenticationError } from "apollo-server-micro";

import dbConnect from "@/utils/dbConnect";
import Note from "@/models/Note";

export const NoteMutation = mutationType({
    definition(t) {
        t.field("createNote", {
            type: "Note",
            args: {
                email: nonNull(stringArg()),
                desc: nonNull(stringArg()),
            },
            // @ts-ignore
            resolve: async (
                _root,
                { email, desc }: { email: string; desc: string },
                ctx
            ) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const note = {
                            desc: desc,
                        };

                        const newNote = await Note.findOneAndUpdate(
                            { email: email },
                            { $push: { list: note } }
                        );

                        if (!newNote) {
                            console.log("does not exist");
                        }

                        return newNote;
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

        t.field("deleteNote", {
            type: "Note",
            args: {
                email: nonNull(stringArg()),
                desc: nonNull(stringArg()),
            },
            // @ts-ignore
            resolve: async (
                _root,
                { email, desc }: { email: string; desc: string },
                ctx
            ) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const newNote = await Note.findOneAndUpdate(
                            { email: email },
                            { $pull: { list: { desc: desc } } }
                        );

                        if (!newNote) {
                            console.log("does not exist");
                        }

                        return newNote;
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
