import React from "react";

export default function Sidebar() {
    return (
        <div className="sidebar border-end py-xl-4 py-3 px-xl-4 px-3">
            <div className="tab-content">
                <div
                    className="tab-pane fade"
                    id="nav-tab-user"
                    role="tabpanel"
                >
                    <div
                        className="
                                d-flex
                                justify-content-between
                                align-items-center
                                mb-4
                            "
                    >
                        <h3 className="mb-0 text-primary">Profile</h3>
                        <div>
                            <a
                                href="signin.html"
                                title=""
                                className="btn btn-dark"
                            >
                                Sign Out
                            </a>
                        </div>
                    </div>

                    <div className="form-group input-group-lg search mb-3">
                        <i className="zmdi zmdi-search"></i>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                        />
                    </div>

                    <div className="card border-0 text-center pt-3 mb-4">
                        <div className="card-body">
                            <div className="card-user-avatar">
                                <img
                                    src="assets/images/user.png"
                                    alt="avatar"
                                />
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                >
                                    <i className="zmdi zmdi-edit"></i>
                                </button>
                            </div>
                            <div className="card-user-detail mt-4">
                                <h4>Michelle Green</h4>
                                <span className="text-muted">
                                    <a
                                        href="/cdn-cgi/l/email-protection"
                                        className="__cf_email__"
                                        data-cfemail="2845414b404d44444d064f5a4d4d46684f45494144064b4745"
                                    >
                                        [email&#160;protected]
                                    </a>
                                </span>
                                <p>+14 123 456 789 - New york (USA)</p>
                                <div className="social">
                                    <a
                                        className="icon p-2"
                                        href="#"
                                        data-toggle="tooltip"
                                        title="Facebook"
                                    >
                                        <i className="zmdi zmdi-facebook-box"></i>
                                    </a>
                                    <a
                                        className="icon p-2"
                                        href="#"
                                        data-toggle="tooltip"
                                        title="Github"
                                    >
                                        <i className="zmdi zmdi-github-box"></i>
                                    </a>
                                    <a
                                        className="icon p-2"
                                        href="#"
                                        data-toggle="tooltip"
                                        title="Linkedin"
                                    >
                                        <i className="zmdi zmdi-linkedin-box"></i>
                                    </a>
                                    <a
                                        className="icon p-2"
                                        href="#"
                                        data-toggle="tooltip"
                                        title="Instagram"
                                    >
                                        <i className="zmdi zmdi-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0">
                        <ul className="list-group custom list-group-flush">
                            <li
                                className="
                                        list-group-item
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                    "
                            >
                                <span>Color scheme</span>
                                <ul className="choose-skin list-unstyled mb-0">
                                    <li
                                        data-theme="indigo"
                                        data-toggle="tooltip"
                                        title="Theme-Indigo"
                                    >
                                        <div className="indigo"></div>
                                    </li>
                                    <li
                                        className="active"
                                        data-theme="cyan"
                                        data-toggle="tooltip"
                                        title="Theme-Cyan"
                                    >
                                        <div className="cyan"></div>
                                    </li>
                                    <li
                                        data-theme="green"
                                        data-toggle="tooltip"
                                        title="Theme-Green"
                                    >
                                        <div className="green"></div>
                                    </li>
                                    <li
                                        data-theme="blush"
                                        data-toggle="tooltip"
                                        title="Theme-Blush"
                                    >
                                        <div className="blush"></div>
                                    </li>
                                    <li
                                        data-theme="dark"
                                        data-toggle="tooltip"
                                        title="Theme-Dark"
                                    >
                                        <div className="dark"></div>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="
                                        list-group-item
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                    "
                            >
                                <span>Desktop notifications</span>
                                <label className="c_checkbox">
                                    <input
                                        type="checkbox"
                                        checked={true}
                                        onChange={() => console.log("changed")}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li
                                className="
                                        list-group-item
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                    "
                            >
                                <span>Sound notifications</span>
                                <label className="c_checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li className="list-group-item border-0 mt-3">
                                <a className="link" href="#">
                                    <i className="zmdi zmdi-chevron-right me-2"></i>
                                    Need Help? Let&apos;s chat
                                </a>
                            </li>
                            <li className="list-group-item border-0">
                                <a className="link" href="#">
                                    <i className="zmdi zmdi-chevron-right me-2"></i>
                                    Knowledgebase
                                </a>
                            </li>
                            <li className="list-group-item border-0">
                                <a className="link" href="#">
                                    <i className="zmdi zmdi-chevron-right me-2"></i>
                                    english (United States)
                                </a>
                            </li>
                            <li className="list-group-item mb-3">
                                <a className="link" href="#">
                                    <i className="zmdi zmdi-chevron-right me-2"></i>
                                    Browser & App Sessions
                                </a>
                            </li>
                        </ul>

                        <div className="card-body text-center border-top">
                            <button type="button" className="btn btn-secondary">
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="tab-pane fade show active"
                    id="nav-tab-chat"
                    role="tabpanel"
                >
                    <div
                        className="
                                d-flex
                                justify-content-between
                                align-items-center
                                mb-4
                            "
                    >
                        <h3 className="mb-0 text-primary">Chat</h3>
                        <div>
                            <button className="btn btn-dark" type="button">
                                New Chat
                            </button>
                        </div>
                    </div>

                    <div className="form-group input-group-lg search mb-3">
                        <i className="zmdi zmdi-search"></i>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                        />
                    </div>

                    <ul className="chat-list">
                        <li
                            className="
                                    header
                                    d-flex
                                    justify-content-between
                                    ps-3
                                    pe-3
                                    mb-1
                                "
                        >
                            <span>RECENT CHATS</span>
                            <div className="dropdown">
                                <a
                                    className="
                                            btn btn-link
                                            px-1
                                            py-0
                                            border-0
                                            text-muted
                                            dropdown-toggle
                                        "
                                    href="#"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="zmdi zmdi-filter-list"></i>
                                </a>
                                <div
                                    className="
                                            dropdown-menu dropdown-menu-right
                                        "
                                >
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="bot-chat.html" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <div
                                                className="
                                                        avatar
                                                        rounded-circle
                                                        no-image
                                                        bg-primary
                                                        text-light
                                                    "
                                            >
                                                <span>
                                                    <i
                                                        className="
                                                                zmdi
                                                                zmdi-comment-text
                                                            "
                                                    ></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Support ChatBot
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                <i
                                                    className="
                                                            zmdi zmdi-circle
                                                            text-success
                                                        "
                                                ></i>
                                                Online
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="online">
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="single-chat.html" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <span
                                                className="
                                                        status
                                                        rounded-circle
                                                    "
                                            ></span>
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar5.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Jason Porter
                                                </h6>
                                                <p
                                                    className="
                                                            small
                                                            text-muted
                                                            text-nowrap
                                                            ms-4
                                                            mb-0
                                                        "
                                                >
                                                    11:08 am
                                                </p>
                                            </div>
                                            <div className="text-truncate">
                                                It is a long established fact
                                                that a reader w...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="group-chat.html" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <span
                                                className="
                                                        status
                                                        rounded-circle
                                                    "
                                            ></span>
                                            <div
                                                className="
                                                        avatar
                                                        rounded-circle
                                                        no-image
                                                        timber
                                                    "
                                            >
                                                <span>UD</span>
                                            </div>
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    UI-Design Group
                                                </h6>
                                                <p
                                                    className="
                                                            small
                                                            text-muted
                                                            text-nowrap
                                                            ms-4
                                                            mb-0
                                                        "
                                                >
                                                    11:08 am
                                                </p>
                                            </div>
                                            <div className="text-truncate">
                                                <i
                                                    className="
                                                            zmdi zmdi-file-text
                                                            me-1
                                                        "
                                                ></i>
                                                It is a long established fact
                                                that a reader w...
                                                <div
                                                    className="
                                                            avatar-list
                                                            avatar-list-stacked
                                                            mt-1
                                                        "
                                                >
                                                    <img
                                                        className="
                                                                avatar
                                                                xs
                                                                rounded
                                                            "
                                                        src="assets/images/xs/avatar5.jpg"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Sean"
                                                    />
                                                    <img
                                                        className="
                                                                avatar
                                                                xs
                                                                rounded
                                                            "
                                                        src="assets/images/xs/avatar6.jpg"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Martin"
                                                    />
                                                    <img
                                                        className="
                                                                avatar
                                                                xs
                                                                rounded
                                                            "
                                                        src="assets/images/xs/avatar1.jpg"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Terry"
                                                    />
                                                    <img
                                                        className="
                                                                avatar
                                                                xs
                                                                rounded
                                                            "
                                                        src="assets/images/xs/avatar4.jpg"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Michelle"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="away">
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="single-chat-2.html" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <span
                                                className="
                                                        status
                                                        rounded-circle
                                                    "
                                            ></span>
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar1.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Michelle Green
                                                </h6>
                                                <p
                                                    className="
                                                            small
                                                            text-muted
                                                            text-nowrap
                                                            ms-4
                                                            mb-0
                                                        "
                                                >
                                                    11:08 am
                                                </p>
                                            </div>
                                            <div className="text-truncate">
                                                What Can i do right now?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <span
                                                className="
                                                        status
                                                        rounded-circle
                                                    "
                                            ></span>
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar2.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Elizabeth Martin
                                                    <span
                                                        className="
                                                                badge badge-info
                                                            "
                                                    >
                                                        4
                                                    </span>
                                                </h6>
                                                <p
                                                    className="
                                                            small
                                                            text-muted
                                                            text-nowrap
                                                            ms-4
                                                            mb-0
                                                        "
                                                >
                                                    11:08 am
                                                </p>
                                            </div>
                                            <div className="text-truncate">
                                                <i
                                                    className="
                                                            zmdi zmdi-file-text
                                                            me-1
                                                        "
                                                ></i>
                                                It is a long established fact
                                                that a reader w...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="online">
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <span
                                                className="
                                                        status
                                                        rounded-circle
                                                    "
                                            ></span>
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar3.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    David Wallace
                                                </h6>
                                                <p
                                                    className="
                                                            small
                                                            text-muted
                                                            text-nowrap
                                                            ms-4
                                                            mb-0
                                                        "
                                                >
                                                    11:08 am
                                                </p>
                                            </div>
                                            <div className="text-truncate">
                                                <div className="wave">
                                                    <span className="dot"></span>
                                                    <span className="dot"></span>
                                                    <span className="dot"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="away">
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <span
                                                className="
                                                        status
                                                        rounded-circle
                                                    "
                                            ></span>
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar4.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Sean Black
                                                </h6>
                                                <p
                                                    className="
                                                            small
                                                            text-muted
                                                            text-nowrap
                                                            ms-4
                                                            mb-0
                                                        "
                                                >
                                                    11:08 am
                                                </p>
                                            </div>
                                            <div className="text-truncate">
                                                <i
                                                    className="
                                                            zmdi zmdi-phone-end
                                                            me-1
                                                        "
                                                ></i>
                                                It is a long established fact
                                                that a reader w...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <span
                                                className="
                                                        status
                                                        rounded-circle
                                                    "
                                            ></span>
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar6.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Terry Carter
                                                </h6>
                                                <p
                                                    className="
                                                            small
                                                            text-muted
                                                            text-nowrap
                                                            ms-4
                                                            mb-0
                                                        "
                                                >
                                                    16-07-2020
                                                </p>
                                            </div>
                                            <div className="text-truncate">
                                                Hello, Terry are you there?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <span
                                                className="
                                                        status
                                                        rounded-circle
                                                    "
                                            ></span>
                                            <div
                                                className="
                                                        avatar
                                                        rounded-circle
                                                        no-image
                                                        cyan
                                                    "
                                            >
                                                <span>MS</span>
                                            </div>
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Michelle Schultz
                                                </h6>
                                                <p
                                                    className="
                                                            small
                                                            text-muted
                                                            text-nowrap
                                                            ms-4
                                                            mb-0
                                                        "
                                                >
                                                    13-07-2020
                                                </p>
                                            </div>
                                            <div className="text-truncate">
                                                <i
                                                    className="
                                                            zmdi zmdi-file-text
                                                            me-1
                                                        "
                                                ></i>
                                                Meeting start in 20min please be
                                                ready...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <span
                                                className="
                                                        status
                                                        rounded-circle
                                                    "
                                            ></span>
                                            <div
                                                className="
                                                        avatar
                                                        rounded-circle
                                                        no-image
                                                        green
                                                    "
                                            >
                                                <span>RG</span>
                                            </div>
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    React Group
                                                </h6>
                                                <p
                                                    className="
                                                            small
                                                            text-muted
                                                            text-nowrap
                                                            ms-4
                                                            mb-0
                                                        "
                                                >
                                                    11:08 am
                                                </p>
                                            </div>
                                            <div className="text-truncate">
                                                It is a long established fact
                                                that a reader w...
                                                <div
                                                    className="
                                                            avatar-list
                                                            avatar-list-stacked
                                                            mt-1
                                                        "
                                                >
                                                    <img
                                                        className="
                                                                avatar
                                                                xs
                                                                rounded
                                                            "
                                                        src="assets/images/xs/avatar7.jpg"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Sean"
                                                    />
                                                    <img
                                                        className="
                                                                avatar
                                                                xs
                                                                rounded
                                                            "
                                                        src="assets/images/xs/avatar8.jpg"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Martin"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <span
                                                className="
                                                        status
                                                        rounded-circle
                                                    "
                                            ></span>
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar6.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Terry Carter
                                                </h6>
                                                <p
                                                    className="
                                                            small
                                                            text-muted
                                                            text-nowrap
                                                            ms-4
                                                            mb-0
                                                        "
                                                >
                                                    16-07-2020
                                                </p>
                                            </div>
                                            <div className="text-truncate">
                                                Hello, Terry are you there?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <span
                                                className="
                                                        status
                                                        rounded-circle
                                                    "
                                            ></span>
                                            <div
                                                className="
                                                        avatar
                                                        rounded-circle
                                                        no-image
                                                        cyan
                                                    "
                                            >
                                                <span>MS</span>
                                            </div>
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Michelle Schultz
                                                </h6>
                                                <p
                                                    className="
                                                            small
                                                            text-muted
                                                            text-nowrap
                                                            ms-4
                                                            mb-0
                                                        "
                                                >
                                                    13-07-2020
                                                </p>
                                            </div>
                                            <div className="text-truncate">
                                                <i
                                                    className="
                                                            zmdi zmdi-file-text
                                                            me-1
                                                        "
                                                ></i>
                                                Meeting start in 20min please be
                                                ready...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    className="tab-pane fade"
                    id="nav-tab-phone"
                    role="tabpanel"
                >
                    <div
                        className="
                                d-flex
                                justify-content-between
                                align-items-center
                                mb-4
                            "
                    >
                        <h3 className="mb-0 text-primary">Call</h3>
                        <div>
                            <button className="btn btn-dark" type="button">
                                New Call
                            </button>
                        </div>
                    </div>

                    <div className="form-group input-group-lg search mb-3">
                        <i className="zmdi zmdi-search"></i>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                        />
                    </div>

                    <ul className="chat-list">
                        <li
                            className="
                                    header
                                    d-flex
                                    justify-content-between
                                    ps-3
                                    pe-3
                                    mb-1
                                "
                        >
                            <span>RECENT CALL</span>
                            <div className="dropdown">
                                <a
                                    className="
                                            btn btn-link
                                            px-1
                                            py-0
                                            border-0
                                            text-muted
                                            dropdown-toggle
                                        "
                                    href="#"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                ></a>
                                <div
                                    className="
                                            dropdown-menu dropdown-menu-right
                                        "
                                >
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar10.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Michelle Green
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                <i
                                                    className="
                                                            zmdi
                                                            zmdi-phone-missed
                                                            me-1
                                                        "
                                                ></i>
                                                Yesterday at 6:08 PM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar9.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Jane Hunt
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                <i
                                                    className="
                                                            zmdi
                                                            zmdi-phone-missed
                                                            me-1
                                                        "
                                                ></i>
                                                Yesterday at 6:08 PM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar8.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Susie Willis
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                <i
                                                    className="
                                                            zmdi
                                                            zmdi-phone-missed
                                                            me-1
                                                        "
                                                ></i>
                                                Yesterday at 6:08 PM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar1.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Marshall Nichols
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                <i
                                                    className="
                                                            zmdi
                                                            zmdi-phone-forwarded
                                                            me-1
                                                        "
                                                ></i>
                                                Yesterday at 6:08 PM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar8.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Jason Porter
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                <i
                                                    className="
                                                            zmdi
                                                            zmdi-phone-missed
                                                            me-1
                                                        "
                                                ></i>
                                                Yesterday at 6:08 PM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar1.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Darryl Day
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                <i
                                                    className="
                                                            zmdi
                                                            zmdi-phone-forwarded
                                                            me-1
                                                        "
                                                ></i>
                                                Yesterday at 6:08 PM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    className="tab-pane fade"
                    id="nav-tab-contact"
                    role="tabpanel"
                >
                    <div
                        className="
                                d-flex
                                justify-content-between
                                align-items-center
                                mb-4
                            "
                    >
                        <h3 className="mb-0 text-primary">Contact</h3>
                        <div>
                            <button
                                className="btn btn-dark"
                                type="button"
                                data-toggle="modal"
                                data-target="#InviteFriends"
                            >
                                Invite Friends
                            </button>
                        </div>
                    </div>

                    <div className="form-group input-group-lg search mb-3">
                        <i className="zmdi zmdi-search"></i>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                        />
                    </div>

                    <ul className="chat-list">
                        <li
                            className="
                                    header
                                    d-flex
                                    justify-content-between
                                    ps-3
                                    pe-3
                                    mb-1
                                "
                        >
                            <span>A</span>
                            <div className="dropdown">
                                <a
                                    className="
                                            btn btn-link
                                            px-1
                                            py-0
                                            border-0
                                            text-muted
                                            dropdown-toggle
                                        "
                                    href="#"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                ></a>
                                <div
                                    className="
                                            dropdown-menu dropdown-menu-right
                                        "
                                >
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar1.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Amelia Green
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                last seen 2 hours ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar3.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Ava Green
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                last seen 1 hours ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li
                            className="
                                    header
                                    d-flex
                                    justify-content-between
                                    ps-3
                                    pe-3
                                    mb-1
                                "
                        >
                            <span>C</span>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar4.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Charlotte Green
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                last seen 6 hours ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar5.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Chloe Green
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                last seen 3 hours ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar6.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Charles Green
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                last seen 2 hours ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li
                            className="
                                    header
                                    d-flex
                                    justify-content-between
                                    ps-3
                                    pe-3
                                    mb-1
                                "
                        >
                            <span>D</span>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar4.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    David Green
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                last seen 6 hours ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li
                            className="
                                    header
                                    d-flex
                                    justify-content-between
                                    ps-3
                                    pe-3
                                    mb-1
                                "
                        >
                            <span>M</span>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar8.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Michael Green
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                last seen 6 hours ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar8.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Mohammad
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                last seen 6 hours ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li
                            className="
                                    header
                                    d-flex
                                    justify-content-between
                                    ps-3
                                    pe-3
                                    mb-1
                                "
                        >
                            <span>T</span>
                        </li>
                        <li>
                            <div className="hover_action">
                                <button
                                    type="button"
                                    className="btn btn-link text-info"
                                >
                                    <i className="zmdi zmdi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-warning"
                                >
                                    <i className="zmdi zmdi-star"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link text-danger"
                                >
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                            <a href="#" className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar me-3">
                                            <img
                                                className="
                                                        avatar
                                                        rounded-circle
                                                    "
                                                src="assets/images/xs/avatar9.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div
                                            className="
                                                    media-body
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        d-flex
                                                        align-items-center
                                                        mb-1
                                                    "
                                            >
                                                <h6
                                                    className="
                                                            text-truncate
                                                            mb-0
                                                            me-auto
                                                        "
                                                >
                                                    Tommy Green
                                                </h6>
                                            </div>
                                            <div className="text-truncate">
                                                last seen 6 hours ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    className="tab-pane fade"
                    id="nav-tab-pages"
                    role="tabpanel"
                >
                    <div
                        className="
                                d-flex
                                justify-content-between
                                align-items-center
                                mb-4
                            "
                    >
                        <h3 className="mb-0 text-primary">Pages</h3>
                    </div>

                    <div className="card border-0">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0 mt-3">
                                <a className="link" href="signin.html">
                                    <i className="zmdi zmdi-label-alt me-2"></i>
                                    Sign in
                                </a>
                            </li>
                            <li className="list-group-item border-0">
                                <a className="link" href="signup.html">
                                    <i className="zmdi zmdi-label-alt me-2"></i>
                                    Sign up
                                </a>
                            </li>
                            <li className="list-group-item border-0">
                                <a className="link" href="password-reset.html">
                                    <i className="zmdi zmdi-label-alt me-2"></i>
                                    Reset Password
                                </a>
                            </li>
                            <li className="list-group-item border-0">
                                <a className="link" href="settings.html">
                                    <i className="zmdi zmdi-label-alt me-2"></i>
                                    Settings
                                </a>
                            </li>
                            <li className="list-group-item border-0">
                                <a className="link" href="single-chat.html">
                                    <i className="zmdi zmdi-label-alt me-2"></i>
                                    Single Chat Room
                                </a>
                            </li>
                            <li className="list-group-item border-0">
                                <a className="link" href="group-chat.html">
                                    <i className="zmdi zmdi-label-alt me-2"></i>
                                    Group Chat Room
                                </a>
                            </li>
                            <li className="list-group-item border-0">
                                <a className="link" href="audio-call.html">
                                    <i className="zmdi zmdi-label-alt me-2"></i>
                                    Audio Call Room
                                </a>
                            </li>
                            <li className="list-group-item border-0">
                                <a className="link" href="video-call.html">
                                    <i className="zmdi zmdi-label-alt me-2"></i>
                                    Video Call Room
                                </a>
                            </li>
                            <li className="list-group-item mb-3">
                                <a className="link" href="../doc/index.html">
                                    <i className="zmdi zmdi-label-alt me-2"></i>
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
