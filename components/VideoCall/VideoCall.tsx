import React from "react";

export default function VideoCall() {
    return (
        <div className="chat-body">
            <div className="chat-header border-bottom py-xl-4 py-md-3 py-2">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-6 col-xl-4">
                            <div className="media">
                                <div className="me-3 show-user-detail">
                                    <span className="status rounded-circle"></span>
                                    <img
                                        className="avatar rounded-circle"
                                        src="/assets/images/xs/avatar5.jpg"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
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
                                    <div className="text-truncate">online</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-xl-8 text-end">
                            <ul className="nav justify-content-end">
                                <li
                                    className="
                                                nav-item
                                                list-inline-item
                                                d-none d-md-block
                                                me-3
                                            "
                                >
                                    <a
                                        href="#"
                                        className="nav-link text-muted px-3"
                                        data-toggle="collapse"
                                        data-target="#chat-search-div"
                                        aria-expanded="true"
                                        title="Search this chat"
                                    >
                                        <i
                                            className="
                                                        zmdi
                                                        zmdi-search
                                                        zmdi-hc-lg
                                                    "
                                        ></i>
                                    </a>
                                </li>
                                <li
                                    className="
                                                nav-item
                                                list-inline-item
                                                d-none d-sm-block
                                                me-3
                                            "
                                >
                                    <a
                                        href="#"
                                        className="nav-link text-muted px-3"
                                        title="videocam"
                                    >
                                        <i
                                            className="
                                                        zmdi
                                                        zmdi-videocam
                                                        zmdi-hc-lg
                                                    "
                                        ></i>
                                    </a>
                                </li>
                                <li
                                    className="
                                                nav-item
                                                list-inline-item
                                                d-none d-sm-block
                                                me-3
                                            "
                                >
                                    <a
                                        href="#"
                                        className="nav-link text-muted px-3"
                                        title="Call"
                                    >
                                        <i
                                            className="
                                                        zmdi
                                                        zmdi-phone-forwarded
                                                        zmdi-hc-lg
                                                    "
                                        ></i>
                                    </a>
                                </li>
                                <li
                                    className="
                                                nav-item
                                                list-inline-item
                                                add-user-btn
                                            "
                                >
                                    <a
                                        href="#"
                                        className="nav-link text-muted px-3"
                                        title="Add Account"
                                    >
                                        <i
                                            className="
                                                        zmdi
                                                        zmdi-account-add
                                                        zmdi-hc-lg
                                                    "
                                        ></i>
                                    </a>
                                </li>

                                <li
                                    className="
                                                nav-item
                                                list-inline-item
                                                d-block d-sm-none
                                                px-3
                                            "
                                >
                                    <div className="dropdown">
                                        <a
                                            className="
                                                        nav-link
                                                        text-muted
                                                        px-0
                                                    "
                                            href="#"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
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
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Search chat
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Attache Image
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Video call
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Call
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Add New
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="collapse" id="chat-search-div">
                <div className="container-xxl py-2">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Find messages in current conversation"
                        />
                        <div className="input-group-append">
                            <span className="input-group-text text-muted">
                                0 / 0
                            </span>
                        </div>
                        <div className="input-group-append">
                            <button type="button" className="btn btn-secondary">
                                Search
                            </button>
                            <button
                                type="button"
                                className="
                                            btn btn-secondary
                                            dropdown-toggle
                                            dropdown-toggle-split
                                        "
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div
                                className="
                                            dropdown-menu dropdown-menu-right
                                            shadow
                                            border-0
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
                                <div
                                    role="separator"
                                    className="dropdown-divider"
                                ></div>
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="
                            d-flex
                            justify-content-left
                            align-items-top
                            h-100
                            text-center
                            py-2
                        "
            >
                <div className="container-xxl">
                    <div
                        className="
                                    video-div
                                    overflow-hidden
                                    position-relative
                                "
                    >
                        <div
                            className="
                                        video-action-btn
                                        position-absolute
                                        p-2
                                        rounded
                                    "
                        >
                            <button
                                type="submit"
                                className="btn btn-sm btn-default"
                                data-toggle="tooltip"
                                title="Mute"
                            >
                                <i className="zmdi zmdi-mic-off"></i>
                            </button>
                            <button
                                type="submit"
                                className="btn btn-sm btn-default"
                                data-toggle="tooltip"
                                title="Call Recording"
                            >
                                <i className="zmdi zmdi-dot-circle"></i>
                            </button>
                            <button
                                type="submit"
                                className="btn btn-sm btn-danger"
                                data-toggle="tooltip"
                                title="End cll"
                            >
                                <i className="zmdi zmdi-phone"></i>
                            </button>
                            <button
                                type="submit"
                                className="btn btn-sm btn-default"
                                data-toggle="tooltip"
                                title="Screen Share"
                            >
                                <i className="zmdi zmdi-desktop-mac"></i>
                            </button>
                            <button
                                type="submit"
                                className="btn btn-sm btn-default"
                                data-toggle="tooltip"
                                title="Chat Sidebar"
                            >
                                <i className="zmdi zmdi-comments"></i>
                            </button>
                        </div>

                        <div
                            className="
                                        my-video
                                        position-absolute
                                        rounded
                                        overflow-hidden
                                        border
                                    "
                        >
                            <img
                                className="img-fluid rounded"
                                src="/assets/images/my-video-img.jpg"
                                alt=""
                            />
                        </div>
                        <img
                            className="img-fluid rounded"
                            src="/assets/images/video-img.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
