"use client"
import React from 'react'
import Image from "next/image"
import HeroImage from "../../public/3dbook.png"
import { motion } from 'framer-motion';

export const HeroSection = () => {
    return (
        <div className=' bg-slate-300 h-full py-20'>

            <div className=' mx-auto w-[80%] '>

                <section className="relative  py-20">
                    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
                        <div className="flex-1 mt-10 md:mt-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Welcome to the Ultimate E-Library
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
                                Discover a world of knowledge and inspiration. Explore our vast collection of books across various categories and fuel your journey of learning and creativity.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="px-6 py-3 bg-orange-400 text-white rounded-md text-lg font-medium"
                            >
                                Start Exploring
                            </motion.button>
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
