"use client"
import React from 'react';
import Image from 'next/image';
import CustomSlider from '../components/customeSlider';
import HomeCards from '../components/HomeCards';

const services = [
    {
        id: 1,
        name: "Haematology",
        content: "Blood tests like CBC, lipid profile, and liver/kidney function tests for early health issue detection."
    },
    {
        id: 2,
        name: "Urine Analysis",
        content: "Urine tests to detect infections, kidney health, and metabolic disorders like diabetes."
    },
    {
        id: 3,
        name: "Immunology Tests",
        content: "Tests for immune health, allergies, and autoimmune diseases like rheumatoid arthritis."
    },
    {
        id: 5,
        name: "Hormonal Testing",
        content: "Hormone tests for thyroid, adrenal, and reproductive health issues like PCOS and infertility."
    },
    {
        id: 6,
        name: "Microbiology Testing",
        content: "Detects infections from bacteria, viruses, fungi, and parasites for effective treatment."
    },
    {
        id: 7,
        name: "Cytology",
        content: "Cell analysis for abnormalities, infections, and cancer using Pap smears and FNAC."
    },
    {
        id: 8,
        name: "Histopathology",
        content: "Tissue examination to diagnose chronic diseases, tumors, and infections."
    },
    {
        id: 9,
        name: "Prenatal Screening",
        content: "Tests for fetal and maternal health, including NIPT and chromosomal abnormality screening."
    },
    {
        id: 10,
        name: "Home Sample Collection",
        content: "Doorstep collection of samples with strict hygiene and timely reporting."
    },
    {
        id: 11,
        name: "Specialized Veterinary Services",
        content: "Diagnostic tests for pets and livestock, including blood tests and hormone profiling."
    },
    {
        id: 12,
        name: "Factory Medical Checkup",
        content: "Affordable tests like lung function, ECG, and kidney tests for factory workers."
    },
    {
        id: 13,
        name: "Prepolicy and Post policy checkup",
        content: "Health checkups for insurance policies before and after issuance."
    }
]; const slides = [
    {
        image: "/slider1.jpg",
        heading: "Factory Medical Checkup",
        description: "Affordable tests like lung function, ECG, and kidney tests for factory workers."
    },
    {
        image: "/slider2.jpg",
        heading: "Specialized Veterinary Services",
        description: "Diagnostic tests for pets and livestock, including blood tests and hormone profiling."
    },
    {
        image: "/bloodTest.jpg",
        heading: "Haematology",
        description: "Blood tests like CBC, lipid profile, and liver/kidney function tests for early health issue detection."
    },
    {
        image: "/microbiologyTesting.jpg",
        heading: services[4].name,
        description: services[4].content
    },
    {
        image: "/stethescope.jpg",
        heading: services[11].name,
        description: services[11].content,
    }
];

const Page = () => {
    return (
        <div className="bg-[#E8F0F8] min-h-screen p-8">
            <CustomSlider slides={slides} autoPlay={true} interval={10000} />
            <section className=" my-8 hero flex gap-10 bg-white shadow-md p-6 rounded-xl max-[1400px]:flex-col max-[1400px]:items-center justify-center">
                <Image src={`/services.jpg`} width={400} height={600} alt="Services" className="rounded-md" />
                <div className="text-[#2C3E50] flex flex-col max-[1400px]:justify-center max-[1400px]:items-center">
                    <h2 className="text-3xl font-bold mb-4 text-[#5A9BD5]">Our Services</h2>
                    <ol className="list-decimal pl-6 max-[1400px]:mx-auto">
                        {services.map((service) => (
                            <li key={service.id} className="my-3">
                                <span className="text-lg font-semibold text-[#42A5F5]">{service.name}</span> - {service.content}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
            <HomeCards />
        </div>
    );
};

export default Page;
