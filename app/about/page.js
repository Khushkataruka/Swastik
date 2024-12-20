import React from 'react';
import PersonCard from '../components/personCard';
import HomeCards from '../components/HomeCards';
import Image from 'next/image';

const teamMembers = [
    {
        name: "Reeta Kataruka",
        role: "Founder",
        imgUrl: "https://via.placeholder.com/150",
        email: "reeta.kataruka@outlook.com",
        education: "MBBS,M.D Pathology"
    },
    {
        name: "Vijay Kataruka",
        role: "Co-founder",
        imgUrl: "https://via.placeholder.com/150",
        email: "vijay.kataruka@outlook.com",
        education: "MBBS,General Physician"
    },
];

const Page = () => {
    return (
        <div className="pageContainer mx-auto w-[80%]">
            {/* Vision Section */}
            <div className="visionSection mt-8">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h2>
                <p className="text-lg">
                    At Swastik Pathology Lab, our vision is to revolutionize the healthcare experience
                    by providing cutting-edge medical diagnostics, fostering patient trust, and delivering high-quality services
                    that contribute to better health outcomes. We strive to be a leader in healthcare innovation, setting new
                    standards for excellence in pathology testing, diagnostics, and patient care.
                </p>
            </div>

            {/* Goals Section */}
            <div className="goalsSection mt-8">

                <div className='flex items-center max-[1150px]:flex-col-reverse justify-center gap-10'>
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-blue-700">Our Goals</h2>
                        <ul className="list-disc pl-6 text-lg text-gray-700">
                            <li>Provide accurate and timely diagnostic results for better patient care.</li>
                            <li>Expand access to high-quality medical testing for all patients, regardless of location.</li>
                            <li>Ensure a patient-first approach by offering personalized care and support throughout the diagnostic process.</li>
                            <li>Invest in the latest medical technology and stay ahead of emerging healthcare trends.</li>
                            <li>Build lasting relationships with healthcare providers to offer integrated care to our patients.</li>
                            <li>Foster a culture of continuous improvement through research, development, and staff training.</li>
                        </ul>
                    </div>
                    <Image className='max-[1150px]' src={'/goals.jpg'} width={400} height={300} alt="services" />
                </div>
            </div>

            {/* Team Members Section */}
            <div className="teamContainer flex justify-center flex-wrap mx-auto mt-8">
                {teamMembers.map((member, index) => (
                    <PersonCard
                        key={index}
                        name={member.name}
                        imgUrl={member.imgUrl}
                        email={member.email}
                        role={member.role}
                        education={member.education}
                    />
                ))}
            </div>

            {/* Clinical Services Section */}
            <div className="servicesSection mt-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Our Clinical Services</h2>
                <p className="text-lg text-black">
                    Swastik Pathology Lab offers a wide range of diagnostic services that help healthcare providers
                    in the diagnosis and treatment of their patients. We specialize in blood tests, imaging, and
                    genetic analysis, among others. Our goal is to ensure accurate, reliable, and timely reports
                    that assist in effective patient care. Some of our key services include:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mt-4">
                    <li>Comprehensive blood tests and analysis</li>
                    <li>Genetic testing for hereditary conditions</li>
                    <li>Immunology testing for autoimmune diseases</li>
                    <li>Microbiology and infectious disease testing</li>
                    <li>Pathological services for cancer screening and diagnosis</li>
                    <li>Advanced imaging techniques for accurate diagnostics</li>
                </ul>
            </div>
            <HomeCards />
        </div>
    );
};

export default Page;
