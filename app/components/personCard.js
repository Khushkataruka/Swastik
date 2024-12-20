import React from "react";


const PersonCard = ({ name, imgUrl, email, role, education }) => {
    return (
        <div className="relative w-64 m-4 overflow-hidden rounded-lg border border-white shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105">
            <div className="relative w-full h-64">
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(${imgUrl})` }}
                ></div>
            </div>
            <div className="p-4 text-center text-black">
                <h4 className="text-lg font-semibold text-black">{education}</h4>
                <h4 className="text-sm mt-2 font-semibold text-black">{name + " " + "(" + role + ")"}</h4>
                {email && (
                    <div className="mt-4 flex justify-center items-center gap-2">
                        {/* <MailIcon className="text-black" /> Add Mail icon */}
                        <span className="text-black">{email}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PersonCard;
