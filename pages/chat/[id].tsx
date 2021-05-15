import React from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

import Chat from "@/models/Chat";
import Navbar from "@/components/Navbar/Navbar";
// import Sidebar from "@/components/Sidebar/Sidebar";
const Sidebar = dynamic(() => import("@/components/Sidebar/Sidebar"), {
    ssr: false,
});
import Rightbar from "@/components/Rightbar/Rightbar";
import Convo from "@/components/Convo/Convo";
import Invite from "@/components/Home/Invite/Invite";

// const Convo = dynamic(() => import("@/components/Convo/Convo"), {
//     ssr: false,
// });

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
    console.log(chat);

    return {
        props: {
            user: session.user,
            query: query,
            contact: JSON.parse(JSON.stringify(chat)),
        },
    };
};

const ChatComponent = ({ user, query, contact }) => {
    return (
        <>
            <div id="layout" className="theme-cyan">
                <Navbar />
                <Sidebar />
                <Rightbar />
                <Convo user={user} query={query} contact={contact} />
                <Invite />
            </div>
        </>
    );
};

export default ChatComponent;
