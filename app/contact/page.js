"use client"
import React from 'react';
import { useUser } from '@clerk/nextjs';
import HomeCards from '../components/HomeCards';
// import { Phone, WhatsApp } from '@mui/icons-material';  // Importing icons

const ContactUs = () => {
    const phone = "9545139197";
    const phone1 = "8459834370";

    const { isSignedIn, user } = useUser();

    const formSubmit = async (e) => {
        const phoneNo = e.get("phoneNo");
        const email = user.emailAddresses[0].emailAddress;
        const message = e.get("message");
        const data = {
            email,
            phoneNo,
            message
        };

        try {
            const res = await fetch("/api/Contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            const response = await res.json();
            if (res.ok) {
                alert(response.message);
            }
            else {
                console.error(response.details);
            }
        }
        catch (e) {
            console.error(e.message);
            console.log("Unable to post");
        }
    }

    if (isSignedIn) {
        return (
            <>
                <div className='flex justify-center gap-10 flex-wrap-reverse items-center'>
                    <div className="box flex flex-col w-auto gap-10">
                        <div className="card bg-blue-600 text-white p-4 rounded-xl">
                            <h2 className='font-bold flex items-center mb-2'>
                              <span className='ml-2'>Phone:</span>
                                <span className='mx-2 font-semibold'>
                                    {phone} | {phone1}
                                </span>
                            </h2>
                            <h2 className='font-bold flex items-center'>
                             <span className='ml-2'>WhatsApp:</span>
                                <span className='mx-2 font-semibold'>
                                    {phone}
                                </span>
                            </h2>
                        </div>
                        <iframe className=' max-md:w-[300px] max-md:h-[450px] max-md:mb-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.3576829868753!2d75.31685987399237!3d19.867112926663502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9867668e59d1%3A0x3e00720a165fcb9b!2sSwastik%20Pathology%20Lab!5e0!3m2!1sen!2sin!4v1734020359846!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="text-white border w-[400px]">
                        <section className="bg-gray-50 text-[#5A9BD5] ">
                            <div className="py-8 px-4 max-w-screen-md ">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-500 ">
                                    Contact Us
                                </h2>
                                <p className="mb-8 lg:mb-16 font-light text-center  text-blue-500 sm:text-xl">
                                    We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
                                </p>
                                <form action={formSubmit} className="space-y-8">
                                    <div>
                                        <label htmlFor="phoneNo" className="block mb-2 text-sm font-medium  bg-white text-[#5A9BD5]">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phoneNo"
                                            name="phoneNo"
                                            className="shadow-sm border border-gray-300 text-sm rounded-lg bg-white text-[#5A9BD5]  block w-full p-2.5"
                                            placeholder="Enter your phone number"
                                            required
                                            minLength={10}
                                            maxLength={10}
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="phoneNo" className="block mb-2 text-sm font-medium  bg-white text-[#5A9BD5]">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            className="shadow-sm border border-gray-300 text-sm rounded-lg bg-white text-[#5A9BD5]  block w-full p-2.5"
                                            placeholder="Write your message here..."
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-[#132445] transition-all duration-200 sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
                <HomeCards />
            </>
        );
    }
    else {
        return (
            <>
                <div>
                    <h1 className='text-white text-3xl min-h-screen text-center'>Please Login to Continue</h1>
                </div>
            </>
        )
    }
};

export default ContactUs;
