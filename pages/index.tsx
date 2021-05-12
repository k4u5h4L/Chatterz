import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Rightbar from "@/components/Rightbar/Rightbar";
import Start from "@/components/Home/Start/Start";
import Invite from "@/components/Home/Invite/Invite";

const Index = ({}) => {
    return (
        <>
            <div id="layout" className="theme-cyan">
                <Navbar />
                <Sidebar />
                <Rightbar />
                <Start />
                <Invite />
            </div>
        </>
    );
};

export default Index;
