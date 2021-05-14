import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_TODOS = gql`
    query {
        TodoByEmail(email: $email) {
            email
            list {
                status
                desc
            }
        }
    }
`;

export default function Todos() {
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
                        <li>
                            <label className="c_checkbox">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span className="ms-2">
                                    Update new code on github
                                </span>
                            </label>
                            <button
                                className="btn btn-sm btn-link"
                                type="submit"
                            >
                                <i className="zmdi zmdi-delete"></i>
                            </button>
                        </li>
                        <li>
                            <label className="c_checkbox">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span className="ms-2">
                                    Meeting with design team and updates
                                </span>
                            </label>
                            <button
                                className="btn btn-sm btn-link"
                                type="submit"
                            >
                                <i className="zmdi zmdi-delete"></i>
                            </button>
                        </li>
                        <li>
                            <label className="c_checkbox">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span className="ms-2">
                                    Send project zip file to developer
                                </span>
                            </label>
                            <button
                                className="btn btn-sm btn-link"
                                type="submit"
                            >
                                <i className="zmdi zmdi-delete"></i>
                            </button>
                        </li>
                        <li>
                            <label className="c_checkbox">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span className="ms-2">
                                    Create new design psd for onepage
                                </span>
                            </label>
                            <button
                                className="btn btn-sm btn-link"
                                type="submit"
                            >
                                <i className="zmdi zmdi-delete"></i>
                            </button>
                        </li>
                    </ul>
                    <form className="add-items">
                        <div className="input-group mb-2">
                            <textarea
                                rows={3}
                                className="form-control"
                                placeholder="What do you need to do today?"
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
