
"use client"
import { DemoData } from '@/constant/data'
import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion';


export const Thebest = () => {
    return (
        <div className="relative overflow-hidden  mx-auto py-10">
            <motion.div
                className="flex "
                initial={{ x: "10%" }}
                animate={{ x: "-10%" }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                }}
            >
                {DemoData.map((book, index) => (
                    <div key={index} className="w-60">
                        <div className='w-60'>
                            <Image src={book.img} alt={book.name} width={200} height={200} className='rounded-md' />
                        </div>

                    </div>
                ))}
            </motion.div>
        </div>
    )
}
