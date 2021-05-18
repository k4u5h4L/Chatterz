import { objectType } from "nexus";

const ChatPerson = objectType({
    name: "ChatPerson",
    definition(t) {
        t.string("name");
        t.string("email");
    },
});

const Messages = objectType({
    name: "Messages",
    definition(t) {
        t.string("from");
        t.string("content");
        t.string("date");
        t.int("sentiment");
    },
});

export const Chat = objectType({
    name: "Chat",
    definition(t) {
        t.string("chatId");
        t.list.field("members", {
            type: ChatPerson,
        });
        t.list.field("messages", {
            type: Messages,
        });
    },
});
