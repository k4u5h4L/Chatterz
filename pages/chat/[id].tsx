import React from "react";
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar/Navbar";
// import Sidebar from "@/components/Sidebar/Sidebar";
const Sidebar = dynamic(() => import("@/components/Sidebar/Sidebar"), {
    ssr: false,
});
import Rightbar from "@/components/Rightbar/Rightbar";
// import Convo from "@/components/Convo/Convo";
import Invite from "@/components/Home/Invite/Invite";

const Convo = dynamic(() => import("@/components/Convo/Convo"), {
    ssr: false,
});

const Chat = ({}) => {
    return (
        <>
            <div id="layout" className="theme-cyan">
                <Navbar />
                <Sidebar />
                <Rightbar />
                <Convo />
                <Invite />
            </div>
        </>
    );
};

export default Chat;
