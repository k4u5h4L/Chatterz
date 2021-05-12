import React from "react";

export default function Invite() {
    return (
        <div
            className="modal fade"
            id="InviteFriends"
            tabIndex={-1}
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Invite New Friends</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" />
                                <small
                                    id="emailHelp"
                                    className="form-text text-muted"
                                >
                                    We&apos;ll never share your email with
                                    anyone else.
                                </small>
                            </div>
                        </form>
                        <div className="mt-5">
                            <button type="button" className="btn btn-primary">
                                Send Invite
                            </button>
                            <button
                                type="button"
                                className="btn btn-link"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
