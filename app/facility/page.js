import React from 'react'
import Image from 'next/image'
import HomeCards from '../components/HomeCards'

const facility = [
    {
        id: 1,
        name: "Reception",
        image: "/reception.jpg",
        width: 400,
        height: 300,
    },
    {
        name: "Automated Biochemistry",
        image: "/ECG.jpg",
        width: 400,
        height: 300
    },
]
const facilityStanding = [
    {
        id: 2,
        name: "Factory Check up",
        image: "/factoryBanner.jpg",
        width: 200,
        height: 200,
    },
    {
        name: "Services",
        image: "/serviceBanner.jpg",
        width: 200,
        height: 200,
    },
]


const page = () => {
    return (
        <div>
            <div className="images flex flex-wrap w-[80%] mx-auto items-center justify-center my-4 gap-10 p-4 flex-shrink">
                <div className='flex flex-col gap-10'>
                    {facility.map((e) => {
                        return (
                            <div className='flex flex-col justify-center items-center' key={e.name}>
                                <Image src={e.image} width={e.width} height={e.height} alt={e.name} />
                                <h2 className='text-xl font-serif'>{e.name}</h2>
                            </div>
                        )
                    })}
                     </div>
                    {facilityStanding.map((e) => {
                        return (
                            <div className='flex flex-col justify-center items-center' key={e.name}>
                                <Image src={e.image} width={e.width} height={e.height} alt={e.name} />
                                <h2 className='text-xl font-serif'>{e.name}</h2>
                            </div>
                        )
                    })}
            </div>
            <HomeCards/>
        </div>
    )
}

export default page