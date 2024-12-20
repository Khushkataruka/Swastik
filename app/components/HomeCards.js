"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
    {
        title: "Book Appointment",
        description:
            "Schedule your pathology tests with ease through our seamless appointment booking system.",
        link: "/bookAppointment",
        image: "/appointment.jpg",
    },
    {
        title: "Services",
        description:
            "Explore a wide range of pathology services designed to meet all your diagnostic needs efficiently.",
        link: "/services",
        image: "/services.jpg",
    },
    {
        title: "Feedback",
        description:
            "We value your feedback to improve our services and provide you with the best healthcare experience.",
        link: "/contact",
        image: "/feedback.jpg",
    },
    {
        title: "Our Facility",
        description: "Experience our advanced diagnostic facilities equipped with cutting-edge technology to deliver precise and reliable test results.",
        link: "/facility",
        image: "/facility.jpg",
    }
];


const HomeCards = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="homeCards grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
            {cards.map((card) => {
                return (
                    <div key={card.title} data-aos="zoom-out">
                        <a href={card.link}>
                            <div
                                className="card h-[250px] flex flex-col justify-center items-center text-center text-white w-full min-h-fit rounded-xl p-6 gap-4 my-4 transition-transform duration-300 transform hover:scale-105 relative"
                                style={{
                                    backgroundImage: `url(${card.image})`, // Set the background image dynamically
                                    backgroundSize: "cover", // Cover the entire card
                                    backgroundPosition: "center", // Center the image
                                    backgroundRepeat: "no-repeat", // Prevent image repetition
                                }}
                            >
                                <div className="absolute rounded-xl bg-black z-10 top-0 opacity-55 h-[250px] w-full"></div>
                                <div className="p-4 rounded-lg w-full">
                                    <h2 className="font-bold text-lg sm:text-xl relative z-20 text-white">
                                        {card.title}
                                    </h2>
                                    <p className="text-sm sm:text-base relative z-20 text-white mt-2">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div >
                );
            })}
        </div >
    );
};

export default HomeCards;
