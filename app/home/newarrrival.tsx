import { DemoData } from '@/constant/data'
import React from 'react'
import Image from "next/image"

export const Newarrrival = () => {
    return (
        <div className='my-10'>
            <div className='flex justify-center'>
                <div className="w-[30rem]">
                    <h4 className='font-bold text-[2rem] text-center'>New  <span className="text-orange-400">Arrival</span></h4>
                    <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis debitis eaque quaerat quam nostrum molestiae accusantium .</p>
                </div>

            </div>

            <div className='w-[80%] mx-auto  py-10'>

                <div className='flex justify-center'>

                    {
                        DemoData.slice(0, 4).map((book, index) => (
                            <div key={index} className="w-60">
                                <div className='w-60'>
                                    <Image src={book?.img} alt={book.name} width={200} height={200}
                                        className=' rounded-md' />
                                </div>

                                <div>
                                    <h4>{book.name}</h4>
                                    <h4>{book.author}</h4>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}
