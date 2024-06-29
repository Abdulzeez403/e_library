"use client"
import React, { useState } from 'react'
import Image from "next/image"
import { DemoData } from '@/constant/data'
import { SidebarComponent } from './sidebarcomponent'
import { Grid2X2, AlignVerticalSpaceAround, SearchCode } from "lucide-react"
import { InputSearchComponent } from '../component/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
export const BookListingDetail = () => {

    const [selectedCategory, setSelectedCategory] = useState('')

    const categories = [
        {
            _id: 1,
            name: "Educatinal Technology"
        },
        {
            _id: 2,
            name: "Educatinal Technology"
        },
        {
            _id: 3,
            name: "Educatinal Technology"
        },
    ]
    return (
        <div className='w-[90%] mx-auto mt-10'>

            {/* <div className=''>
                <Image src={booklisting} alt="booklisting"
                    width={1000} height={100} />
            </div> */}

            <div className='flex gap-x-20'>
                <div className="w-[20%] ">
                    <SidebarComponent />
                </div>

                <div>
                    <div className='flex justify-between items-center pb-4'>

                        <div className='flex items-center gap-x-4'>
                            <div className='flex gap-x-6 '>
                                <Grid2X2 className="h-6 w-6" />
                                <AlignVerticalSpaceAround className="h-6 w-6" />
                            </div>
                            <InputSearchComponent type="text" placeholder='Searching..' icon={
                                <SearchCode className="h-4 w-4" />

                            } />
                        </div>

                        <div className='w-60'>
                            <Select onValueChange={(val: any) => setSelectedCategory(val)}>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories?.map((supervisor: any) => (
                                        <SelectItem key={supervisor.name} value={supervisor._id}>
                                            {supervisor.name}

                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>


                    </div>

                    <div className='grid grid-cols-5'>

                        {DemoData.map((book, index) => (
                            <div key={index} className="w-60">
                                <div className='w-60'>
                                    <Image src={book?.img} alt={book.name} width={200} height={200} className='rounded-md' />
                                </div>
                                <div>
                                    <h4>{book.name}</h4>
                                    <h4>{book.author}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
