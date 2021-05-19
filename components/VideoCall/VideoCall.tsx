import React, { useEffect, useState, useRef } from "react";
import Peer from "peerjs";
import md5 from "md5";

import ChatContact from "../ChatContact/ChatContact";

const callOptions = { video: true, audio: false };

export default function VideoCall({ user, chatId, contact }) {
    const peer = new Peer(md5(user.email));

    // const optionRef = useRef({ video: true, audio: false });

    const theirEmail: string = md5(
        contact.members[0].email != user.email
            ? contact.members[0].email
            : contact.members[1].email
    );

    const myVideoRef: any = useRef();
    const theirVideoRef: any = useRef();

    const conn = peer.connect(theirEmail);

    conn.on("open", () => {
        conn.send("hi!");
    });

    peer.on("connection", (conn) => {
        conn.on("data", (data) => {
            // Will print 'hi!'
            console.log(data);
        });
        conn.on("open", () => {
            conn.send("hello!");
        });
    });

    const callThem = () => {
        // call
        navigator.mediaDevices
            .getUserMedia(callOptions)
            .then((stream) => {
                myVideoRef.current.srcObject = stream;

                const call = peer.call(theirEmail, stream);

                console.log("call object");
                console.log(call);

                call.on("stream", (remoteStream) => {
                    // Show stream in some <video> element.
                    console.log("streaming now! calling");

                    theirVideoRef.current.srcObject = remoteStream;
                });
            })
            .catch((err) => console.error("Failed to get local stream", err));
    };

    useEffect(() => {
        // navigator.mediaDevices
        //     .getUserMedia(callOptions)
        //     .then((stream) => {
        //         myVideoRef.current.srcObject = stream;
        //     })
        //     .catch((err) => console.error("Failed to get local stream", err));

        // answer
        peer.on("call", (call) => {
            console.log("receiving now!");
            navigator.mediaDevices
                .getUserMedia(callOptions)
                .then((stream) => {
                    // myVideoRef.current.srcObject = stream;
                    call.answer(stream); // Answer the call with an A/V stream.
                    call.on("stream", (remoteStream) => {
                        // Show stream in some <video> element.
                        console.log("streaming now! answering");
                        theirVideoRef.current.srcObject = remoteStream;
                    });
                })
                .catch((err) =>
                    console.error("Failed to get local stream", err)
                );
        });
    }, []);

    const disconnectFromCall = () => {
        peer.destroy();
    };

    return (
        <div className="chat-body">
            <div className="chat-header border-bottom py-xl-4 py-md-3 py-2">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <ChatContact user={user} contact={contact} />
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
                                type="button"
                                className="btn btn-sm btn-default"
                                data-toggle="tooltip"
                                title="Mute"
                            >
                                <i className="zmdi zmdi-mic-off"></i>
                            </button>

                            {/* <button
                                type="submit"
                                className="btn btn-sm btn-default"
                                data-toggle="tooltip"
                                title="Call Recording"
                            >
                                <i className="zmdi zmdi-dot-circle"></i>
                            </button> */}
                            <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                data-toggle="tooltip"
                                title="End call"
                                onClick={() => disconnectFromCall()}
                            >
                                <i className="zmdi zmdi-phone"></i>
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm btn-default"
                                data-toggle="tooltip"
                                title="Video off"
                            >
                                <i className="zmdi zmdi-videocam-off"></i>
                            </button>
                            {/* <button
                                type="submit"
                                className="btn btn-sm btn-default"
                                data-toggle="tooltip"
                                title="Screen Share"
                            >
                                <i className="zmdi zmdi-desktop-mac"></i>
                            </button> */}
                            {/* <button
                                type="submit"
                                className="btn btn-sm btn-default"
                                data-toggle="tooltip"
                                title="Chat Sidebar"
                            >
                                <i className="zmdi zmdi-comments"></i>
                            </button> */}
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
                            {/* <img
                                className="img-fluid rounded"
                                src="/assets/images/my-video-img.jpg"
                                alt=""
                            /> */}
                            <video
                                playsInline
                                ref={myVideoRef}
                                autoPlay
                                className="img-fluid rounded"
                            />
                        </div>
                        {/* <img
                            className="img-fluid rounded"
                            src="/assets/images/video-img.jpg"
                            alt=""
                        /> */}
                        <video
                            playsInline
                            ref={theirVideoRef}
                            autoPlay
                            className="img-fluid rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={() => callThem()}
                    >
                        <span
                            className="
                                                            d-none
                                                            d-md-inline-block
                                                            me-2
                                                        "
                        >
                            Answer
                        </span>
                    </button>
                    <p>
                        Both you and the person you&apos;re calling needs to
                        click on this button to be able to connect. It&apos;s
                        not a bug, it&apos;s a feature!
                    </p>
                </div>
            </div>
        </div>
    );
}
