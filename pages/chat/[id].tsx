import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Rightbar from "@/components/Rightbar/Rightbar";
import Convo from "@/components/Convo/Convo";
import Invite from "@/components/Home/Invite/Invite";

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
