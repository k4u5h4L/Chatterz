import { objectType } from "nexus";

export const Message = objectType({
    name: "Message",
    definition(t) {
        t.string("id");
        t.string("content");
        t.string("from");
        t.string("to");
    },
});
