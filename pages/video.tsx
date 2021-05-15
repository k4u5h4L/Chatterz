import React from "react";
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar/Navbar";
// import Sidebar from "@/components/Sidebar/Sidebar";
const Sidebar = dynamic(() => import("@/components/Sidebar/Sidebar"), {
    ssr: false,
});
import Rightbar from "@/components/Rightbar/Rightbar";
import VideoCall from "@/components/VideoCall/VideoCall";
import Invite from "@/components/Home/Invite/Invite";

const Video = ({}) => {
    return (
        <>
            <div id="layout" className="theme-cyan">
                <Navbar />
                <Sidebar />
                <Rightbar />
                <div className="main px-xl-5 px-lg-4 px-3">
                    <VideoCall />
                </div>
                <Invite />
            </div>
        </>
    );
};

export default Video;
