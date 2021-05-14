import React, { useState, useEffect } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { useSession } from "next-auth/client";

const GET_TODOS = gql`
    query GetTodos($email: ID!) {
        TodoByEmail(email: $email) {
            email
            list {
                status
                desc
            }
        }
    }
`;

const ADD_TODO = gql`
    mutation AddTodo($email: String!, $desc: String!) {
        createTodo(email: $email, desc: $desc) {
            email
            list {
                desc
                status
            }
        }
    }
`;

const REMOVE_TODO = gql`
    mutation RemoveTodo($email: String!, $desc: String!) {
        deleteTodo(email: $email, desc: $desc) {
            email
            list {
                desc
                status
            }
        }
    }
`;

const CHANGE_STATUS_TODO = gql`
    mutation ChangeStatusTodo($email: String!, $desc: String!) {
        completeTodo(email: $email, desc: $desc) {
            email
            list {
                desc
                status
            }
        }
    }
`;

export default function Todos() {
    const [session] = useSession();

    const [getTodo, { loading, error, data }] = useLazyQuery(GET_TODOS);
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState<string>("");
    const [addTodo] = useMutation(ADD_TODO);
    const [removeTodo] = useMutation(REMOVE_TODO);
    const [changeStatusTodo] = useMutation(CHANGE_STATUS_TODO);

    useEffect(() => {
        if (session) {
            getTodo({ variables: { email: session.user.email } });
        }
    }, [session]);

    useEffect(() => {
        if (data) {
            setTodos(data.TodoByEmail.list);
        }
    }, [data]);

    const handleTodoChange = (e: any) => {
        setTodo(e.target.value);
    };

    const handleTodoSubmit = (e: any) => {
        e.preventDefault();

        addTodo({ variables: { email: session.user.email, desc: todo } });

        setTodos([...todos, { desc: todo, status: false }]);
        setTodo("");
    };

    const handleTodoDelete = (desc: string) => {
        removeTodo({ variables: { email: session.user.email, desc: desc } });

        setTodos(todos.filter((curTodo) => curTodo.desc != desc));
    };

    const handleTodoCheck = (desc: string) => {
        changeStatusTodo({
            variables: { email: session.user.email, desc: desc },
        });

        // for (let i in todos) {
        //     if (todos[i].desc)
        // }

        setTodos(
            todos.map((curTodo) =>
                curTodo.desc == desc
                    ? { ...curTodo, status: !curTodo.status }
                    : curTodo
            )
        );
    };

    return (
        <div className="tab-pane fade" id="tab-task" role="tabpanel">
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
                    <h6 className="mb-0 font-weight-bold">My Task List</h6>
                    <span className="text-muted">
                        Update your profile details
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
                <div className="todo-list">
                    <ul className="list-unstyled todo-list-items">
                        {/* ##################################################### */}
                        {data ? (
                            todos.map((todo, index) => (
                                <li key={index}>
                                    <label className="c_checkbox">
                                        <input
                                            type="checkbox"
                                            checked={todo.status}
                                            onChange={() =>
                                                handleTodoCheck(todo.desc)
                                            }
                                        />
                                        <span className="checkmark"></span>
                                        <span className="ms-2">
                                            {todo.desc}
                                        </span>
                                    </label>
                                    <button
                                        className="btn btn-sm btn-link"
                                        type="button"
                                        onClick={() =>
                                            handleTodoDelete(todo.desc)
                                        }
                                    >
                                        <i className="zmdi zmdi-delete"></i>
                                    </button>
                                </li>
                            ))
                        ) : (
                            <div>
                                <h6 className="mb-0 font-weight-bold">
                                    You haven&apos;t created any tasks yet!
                                </h6>
                            </div>
                        )}
                        {/* ##################################################### */}
                    </ul>
                    <form
                        className="add-items"
                        onSubmit={(e) => handleTodoSubmit(e)}
                    >
                        <div className="input-group mb-2">
                            <textarea
                                rows={3}
                                className="form-control"
                                placeholder="What do you need to do today?"
                                onChange={(e) => handleTodoChange(e)}
                                value={todo}
                            ></textarea>
                        </div>
                        <button className="add btn btn-primary" type="submit">
                            Add to List
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
