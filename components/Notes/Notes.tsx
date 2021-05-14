import React, { useState, useEffect } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { useSession } from "next-auth/client";

const GET_NOTES = gql`
    query GetNotes($email: ID!) {
        NoteByEmail(email: $email) {
            email
            list {
                desc
            }
        }
    }
`;

const ADD_NOTE = gql`
    mutation AddNotes($email: String!, $desc: String!) {
        createNote(email: $email, desc: $desc) {
            email
            list {
                desc
            }
        }
    }
`;

const REMOVE_NOTE = gql`
    mutation RemoveNote($email: String!, $desc: String!) {
        deleteNote(email: $email, desc: $desc) {
            email
            list {
                desc
            }
        }
    }
`;

export default function Notes() {
    const [session] = useSession();

    const [getNotes, { loading, error, data }] = useLazyQuery(GET_NOTES);
    const [addNote] = useMutation(ADD_NOTE);
    const [removeNote] = useMutation(REMOVE_NOTE);

    const [note, setNote] = useState<string>("");
    const [notes, setNotes] = useState([]);

    // if (loading) return <h1>Loading ...</h1>;
    // if (error) return `Error! ${error}`;

    useEffect(() => {
        if (session) {
            getNotes({ variables: { email: session.user.email } });
        }
    }, [session]);

    useEffect(() => {
        if (data) {
            setNotes(data.NoteByEmail.list);
        }
    }, [data]);

    const handleNoteSubmit = (e: any) => {
        e.preventDefault();

        addNote({ variables: { email: session.user.email, desc: note } });

        setNotes([...notes, { desc: note }]);
        setNote("");
    };

    const handleNoteChange = (e: any) => {
        setNote(e.target.value);
    };

    const handleNoteDelete = (desc: string) => {
        removeNote({ variables: { email: session.user.email, desc: desc } });

        setNotes(notes.filter((curNote) => curNote.desc != desc));
    };

    return (
        <div className="tab-pane fade" id="tab-note" role="tabpanel">
            <div
                className="
                                header
                                border-bottom
                                pb-4
                                d-flex
                                justify-content-between
                            "
            >
                <div>
                    <h6 className="mb-0 font-weight-bold">My Notes</h6>
                    <span className="text-muted">
                        Remember important stuff here!
                    </span>
                </div>
                <div>
                    <button
                        className="
                                        btn btn-link
                                        close-sidebar
                                        text-muted
                                    "
                        type="button"
                    >
                        <i className="zmdi zmdi-close"></i>
                    </button>
                </div>
            </div>
            <div className="body mt-4">
                <div className="add-note">
                    <form onSubmit={(e) => handleNoteSubmit(e)}>
                        <div className="input-group mb-2">
                            <textarea
                                rows={3}
                                className="form-control"
                                placeholder="Enter a note here.."
                                onChange={(e) => handleNoteChange(e)}
                                value={note}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary addnote"
                        >
                            Add
                        </button>
                    </form>
                    <ul className="list-unstyled mt-4">
                        {/* ############################################################# */}
                        {data ? (
                            notes.map((note, index) => (
                                <li className="card border-0 mb-2" key={index}>
                                    <span>{note.desc}</span>
                                    <button
                                        className="btn btn-sm btn-link"
                                        type="button"
                                        onClick={() =>
                                            handleNoteDelete(note.desc)
                                        }
                                    >
                                        <i
                                            className="
                                                    zmdi zmdi-delete
                                                    text-danger
                                                "
                                        ></i>
                                    </button>
                                </li>
                            ))
                        ) : (
                            <div>
                                <h6 className="mb-0 font-weight-bold">
                                    You haven&apos;t saved any notes yet!
                                </h6>
                            </div>
                        )}
                        {/* ############################################################# */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
