"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import HomeCards from "@/app/components/HomeCards";
import Image from "next/image";

const Dashboard = () => {
    const { isSignedIn, user } = useUser();

    if (!isSignedIn) {
        return (
            <div className="min-h-screen bg-gray-800 text-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Please Sign In</h1>
                    <p className="mt-4">You need to be signed in to access the dashboard.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="text-gray-100 flex  items-center justify-center">
                {/* Main Content */}
                <div className="w-auto md:gap-10 mx-auto md:flex justify-center  bg-[#e2e2e2] rounded-lg shadow-lg p-8 text-center">
                    {/* Profile Photo */}
                    <div className="flex md:justify-center mb-6 items-center justify-center">
                        <Image
                            width={200}
                            height={200}
                            src={user.imageUrl || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-40 h-40 rounded-full border-4 border-gray-700"
                        />
                    </div>
                    <div>
                        {/* Welcome Message */}
                        <h1 className="text-3xl font-bold mb-6 text-blue-500">
                            Welcome, {user?.firstName + " " + user?.lastName || "Guest"}!
                        </h1>
                        <p className="text-lg mb-8 text-blue-400">
                            This is your personalized clinical pathology dashboard.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href={'/viewAppointments'}>
                                <button
                                    className="bg-blue-600 hover:bg-blue-400 transition-all duration-300 text-white px-6 py-3 rounded-lg"
                                    style={{ width: "200px" }}
                                >
                                    View Appointments
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <HomeCards />
        </>
    );
};

export default Dashboard;
