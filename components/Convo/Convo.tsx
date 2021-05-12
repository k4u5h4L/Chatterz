import React from "react";

export default function Convo() {
    return (
        <div className="main px-xl-5 px-lg-4 px-3">
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
                                        <div className="text-truncate">
                                            online
                                        </div>
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
                                            href="audio-call.html"
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
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                >
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
                                    <span className="sr-only">
                                        Toggle Dropdown
                                    </span>
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

                <div className="chat-content">
                    <div className="container-xxl">
                        <ul className="list-unstyled py-4">
                            <li className="d-flex message">
                                <div className="mr-lg-3 me-2">
                                    <img
                                        className="avatar sm rounded-circle"
                                        src="/assets/images/xs/avatar5.jpg"
                                        alt="avatar"
                                    />
                                </div>

                                <div className="message-body">
                                    <span className="date-time text-muted">
                                        Jason, 7:19 PM
                                    </span>
                                    <div
                                        className="
                                                message-row
                                                d-flex
                                                align-items-center
                                            "
                                    >
                                        <div className="message-content p-3">
                                            Hello, <br />
                                            How are you?
                                        </div>

                                        <div className="dropdown">
                                            <a
                                                className="
                                                        text-muted
                                                        ms-1
                                                        p-2
                                                        text-muted
                                                    "
                                                href="#"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-more-vert
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
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="d-flex message">
                                <div className="mr-lg-3 me-2">
                                    <img
                                        className="avatar sm rounded-circle"
                                        src="/assets/images/xs/avatar5.jpg"
                                        alt="avatar"
                                    />
                                </div>

                                <div className="message-body">
                                    <span className="date-time text-muted">
                                        Jason, 7:19 PM
                                    </span>
                                    <div
                                        className="
                                                message-row
                                                d-flex
                                                align-items-center
                                            "
                                    >
                                        <div className="message-content p-3">
                                            Hello, please find attachment, let
                                            me know if any changes.
                                            <div className="attachment">
                                                <div className="media mt-2">
                                                    <div className="avatar me-2">
                                                        <div
                                                            className="
                                                                    avatar
                                                                    rounded
                                                                    no-image
                                                                    orange
                                                                "
                                                        >
                                                            <i
                                                                className="
                                                                        zmdi
                                                                        zmdi-collection-pdf
                                                                    "
                                                            ></i>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="
                                                                media-body
                                                                overflow-hidden
                                                            "
                                                    >
                                                        <h6
                                                            className="
                                                                    text-truncate
                                                                    mb-0
                                                                "
                                                        >
                                                            Design file.pdf
                                                        </h6>
                                                        <span
                                                            className="
                                                                    file-size
                                                                "
                                                        >
                                                            2.7 mb
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <a
                                                className="
                                                        text-muted
                                                        ms-1
                                                        p-2
                                                        text-muted
                                                    "
                                                href="#"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-more-vert
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
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li
                                className="
                                        d-flex
                                        message
                                        divider
                                        mt-xl-5 mt-md-3
                                        mb-xl-5 mb-md-3
                                    "
                            >
                                <small className="text-muted">Sunday</small>
                            </li>

                            <li className="d-flex message right">
                                <div className="message-body">
                                    <span className="date-time text-muted">
                                        7:19 PM
                                        <i
                                            className="
                                                    zmdi zmdi-check-all
                                                    text-primary
                                                "
                                        ></i>
                                    </span>
                                    <div
                                        className="
                                                message-row
                                                d-flex
                                                align-items-center
                                                justify-content-end
                                            "
                                    >
                                        <div className="dropdown">
                                            <a
                                                className="
                                                        text-muted
                                                        me-1
                                                        p-2
                                                        text-muted
                                                    "
                                                href="#"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-more-vert
                                                        "
                                                ></i>
                                            </a>
                                            <div className="dropdown-menu">
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            className="
                                                    message-content
                                                    border
                                                    p-3
                                                "
                                        >
                                            It is a long established fact that a
                                            reader will be distracted by the
                                            readable content of a page when
                                            looking at its layout.
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="d-flex message">
                                <div className="mr-lg-3 me-2">
                                    <img
                                        className="avatar sm rounded-circle"
                                        src="/assets/images/xs/avatar5.jpg"
                                        alt="avatar"
                                    />
                                </div>

                                <div className="message-body">
                                    <span className="date-time text-muted">
                                        Jason, 7:19 PM
                                    </span>
                                    <div
                                        className="
                                                message-row
                                                d-flex
                                                align-items-center
                                            "
                                    >
                                        <div className="message-content p-3">
                                            Okay, All the Lorem Ipsum generators
                                            on the Internet
                                        </div>

                                        <div className="dropdown">
                                            <a
                                                className="
                                                        text-muted
                                                        ms-1
                                                        p-2
                                                        text-muted
                                                    "
                                                href="#"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-more-vert
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
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="d-flex message right">
                                <div className="message-body">
                                    <span className="date-time text-muted">
                                        7:19 PM
                                        <i
                                            className="
                                                    zmdi zmdi-check-all
                                                    text-primary
                                                "
                                        ></i>
                                    </span>
                                    <div
                                        className="
                                                message-row
                                                d-flex
                                                align-items-center
                                                justify-content-end
                                            "
                                    >
                                        <div className="dropdown">
                                            <a
                                                className="
                                                        text-muted
                                                        me-1
                                                        p-2
                                                        text-muted
                                                    "
                                                href="#"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-more-vert
                                                        "
                                                ></i>
                                            </a>
                                            <div className="dropdown-menu">
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            className="
                                                    message-content
                                                    border
                                                    p-3
                                                "
                                        >
                                            Hello, David
                                        </div>
                                    </div>
                                    <div
                                        className="
                                                message-row
                                                d-flex
                                                align-items-center
                                                justify-content-end
                                            "
                                    >
                                        <div className="dropdown">
                                            <a
                                                className="
                                                        text-muted
                                                        me-1
                                                        p-2
                                                        text-muted
                                                    "
                                                href="#"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-more-vert
                                                        "
                                                ></i>
                                            </a>
                                            <div className="dropdown-menu">
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            className="
                                                    message-content
                                                    border
                                                    p-3
                                                "
                                        >
                                            We have send some project shot,
                                            please review
                                            <div
                                                className="
                                                        attachment
                                                        right-file
                                                    "
                                            >
                                                <img
                                                    className="rounded mt-1"
                                                    src="/assets/images/image-file/one-page-work-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="rounded mt-1"
                                                    src="/assets/images/image-file/one-page-work-2.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="rounded mt-1"
                                                    src="/assets/images/image-file/one-page-work-3.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="d-flex message">
                                <div className="mr-lg-3 me-2">
                                    <img
                                        className="avatar sm rounded-circle"
                                        src="/assets/images/xs/avatar5.jpg"
                                        alt="avatar"
                                    />
                                </div>

                                <div className="message-body">
                                    <span className="date-time text-muted">
                                        Jason, 7:19 PM
                                    </span>
                                    <div
                                        className="
                                                message-row
                                                d-flex
                                                align-items-center
                                            "
                                    >
                                        <div className="message-content p-3">
                                            Okay,
                                        </div>

                                        <div className="dropdown">
                                            <a
                                                className="
                                                        text-muted
                                                        ms-1
                                                        p-2
                                                        text-muted
                                                    "
                                                href="#"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-more-vert
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
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="
                                                message-row
                                                d-flex
                                                align-items-center
                                            "
                                    >
                                        <div className="message-content p-3">
                                            Contrary to popular belief, Lorem
                                            Ipsum is not simply random text. It
                                            has roots in a piece of
                                            classNameical Latin literature from
                                            45 BC, making it over 2000 years
                                            old.
                                        </div>

                                        <div className="dropdown">
                                            <a
                                                className="
                                                        text-muted
                                                        ms-1
                                                        p-2
                                                        text-muted
                                                    "
                                                href="#"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-more-vert
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
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="
                                                message-row
                                                d-flex
                                                align-items-center
                                            "
                                    >
                                        <div className="message-content p-3">
                                            <div className="attachment">
                                                <div className="media mt-2">
                                                    <div className="avatar me-2">
                                                        <div
                                                            className="
                                                                    avatar
                                                                    rounded
                                                                    no-image
                                                                    cyan
                                                                "
                                                        >
                                                            <i
                                                                className="
                                                                        zmdi
                                                                        zmdi-file
                                                                    "
                                                            ></i>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="
                                                                media-body
                                                                overflow-hidden
                                                            "
                                                    >
                                                        <h6
                                                            className="
                                                                    text-truncate
                                                                    mb-0
                                                                "
                                                        >
                                                            Design file.psd
                                                        </h6>
                                                        <span
                                                            className="
                                                                    file-size
                                                                "
                                                        >
                                                            22.5 mb
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="media mt-2">
                                                    <div className="avatar me-2">
                                                        <div
                                                            className="
                                                                    avatar
                                                                    rounded
                                                                    no-image
                                                                    green
                                                                "
                                                        >
                                                            <i
                                                                className="
                                                                        zmdi
                                                                        zmdi-file-text
                                                                    "
                                                            ></i>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="
                                                                media-body
                                                                overflow-hidden
                                                            "
                                                    >
                                                        <h6
                                                            className="
                                                                    text-truncate
                                                                    mb-0
                                                                "
                                                        >
                                                            Project detail.doc
                                                        </h6>
                                                        <span
                                                            className="
                                                                    file-size
                                                                "
                                                        >
                                                            2.8 mb
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <a
                                                className="
                                                        text-muted
                                                        ms-1
                                                        p-2
                                                        text-muted
                                                    "
                                                href="#"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-more-vert
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
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li
                                className="
                                        d-flex
                                        message
                                        divider
                                        mt-xl-5 mt-md-3
                                        mb-xl-5 mb-md-3
                                    "
                            >
                                <small className="text-muted">Today</small>
                            </li>

                            <li className="d-flex message right">
                                <div className="message-body">
                                    <span className="date-time text-muted">
                                        7:19 PM
                                        <i
                                            className="
                                                    zmdi zmdi-check-all
                                                    text-primary
                                                "
                                        ></i>
                                    </span>
                                    <div
                                        className="
                                                message-row
                                                d-flex
                                                align-items-center
                                                justify-content-end
                                            "
                                    >
                                        <div className="dropdown">
                                            <a
                                                className="
                                                        text-muted
                                                        me-1
                                                        p-2
                                                        text-muted
                                                    "
                                                href="#"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-more-vert
                                                        "
                                                ></i>
                                            </a>
                                            <div className="dropdown-menu">
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            className="
                                                    message-content
                                                    border
                                                    p-3
                                                "
                                        >
                                            If you are going to use a passage of
                                            Lorem Ipsum, you need to be sure
                                            there isn&apos;t anything
                                            embarrassing hidden in the middle of
                                            text.
                                        </div>
                                    </div>
                                    <div
                                        className="
                                                message-row
                                                d-flex
                                                align-items-center
                                                justify-content-end
                                            "
                                    >
                                        <div className="dropdown">
                                            <a
                                                className="
                                                        text-muted
                                                        me-1
                                                        p-2
                                                        text-muted
                                                    "
                                                href="#"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-more-vert
                                                        "
                                                ></i>
                                            </a>
                                            <div className="dropdown-menu">
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            className="
                                                    message-content
                                                    border
                                                    p-3
                                                "
                                        >
                                            <div
                                                className="
                                                        attachment
                                                        right-file
                                                    "
                                            >
                                                <div className="media mt-2">
                                                    <div className="avatar ms-2">
                                                        <div
                                                            className="
                                                                    avatar
                                                                    rounded
                                                                    no-image
                                                                    red
                                                                "
                                                        >
                                                            <i
                                                                className="
                                                                        zmdi
                                                                        zmdi-videocam
                                                                    "
                                                            ></i>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="
                                                                media-body
                                                                overflow-hidden
                                                            "
                                                    >
                                                        <h6
                                                            className="
                                                                    text-truncate
                                                                    mb-0
                                                                "
                                                        >
                                                            Animation logo.aep
                                                        </h6>
                                                        <span
                                                            className="
                                                                    file-size
                                                                "
                                                        >
                                                            47.2 mb
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="d-flex message">
                                <div className="mr-lg-3 me-2">
                                    <img
                                        className="avatar sm rounded-circle"
                                        src="/assets/images/xs/avatar5.jpg"
                                        alt="avatar"
                                    />
                                </div>

                                <div className="message-body">
                                    <div
                                        className="
                                                message-row
                                                d-flex
                                                align-items-center
                                            "
                                    >
                                        <div className="message-content p-3">
                                            <div className="wave">
                                                <span className="dot"></span>
                                                <span className="dot"></span>
                                                <span className="dot"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="chat-footer border-top py-xl-4 py-lg-2 py-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <div className="input-group align-items-center">
                                    <input
                                        type="text"
                                        className="form-control border-0 pl-0"
                                        placeholder="Type your message..."
                                    />

                                    <div
                                        className="
                                                input-group-append
                                                d-none d-sm-block
                                            "
                                    >
                                        <span
                                            className="
                                                    input-group-text
                                                    border-0
                                                "
                                        >
                                            <button
                                                className="
                                                        btn btn-sm btn-link
                                                        text-muted
                                                    "
                                                data-toggle="tooltip"
                                                title="Refresh"
                                                type="button"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-refresh
                                                            font-22
                                                        "
                                                ></i>
                                            </button>
                                        </span>
                                    </div>
                                    <div className="input-group-append">
                                        <span
                                            className="
                                                    input-group-text
                                                    border-0
                                                "
                                        >
                                            <button
                                                className="
                                                        btn btn-sm btn-link
                                                        text-muted
                                                    "
                                                data-toggle="tooltip"
                                                title="Smaily"
                                                type="button"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-mood
                                                            font-22
                                                        "
                                                ></i>
                                            </button>
                                        </span>
                                    </div>
                                    <div className="input-group-append">
                                        <span
                                            className="
                                                    input-group-text
                                                    border-0
                                                "
                                        >
                                            <button
                                                className="
                                                        btn btn-sm btn-link
                                                        text-muted
                                                    "
                                                data-toggle="tooltip"
                                                title="Attachment"
                                                type="button"
                                            >
                                                <i
                                                    className="
                                                            zmdi zmdi-attachment
                                                            font-22
                                                        "
                                                ></i>
                                            </button>
                                        </span>
                                    </div>

                                    <div className="input-group-append">
                                        <span
                                            className="
                                                    input-group-text
                                                    border-0
                                                    pr-0
                                                "
                                        >
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                <span
                                                    className="
                                                            d-none
                                                            d-md-inline-block
                                                            me-2
                                                        "
                                                >
                                                    Send
                                                </span>
                                                <i
                                                    className="
                                                            zmdi zmdi-mail-send
                                                        "
                                                ></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-detail-sidebar py-xl-4 py-3 px-xl-4 px-3">
                <div className="d-flex flex-column">
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
                                User Details
                            </h6>
                            <span className="text-muted">
                                Update your profile details
                            </span>
                        </div>
                        <div>
                            <button
                                className="
                                        btn btn-link
                                        text-muted
                                        close-chat-sidebar
                                    "
                                type="button"
                            >
                                <i className="zmdi zmdi-close"></i>
                            </button>
                        </div>
                    </div>
                    <div className="body mt-4">
                        <div className="d-flex justify-content-center">
                            <div className="avatar xxl">
                                <img
                                    className="avatar xxl rounded-circle"
                                    src="/assets/images/sm/avatar2.jpg"
                                    alt="avatar"
                                />
                            </div>
                        </div>
                        <div className="text-center mt-3 mb-5">
                            <h4>Jason Porter</h4>
                            <span className="text-muted">
                                <a
                                    href="/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="e984808a818c85858cc78e9b8c8c87a98e84888085c78a8684"
                                >
                                    [email&#160;protected]
                                </a>
                            </span>
                            <p>+14 123 456 789 - New york (USA)</p>
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
                                <span>mutual friend</span>
                            </li>
                            <li>
                                <a href="#" className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="avatar me-3">
                                                <img
                                                    className="
                                                            avatar
                                                            rounded-circle
                                                        "
                                                    src="/assets/images/xs/avatar1.jpg"
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
                                                    +14 123 456 258
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="avatar me-3">
                                                <img
                                                    className="
                                                            avatar
                                                            rounded-circle
                                                        "
                                                    src="/assets/images/xs/avatar2.jpg"
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
                                                    +14 123 456 963
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="avatar me-3">
                                                <img
                                                    className="
                                                            avatar
                                                            rounded-circle
                                                        "
                                                    src="/assets/images/xs/avatar3.jpg"
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
                                                    </h6>
                                                </div>
                                                <div className="text-truncate">
                                                    +14 123 456 753
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="addnew-user-sidebar py-xl-4 py-3 px-xl-4 px-3">
                <div className="d-flex flex-column">
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
                                Add new member
                            </h6>
                            <span className="text-muted">
                                Update your profile details
                            </span>
                        </div>
                        <div>
                            <button
                                className="
                                        btn btn-link
                                        text-muted
                                        close-chat-sidebar
                                    "
                                type="button"
                            >
                                <i className="zmdi zmdi-close"></i>
                            </button>
                        </div>
                    </div>
                    <div className="body mt-4">
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
                                                dropdown-menu
                                                dropdown-menu-right
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
                                        <i className="zmdi zmdi-plus-circle"></i>
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
                                                    src="/assets/images/xs/avatar1.jpg"
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
                                        <i className="zmdi zmdi-plus-circle"></i>
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
                                                    src="/assets/images/xs/avatar3.jpg"
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
                                        <i className="zmdi zmdi-plus-circle"></i>
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
                                                    src="/assets/images/xs/avatar4.jpg"
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
                                        <i className="zmdi zmdi-plus-circle"></i>
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
                                                    src="/assets/images/xs/avatar5.jpg"
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
                                        <i className="zmdi zmdi-plus-circle"></i>
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
                                                    src="/assets/images/xs/avatar6.jpg"
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
                                        <i className="zmdi zmdi-plus-circle"></i>
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
                                                    src="/assets/images/xs/avatar4.jpg"
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
                                        <i className="zmdi zmdi-plus-circle"></i>
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
                                                    src="/assets/images/xs/avatar8.jpg"
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
                                        <i className="zmdi zmdi-plus-circle"></i>
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
                                                    src="/assets/images/xs/avatar8.jpg"
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
                                        <i className="zmdi zmdi-plus-circle"></i>
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
                                                    src="/assets/images/xs/avatar9.jpg"
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
                </div>
            </div>
        </div>
    );
}
