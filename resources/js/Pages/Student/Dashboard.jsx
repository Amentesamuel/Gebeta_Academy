import Banner from "@/Layouts/Banner";
import Mainlayout from "@/Layouts/Mainlayout";
import React from "react";

const Dashboard = ({user}) => {
  
    return (
        <Mainlayout user={user}>
            <Banner>
                <h1 className="flex flex-col items-center text-5xl text-button font-sourGummy justify-center">
                    User Dashboard
                </h1>
            </Banner>
        </Mainlayout>
    );
};

export default Dashboard;
