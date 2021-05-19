import React from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Error from "next/error";

import Chat from "@/models/Chat";
import Navbar from "@/components/Navbar/Navbar";
// import Sidebar from "@/components/Sidebar/Sidebar";
const Sidebar = dynamic(() => import("@/components/Sidebar/Sidebar"), {
    ssr: false,
});
import Rightbar from "@/components/Rightbar/Rightbar";
import Convo from "@/components/Convo/Convo";
import Invite from "@/components/Home/Invite/Invite";

import dbConnect from "@/utils/dbConnect";
import { checkOtherPerson } from "@/utils/checkOtherPerson";

// const Convo = dynamic(() => import("@/components/Convo/Convo"), {
//     ssr: false,
// });

export const getServerSideProps: GetServerSideProps = async ({
    req,
    query,
}) => {
    await dbConnect();
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

    if (checkOtherPerson(session, chat)) {
        return {
            props: {
                user: {},
                query: {},
                contact: {},
                status: false,
            },
        };
    }

    return {
        props: {
            user: session.user,
            query: query,
            contact: JSON.parse(JSON.stringify(chat)),
            status: true,
        },
    };
};

const ChatComponent = ({ user, query, contact, status }) => {
    if (!status)
        return (
            <Error
                statusCode={500}
                error={`You are not authorised to view this chat`}
            />
        );
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
