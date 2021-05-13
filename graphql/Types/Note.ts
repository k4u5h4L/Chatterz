import { objectType } from "nexus";

const NoteDescription = objectType({
    name: "NoteDescription",
    definition(t) {
        t.string("desc");
    },
});

export const Note = objectType({
    name: "Note",
    definition(t) {
        t.string("email");
        t.list.field("list", {
            type: NoteDescription,
        });
    },
});
