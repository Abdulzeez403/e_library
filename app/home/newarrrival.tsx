import { DemoData } from '@/constant/data'
import React, { useEffect, useState, useRef } from 'react'
import Image from "next/image"
import Button from '../components/button';

interface Book {
    img: string;
    name: string;
    author: string;
}

export const Newarrrival: React.FC = () => {
    const [isScrollable, setIsScrollable] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container && container.scrollWidth > container.clientWidth) {
            setIsScrollable(true);
        } else {
            setIsScrollable(false);
        }
    }, []);

    return (
        <div className='my-10 relative'>
            <div className='flex justify-center'>
                <div className="w-[30rem]">
                    <h4 className='font-bold text-[2rem] text-center'>New <span className="text-orange-400">Arrival</span></h4>
                    <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis debitis eaque quaerat quam nostrum molestiae accusantium .</p>
                </div>
            </div>

            <div className='w-[100%] mx-auto py-10 relative'>
                <div ref={containerRef} className='flex justify-center overflow-x-auto no-scrollbar'>
                    {
                        DemoData.slice(0, 4).map((book: Book, index: number) => (
                            <div key={index} className="w-60 flex-shrink-0 mx-2">
                                <div className='w-60'>
                                    <Image src={book.img} alt={book.name} width={200} height={200}
                                        className='rounded-md' />
                                </div>
                                <div className="pt-2">
                                    <h4> <span className="text-orange-400 font=semibold pr-2">Name:</span>{book.name}</h4>
                                    <h4><span className="text-orange-400 font=semibold pr-2">Author:</span>{book.author}</h4>
                                    {/* <Button>Download</Button> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
                {isScrollable && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 flex justify-center">
                        <div className="w-12 h-1 bg-orange-400 rounded-full"></div>
                    </div>
                )}
            </div>

        </div>
    )
}
