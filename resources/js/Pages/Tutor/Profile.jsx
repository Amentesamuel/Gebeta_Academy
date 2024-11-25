import React from "react";
import Dashboard from "./Dashboard";
import { TutorBanner1 } from "../../../../public/img";

const Profile = ({ user }) => {
    return (
        <Dashboard>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold mb-4">Profile</h1>
                    <div className="rounded-full items-center justify-center w-12 h-12 shadow-lg bg-foreground">
                        <img
                            src={TutorBanner1}
                            alt=""
                            className="rounded-full w-12 cursor-pointer h-12 flex items-center justify-center"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white mt-2 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <form action="Put">
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex gap-5 items-center justify-center">
                                <label htmlFor="">Full Name</label>
                                <input
                                    type="text"
                                    value={user.name}
                                    className="rounded-md flex border border-gray-400"
                                />
                            </div>
                            <div className="flex gap-5 items-center justify-center">
                                <label htmlFor="">Full Name</label>
                                <input
                                    type="text"
                                    value={user.name}
                                    className="rounded-md flex border border-gray-400"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Dashboard>
    );
};

export default Profile;
