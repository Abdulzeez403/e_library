"use client"
import React from 'react'
import Image from "next/image"
import HeroImage from "../../public/herosectoinImage.png"
import { motion } from 'framer-motion';
import Link from "next/link"

export const HeroSection = () => {
    return (
        <div className=' bg-buttonColor h-full py-20'>

            <div className=' mx-auto w-[80%] '>

                <section className="relative  py-20">
                    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
                        <div className="w-96 md:flex-1 md:w-0 lg:w-0 lg:flex-1 mt-10 md:mt-0">
                            <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold text-white mb-6 md:text-left lg:text-left">
                                Welcome to EDT-Library
                            </h1>
                            <p className="text-lg text-center md:text-xl md:text-left lg:text-left lg:text-2xl text-white mb-6">
                                Explore our vast collection of materials across various categories and fuel your journey of learning and creativity.
                            </p>
                            <div className='flex justify-center md:justify-start lg:justify-start'>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="px-4 py-3 bg-white text-buttonColor rounded-md text-lg font-medium"
                                >
                                    <Link href="/home/booklisting">
                                        Start Exploring
                                    </Link>
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
