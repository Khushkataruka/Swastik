"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useUser } from "@clerk/nextjs";

const Page = () => {
    const { isSignedIn, user } = useUser();
    const [load, setload] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in milliseconds
            once: true, // whether animation should happen only once
        });
    }, []);
    const formSubmit = async (field) => {
        if (!isSignedIn || !user) {
            alert("User is not Signed in");
            return;
        }

        const email = user.emailAddresses[0]?.emailAddress;
        const phoneNo = field.get("phoneNo");
        const date = new Date(`${field.get("date")}T${field.get("time")}:00`);

        // Check time range manually
        const appointmentTime = new Date(`${field.get("date")}T${field.get("time")}:00`);

        let location = field.get("location") === "Center Visit" ? "clinic" : "homeVisit";
        const notes = field.get("notes");
        const Address = field.get("address");

        if (!email) {
            alert("No email address found");
            return;
        }

        const data = {
            email,
            phoneNo,
            date: appointmentTime,
            location,
            Address,
            notes,
        };

        try {
            setload(false);
            const response = await fetch(`/api/sendConfirmation`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            setload(true);
            if (response.ok) {
                const responseData = await response.json();
                alert(responseData.message);
            } else {
                const errorData = await response.json();
                console.log("Failed to book appointment:", errorData);
            }
        } catch (error) {
            console.log("Error sending request:", error);
        }
    };

    if (load) {
        return (
            <div className="appointment-form bg-gray-50 text-[#5A9BD5] py-8 px-4">
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-center mb-6">Book an Appointment</h2>
                    <p className="text-center text-lg text-blue-500 mb-8">
                        Schedule your appointment with ease. Provide your details and confirm your booking!
                    </p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            formSubmit(formData);
                        }}
                        className="space-y-6"
                    >
                        <div>
                            <label
                                htmlFor="phoneNo"
                                className="block text-sm font-medium mb-2"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phoneNo"
                                name="phoneNo"
                                className="w-full p-2 rounded-md bg-white text-[#5A9BD5]"
                                required
                                minLength={10}
                                maxLength={10}
                            />
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium mb-2">
                                Appointment Date (Select from the next 3 days)
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="w-full p-2 rounded-md bg-white text-[#5A9BD5]"
                                required
                                min={new Date().toISOString().split("T")[0]} // today's date
                                max={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]} // 3 days from today
                            />
                        </div>
                        <div>
                            <label htmlFor="time" className="block text-sm font-medium mb-2">
                                Appointment Time (9:00 AM to 5:00 PM)
                            </label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                className="w-full p-2 rounded-md bg-white text-[#5A9BD5]"
                                required min={"09:00"} max={"17:00"}
                                placeholder="09:00 - 17:00"
                            />
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium mb-2">
                                Type of Visit
                            </label>
                            <select
                                id="location"
                                name="location"
                                className="w-full p-2 rounded-md bg-white text-[#5A9BD5]"
                                required
                            >
                                <option>Home Visit</option>
                                <option>Center Visit</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium mb-2">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="w-full p-2 rounded-md bg-white text-[#5A9BD5]"
                                placeholder="Enter your address"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="notes" className="block text-sm font-medium mb-2">
                                Additional Notes
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                rows="4"
                                className="w-full p-2 rounded-md bg-white text-[#5A9BD5]"
                                placeholder="Leave any special instructions or comments..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-[#132445] transition-all duration-300 text-white rounded-md font-medium focus:outline-none"
                        >
                            Book Appointment
                        </button>
                    </form>
                </section>
            </div>
        );
    } else {
        return (
            <div className="flex items-center text-white text-3xl justify-center min-h-screen">
                <img src="/loading-3692.gif" alt="Loading..." width={200} height={200} />
            </div>
        );
    }
};

export default Page;
