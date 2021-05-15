import { objectType } from "nexus";

const ChatPerson = objectType({
    name: "ChatPerson",
    definition(t) {
        t.string("name");
        t.string("email");
    },
});

export const Chat = objectType({
    name: "Chat",
    definition(t) {
        t.string("chatId");
        t.list.field("members", {
            type: ChatPerson,
        });
    },
});
