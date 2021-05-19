import React from "react";

export default function ChatContact({ user, contact }) {
    return (
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
                            {/* {data ? usersRef.current : null} */}
                            {contact.members[0].name == user.name
                                ? contact.members[1].name
                                : contact.members[0].name}
                        </h6>
                    </div>
                    {/* <div className="text-truncate">
                                            online
                                        </div> */}

                    <div className="text-truncate">
                        {contact.members[0].email == user.email
                            ? contact.members[1].email
                            : contact.members[0].email}
                    </div>
                </div>
            </div>
        </div>
    );
}
