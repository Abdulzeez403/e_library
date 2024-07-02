
"use client"
import React, { useEffect, useState } from 'react'
import { UploadDetail } from './detail'
import { CategoryForm } from './categoryform'
import { ResponsiveDrawerDialog } from '@/app/components/modal/responsivedrawer';
import { Button } from '@/components/ui/button';
import { useCategoryContext } from './categorycontext';
import { FilePenLine, Trash2 } from 'lucide-react';


export default function Page() {
    const [open, setOpen] = useState(false);
    const { getAllCategories, categories, updateCategoryById, deleteCategoryById } = useCategoryContext()

    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleOpenModal = () => {
        setOpen(true)
    }

    useEffect(() => {
        getAllCategories()
    }, [])


    return (
        <div className="p-6">
            <div>
                <h4 className='font-bold'>UpLoadDocument</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et maiores distinctio </p>

            </div>
            <div className="flex justify-end">
                <Button onClick={handleOpenModal}> Add Categroy </Button>
            </div>

            <UploadDetail />

            <ResponsiveDrawerDialog
                title="Create Category"
                description="Let's the journey begins!"
                isOpen={open}
                onClose={handleCloseModal}
            >
                <div>
                    <CategoryForm />

                    {
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
                    }

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
