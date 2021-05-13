import { objectType } from "nexus";

const TodoDescription = objectType({
    name: "TodoDescription",
    definition(t) {
        t.string("desc");
        t.boolean("status");
    },
});

export const Todo = objectType({
    name: "Todo",
    definition(t) {
        t.string("email");
        t.list.field("list", {
            type: TodoDescription,
        });
    },
});
