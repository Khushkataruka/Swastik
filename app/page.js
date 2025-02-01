"use client";
import HomeCards from "./components/HomeCards";
import { useUser } from "@clerk/nextjs";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image"; // Import Image from Next.js


export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [message, setmessage] = useState("");

  useEffect(() => {
    const message = searchParams.get("message");
    if (message) {
      setmessage(message);

      // Remove the message query parameter after 1 second
      setTimeout(() => {
        setmessage("");
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        params.delete("message");
        router.replace(`?${params.toString()}`); // Update the URL without reloading the page
      }, 3000);
    }
  }, [searchParams, router]);

  const { isLoaded } = useUser();
  if (isLoaded) {
    return (
      <div>
        {message && (
          <div className="message fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 p-3 rounded-lg shadow-lg text-white text-lg font-semibold z-50 transition-all duration-500">
            {message}
          </div>
        )}
        <div
          className="home-hero w-full bg-gray-800 rounded-xl text-white flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url('/Background-Left.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px", // adjust height as needed
          }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-center p-4" data-aos="fade-up">
            Swastik Pathology Lab
          </h1>
          <p className="text-lg md:text-xl text-center mt-2 max-w-lg px-4 italic" data-aos="fade-down">
            &quot;Where Precision Meets Care:Unveiling Healths Hideen Truths.&quot;
          </p>
        </div>
        <div className="cards flex flex-wrap items-center justify-center m-4">
          <HomeCards />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center text-white text-3xl justify-center min-h-screen">
        <Image
          src="/loading-3692.gif"
          alt="Loading..."
          width={200} // Adjust the width as necessary
          height={200} // Adjust the height as necessary
        />
      </div>
    );
  }
}
