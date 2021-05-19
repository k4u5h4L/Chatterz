import React from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

import Navbar from "@/components/Navbar/Navbar";
// import Sidebar from "@/components/Sidebar/Sidebar";
const Sidebar = dynamic(() => import("@/components/Sidebar/Sidebar"), {
    ssr: false,
});
import Rightbar from "@/components/Rightbar/Rightbar";
// import VideoCall from "@/components/VideoCall/VideoCall";
const VideoCall = dynamic(() => import("@/components/VideoCall/VideoCall"), {
    ssr: false,
});
import Invite from "@/components/Home/Invite/Invite";

import Chat from "@/models/Chat";

export const getServerSideProps: GetServerSideProps = async ({
    req,
    query,
}) => {
    const session = await getSession({ req });

    if (!session) {
        console.log("user is not logged in");

        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    const chat = await Chat.findOne({ chatId: query.id });

    return {
        props: {
            user: session.user,
            query: query,
            contact: JSON.parse(JSON.stringify(chat)),
        },
    };
};

const Video = ({ user, query, contact }) => {
    return (
        <>
            <div id="layout" className="theme-cyan">
                <Navbar />
                <Sidebar />
                <Rightbar />
                <div className="main px-xl-5 px-lg-4 px-3">
                    <VideoCall
                        user={user}
                        chatId={query.id}
                        contact={contact}
                    />
                </div>
                <Invite />
            </div>
        </>
    );
};

export default Video;
