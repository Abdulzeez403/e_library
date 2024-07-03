
"use client"
import React, { useEffect, useState } from 'react'
import { UploadDetail } from './detail'
import { CategoryForm } from './categoryform'
import { ResponsiveDrawerDialog } from '@/app/components/modal/responsivedrawer';
import { Button } from '@/components/ui/button';
import { useCategoryContext } from './categorycontext';


export default function Page() {
    const [open, setOpen] = useState(false);


    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleOpenModal = () => {
        setOpen(true)
    }




    return (
        <div className="p-6">
            <div>
                <h4 className='font-bold'>Upload Document</h4>


            </div>


            <UploadDetail handleOpenModal={handleOpenModal} />

            <ResponsiveDrawerDialog
                title="Create Category"
                description="Let's the journey begins!"
                isOpen={open}
                onClose={handleCloseModal}
            >
                <div>
                    <CategoryForm />

                    {/* {
                        categories.map((c, index) => (
                            <div className='flex justify-between py-2' key={index}>
                                <h4>{c.name}</h4>

                                <div className="flex gap-x-4">
                                    <FilePenLine color="skyblue" className="h-4 w-4 cursor-pointer" onClick={() => { updateCategoryById(c?.name, c._id) }} />
                                    <Trash2 color="red" className="h-4 w-4  cursor-pointer "
                                        onClick={() => { deleteCategoryById(c?._id) }} />

                                </div>

                            </div>
                        ))
                    } */}

                </div>

                {/* <Tabs defaultValue="Researcher" className=" pr-2">
                    <TabsList className=" w-90 grid grid-cols-2">
                        <TabsTrigger value="Researcher" className='focus:bg-customSecondary'>
                            Researcher</TabsTrigger>
                        <TabsTrigger value="Supervisor" className='active:bg-customSecondary'>
                            Supervisor</TabsTrigger>
                    </TabsList>

                    <TabsContent value="Researcher">
                        <CategoryForm />


                    </TabsContent>

                    <TabsContent value="Supervisor" >
                        <CategoryForm />



                    </TabsContent>

                </Tabs> */}

            </ResponsiveDrawerDialog>


        </div>
    )
}
