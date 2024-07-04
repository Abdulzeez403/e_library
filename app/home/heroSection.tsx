"use client"
import React from 'react'
import Image from "next/image"
import HeroImage from "../../public/3dbook.png"
import { motion } from 'framer-motion';

export const HeroSection = () => {
    return (
        <div className=' bg-slate-200 h-full py-20'>

            <div className=' mx-auto w-[80%] '>

                <section className="relative  py-20">
                    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
                        <div className="w-96 md:flex-1 md:w-0 lg:w-0 lg:flex-1 mt-10 md:mt-0">
                            <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:text-left lg:text-left">
                                Welcome to the Ultimate E-Library
                            </h1>
                            <p className="text-lg text-center md:text-xl md:text-left lg:text-left lg:text-2xl text-gray-700 mb-6">
                                Discover a world of knowledge and inspiration. Explore our vast collection of books across various categories and fuel your journey of learning and creativity.
                            </p>
                            <div className='flex justify-center md:justify-start lg:justify-start'>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="px-4 py-3 bg-buttonColor text-white rounded-md text-lg font-medium"
                                >
                                    Start Exploring
                                </motion.button>
                            </div>

                        </div>


                        <div className="flex-1 flex justify-center items-center">
                            <motion.div
                                style={{
                                    display: 'inline-block',
                                    perspective: 1000,
                                }}
                                animate={{ rotateY: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 20,
                                    ease: 'linear'
                                }}
                            >
                                <Image src={HeroImage} alt="E-Library Image" width={500} height={500} className="rounded-lg shadow-lg" />
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>

        </div>

    )
}
