import React from 'react';
import Image from 'next/image';

const Swastik = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="text-white text-xl font-semibold tracking-wide">
                Swastik Pathology
            </div>
            <Image 
                className="rounded" 
                width={30} 
                height={30} 
                src="/logo.png" 
                alt="Swastik Logo" 
            />
        </div>
    );
};

export default Swastik;
