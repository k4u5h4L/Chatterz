import React from "react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar/Navbar";
// import Sidebar from "@/components/Sidebar/Sidebar";
const Sidebar = dynamic(() => import("@/components/Sidebar/Sidebar"), {
    ssr: false,
});
import Rightbar from "@/components/Rightbar/Rightbar";
import Start from "@/components/Home/Start/Start";
import Invite from "@/components/Home/Invite/Invite";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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

    return {
        props: {
            user: session.user,
        },
    };
};

const Index = ({ user }) => {
    return (
        <>
            <div id="layout" className="theme-cyan">
                <Navbar />
                <Sidebar />
                <Rightbar />
                <Start user={user} />
                <Invite />
            </div>
        </>
    );
};

export default Index;
