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
        t.string("_id");
        t.list.field("members", {
            type: ChatPerson,
        });
    },
});
