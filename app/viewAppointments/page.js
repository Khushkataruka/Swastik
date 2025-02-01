"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import HomeCards from "../components/HomeCards";
import Image from 'next/image'; // Import Image from Next.js

const fetchData = async (email) => {
    try {
        const res = await fetch(`/api/Appointment?email=${email}`);
        const response = await res.json();

        if (res.ok) {
            console.log("Appointments fetched successfully");
            return response.result;
        } else {
            console.error("An error occurred while fetching appointments:", response.error);
            return [];
        }
    } catch (e) {
        console.error("Fetch error:", e.message);
        return [];
    }
};

const ViewAppointmentsPage = () => {
    const [appointments, setAppointments] = useState([]);
    const { isLoaded, user, isSignedIn } = useUser();

    useEffect(() => {
        const fetchAppointments = async () => {
            if (isLoaded && user.emailAddresses[0]?.emailAddress) {
                const data = await fetchData(user.emailAddresses[0]?.emailAddress);
                setAppointments(data);
            }
        };
        if (isSignedIn) fetchAppointments();
    }, [isLoaded, user, isSignedIn]); // Added isSignedIn to the dependencies

    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white text-3xl text-lightblue-500">
                <Image src="/loading-3692.gif" alt="Loading..." width={200} height={200} />
            </div>
        );
    }

    if (isLoaded) {
        if (appointments.length === 0) {
            return <p className="text-center text-lightblue-300 text-2xl">No appointments found.</p>;
        }
        return (
            <div className="w-full md:w-4/5 mx-auto py-10">
                <h2 className="text-3xl text-center font-semibold text-lightblue-500 mb-10 text-[#42A5F5]">Your Appointments</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse bg-white">
                        <thead className="bg-lightblue-100">
                            <tr>
                                <th className="border px-6 py-3 text-left text-sm font-semibold text-lightblue-600 text-[#42A5F5]">Date</th>
                                <th className="border px-6 py-3 text-left text-sm font-semibold text-lightblue-600 text-[#42A5F5]">Time</th>
                                <th className="border px-6 py-3 text-left text-sm font-semibold text-lightblue-600 text-[#42A5F5]">Location</th>
                                <th className="border px-6 py-3 text-left text-sm font-semibold text-lightblue-600 text-[#42A5F5]">Status</th>
                                <th className="border px-6 py-3 text-left text-sm font-semibold text-lightblue-600 text-[#42A5F5]">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment._id} className="border-b hover:bg-lightblue-50">
                                    <td className="border px-6 py-4 text-sm text-lightblue-500">
                                        {appointment.date ? new Date(appointment.date).toLocaleDateString() : "N/A"}
                                    </td>
                                    <td className="border px-6 py-4 text-sm text-lightblue-500">
                                        {appointment.date ? new Date(appointment.date).toLocaleTimeString() : "N/A"}
                                    </td>
                                    <td className="border px-6 py-4 text-sm text-lightblue-500">
                                        {appointment.location || "N/A"}
                                    </td>
                                    <td className="border px-6 py-4 text-sm text-lightblue-500">
                                        {appointment.status || "N/A"}
                                    </td>
                                    <td className="border px-6 py-4 text-sm text-lightblue-500">
                                        {appointment.notes || "No additional notes"}
                                    </td>              
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <HomeCards />
            </div>
        );
    } else {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white text-3xl text-lightblue-500">
                <Image src="/loading-3692.gif" alt="Loading..." width={200} height={200} />
            </div>
        );
    }
};

export default ViewAppointmentsPage;
