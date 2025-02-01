import React from 'react';
import Image from 'next/image';
import HomeCards from '../components/HomeCards';

const facilities = [
    {
        id: 1,
        name: "Reception",
        image: "/reception.jpg",
        width: 400,
        height: 300,
    },
    {
        id: 2,
        name: "Automated Biochemistry",
        image: "/ECG.jpg",
        width: 400,
        height: 300,
    },
    {
        id: 3,
        name: "Automated Biochemistry",
        image: "/machine1.jpg",
        width: 400,
        height: 300,
    },
    {
        id: 4,
        name: "Automated Biochemistry",
        image: "/machine2.jpg",
        width: 400,
        height: 300,
    },
];

const facilityStanding = [
    {
        id: 5,
        name: "Factory Check-up",
        image: "/factoryBanner.jpg",
        width: 300,
        height: 300,
    },
    {
        id: 6,
        name: "Services",
        image: "/serviceBanner.jpg",
        width: 300,
        height: 300,
    },
];

const caseReports = [
    {
        id: 7,
        image: "/case_report1.jpg",
        width: 500,
        height: 500,
    },
    {
        id: 8,
        image: "/case_report2.jpg",
        width: 500,
        height: 500,
    },
];

const Page = () => {
    return (
        <div className="w-full min-h-screen p-8 flex flex-col items-center">
            {/* Facility Images */}
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Our Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] justify-center">
                {facilities.map((facility) => (
                    <div key={facility.id} className="flex flex-col items-center">
                        <Image src={facility.image} width={facility.width} height={facility.height} alt={facility.name} className="rounded-lg shadow-md" />
                        <h3 className="text-xl font-serif mt-3">{facility.name}</h3>
                    </div>
                ))}
            </div>

            {/* Standing Facility Images */}
            <h2 className="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Additional Services</h2>
            <div className="flex flex-wrap gap-10 justify-center w-[90%]">
                {facilityStanding.map((facility) => (
                    <div key={facility.id} className="flex flex-col items-center">
                        <Image src={facility.image} width={facility.width} height={facility.height} alt={facility.name} className="rounded-lg shadow-md" />
                        <h3 className="text-xl font-serif mt-3">{facility.name}</h3>
                    </div>
                ))}
            </div>

            {/* Case Reports */}
            <h2 className="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Case Reports</h2>
            <div className="flex flex-wrap gap-10 justify-center w-[90%]">
                {caseReports.map((report) => (
                    <Image key={report.id} src={report.image} width={report.width} height={report.height} alt="Case Report" className="rounded-lg shadow-md" />
                ))}
            </div>

            <HomeCards />
        </div>
    );
};

export default Page;
