import React from "react";

import Notes from "../Notes/Notes";
import Todos from "../Todos/Todos";

export default function Rightbar() {
    return (
        <div className="rightbar d-none d-md-block">
            <div
                className="
                        nav
                        flex-column
                        nav-pills
                        border-start
                        py-xl-4 py-3
                        h-100
                    "
            >
                <a
                    className="nav-link mb-2 text-center rightbar-link"
                    data-toggle="pill"
                    href="#tab-calendar"
                >
                    <i className="zmdi zmdi-calendar"></i>
                </a>
                <a
                    className="nav-link mb-2 text-center rightbar-link"
                    data-toggle="pill"
                    href="#tab-note"
                >
                    <i className="zmdi zmdi-lamp"></i>
                </a>
                <a
                    className="nav-link mb-2 text-center rightbar-link"
                    data-toggle="pill"
                    href="#tab-task"
                >
                    <i className="zmdi zmdi-comment-edit"></i>
                </a>
                {/* <a
                    className="nav-link mb-2 text-center rightbar-link"
                    data-toggle="pill"
                    href="#tab-github"
                >
                    <i className="zmdi zmdi-github"></i>
                </a> */}
                {/* <a className="nav-link mb-2 text-center" href="#">
                    <i className="zmdi zmdi-plus"></i>
                </a> */}
            </div>
            <div className="tab-content py-xl-4 py-3 px-xl-4 px-3">
                <div
                    className="tab-pane fade"
                    id="tab-calendar"
                    role="tabpanel"
                >
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
                            <h6 className="mb-0 font-weight-bold">Calendar</h6>
                            <span className="text-muted">
                                Don&apos;t lose track of time!
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
                        <div id="mini-calendar"></div>
                    </div>
                </div>

                <Notes />

                <Todos />

                {/* <div className="tab-pane fade" id="tab-github" role="tabpanel">
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
                            <h6 className="mb-0 font-weight-bold">
                                My Github Activity
                            </h6>
                            <span className="text-muted">puffintheme</span>
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
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div
                                            className="
                                                    d-flex
                                                    align-items-center
                                                "
                                        >
                                            <img
                                                src="/assets/images/xs/avatar6.jpg"
                                                data-toggle="tooltip"
                                                title=""
                                                alt="Avatar"
                                                className="
                                                        rounded-circle
                                                        avatar
                                                    "
                                                data-original-title="Avatar Name"
                                            />
                                            <div className="ms-3">
                                                <a href="#" title="">
                                                    Michelle Green
                                                </a>
                                                <p className="mb-0">
                                                    <a
                                                        href="/cdn-cgi/l/email-protection"
                                                        className="__cf_email__"
                                                        data-cfemail="6c01050f0409000009420b1e0909022c09140d011c0009420f0301"
                                                    >
                                                        [email&#160;protected]
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-auto">
                                        <div className="dropdown">
                                            <a
                                                href="#"
                                                className="
                                                        btn btn-link btn-sm
                                                        dropdown-toggle
                                                    "
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                data-expanded="false"
                                            >
                                                <i
                                                    className="
                                                            zmdi
                                                            zmdi-more-vert
                                                            zmdi-hc-lg
                                                        "
                                                ></i>
                                            </a>
                                            <div
                                                className="
                                                        dropdown-menu
                                                        dropdown-menu-right
                                                    "
                                            >
                                                <a
                                                    href="#!"
                                                    className="dropdown-item"
                                                >
                                                    Action
                                                </a>
                                                <a
                                                    href="#!"
                                                    className="dropdown-item"
                                                >
                                                    Another action
                                                </a>
                                                <a
                                                    href="#!"
                                                    className="dropdown-item"
                                                >
                                                    Something else here
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3 mb-3">
                                    <textarea
                                        rows={3}
                                        className="form-control no-resize"
                                        placeholder="Please type what you want..."
                                    ></textarea>
                                </div>
                                <div className="align-right">
                                    <button className="btn btn-primary">
                                        Push
                                    </button>
                                    <button className="btn btn-link">
                                        <i
                                            className="
                                                    zmdi zmdi-attachment
                                                    text-muted
                                                "
                                        ></i>
                                    </button>
                                    <button className="btn btn-link">
                                        <i
                                            className="
                                                    zmdi zmdi-camera
                                                    text-muted
                                                "
                                        ></i>
                                    </button>
                                    <button className="btn btn-link">
                                        <i
                                            className="
                                                    zmdi zmdi-mood
                                                    text-muted
                                                "
                                        ></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ol className="activity-feed p-0 ms-3 mb-0 pt-5">
                            <li
                                className="feed-item d-flex mb-3 pl-lg-4 ps-3"
                                data-content=""
                                data-time="5 hours ago"
                                data-color="yellow"
                            >
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <input
                                            type="checkbox"
                                            id="expand_1"
                                            name="expand_1"
                                        />
                                        <label
                                            htmlFor="expand_1"
                                            className="mb-0"
                                        >
                                            <b>Request</b> code merge in git
                                        </label>
                                        <div className="feed-content">
                                            <p>
                                                <b>comments</b> Lorem Ipsum is
                                                simply dummy text of the
                                                printing and typesetting
                                                industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="feed-item d-flex mb-3 pl-lg-4 ps-3"
                                data-content=""
                                data-time="7 hours ago"
                                data-color="green"
                            >
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <input
                                            type="checkbox"
                                            id="expand_2"
                                            name="expand_2"
                                        />
                                        <label
                                            htmlFor="expand_2"
                                            className="mb-0"
                                        >
                                            <b>Update</b> React app login page
                                            code
                                        </label>
                                        <div className="feed-content">
                                            <p>
                                                <b>comments</b> Lorem Ipsum is
                                                simply dummy text of the
                                                printing and typesetting
                                                industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="feed-item d-flex mb-3 pl-lg-4 ps-3"
                                data-content=""
                                data-time="December 2020"
                                data-color="green"
                            >
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <input
                                            type="checkbox"
                                            id="expand_3"
                                            name="expand_3"
                                        />
                                        <label
                                            htmlFor="expand_3"
                                            className="mb-0"
                                        >
                                            2 contributions in private
                                            repositories
                                        </label>
                                        <div className="feed-content">
                                            <span>
                                                <a href="#">
                                                    puffintheme/Allima-v0.1
                                                </a>
                                                12 commits
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="feed-item d-flex mb-3 pl-lg-4 ps-3"
                                data-content=""
                                data-time="December 2020"
                                data-color="dark"
                            >
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <input
                                            type="checkbox"
                                            id="expand_4"
                                            name="expand_4"
                                        />
                                        <label
                                            htmlFor="expand_4"
                                            className="mb-0"
                                        >
                                            <b>PostMan</b> Create a new project
                                        </label>
                                        <div className="feed-content">
                                            <h2>BOOM!</h2>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
