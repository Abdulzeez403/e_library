import React from 'react'
import Image from "next/image"
import HeroImage from "../../public/heroImage.png"

export const HeroSection = () => {
    return (
        <div className='w-[80%] mx-auto'>

            <div className="flex justify-between items-center">
                <div className=" w-[40rem]">
                    <h1 className="text-5xl font-bold leading-14 ">Welcome to Your Digital Library Haven Gateway to Unlimited Reading</h1>
                    <p className="text-xl mb-8">Explore endless knowledge, one click at a time.</p>
                    <button className="bg-purple-500 text-white border -2 rounded-md border-purple-500 px-6 py-2 text-md">Explore Now</button>

                </div>
                <div className='relative'>
                    <Image src={HeroImage} alt="Image" width={500} height={500} />
                    <div className='h-[200px] w-30 rounded-full bg-purple-500 absolute top-10'>

                    </div>
                </div>
            </div>

        </div>

    )
}
