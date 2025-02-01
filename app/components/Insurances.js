import React from 'react'
import Image from 'next/image'

const Insurances = () => {
    return (
        <div className="flex justify-center flex-wrap">
            <section className="my-6 text-center bg-white shadow-md p-4 rounded-xl w-full max-w-4xl">
                <h2 className="text-3xl font-bold mb-4 text-[#5A9BD5]">Our Cashless Insurances</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
                    <Image src="/logo-1.png" width={120} height={120} alt="Insurance 1" className="w-[150px] h-[150px] object-contain" />
                    <Image src="/logo-2.png" width={120} height={120} alt="Insurance 2" className="w-[150px] h-[150px] object-contain" />
                    <Image src="/logo-3.png" width={120} height={120} alt="Insurance 3" className="w-[150px] h-[150px] object-contain" />
                    <Image src="/logo-4.png" width={120} height={120} alt="Insurance 4" className="w-[150px] h-[150px] object-contain" />
                    <Image src="/logo-5.png" width={120} height={120} alt="Insurance 5" className="w-[150px] h-[150px] object-contain" />
                    <Image src="/logo-6.png" width={120} height={120} alt="Insurance 6" className="w-[150px] h-[150px] object-contain" />
                </div>
            </section>
            <section className="my-6 text-center bg-white shadow-md p-4 rounded-xl w-full max-w-4xl">
                <h2 className="text-3xl font-bold mb-4 text-[#5A9BD5]">Our Available Insurances</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
                    <Image src="/logo-7.jpg" width={120} height={120} alt="Insurance 1" className="w-[150px] h-[150px] object-contain" />
                    <Image src="/logo-8.png" width={120} height={120} alt="Insurance 1" className="w-[150px] h-[150px] object-contain" />
                    <Image src="/logo-9.png" width={120} height={120} alt="Insurance 1" className="w-[150px] h-[150px] object-contain" />
                    <Image src="/logo-10.png" width={120} height={120} alt="Insurance 1" className="w-[150px] h-[150px] object-contain" />
                    <Image src="/logo-11.png" width={120} height={120} alt="Insurance 1" className="w-[150px] h-[150px] object-contain" />
                    <Image src="/logo-12.png" width={120} height={120} alt="Insurance 1" className="w-[150px] h-[150px] object-contain" />
                    <Image src="/logo-13.png" width={120} height={120} alt="Insurance 1" className="w-[150px] h-[150px] object-contain" />
                </div>
            </section>
        </div>
    )
}

export default Insurances
