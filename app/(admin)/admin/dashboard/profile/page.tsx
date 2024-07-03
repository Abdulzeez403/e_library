"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { ResponsiveDrawerDialog } from '@/app/components/modal/responsivedrawer';
import { UpdateForm } from './updateform';
import { useAdminContext } from './context';

export default function Page() {

    const [open, setOpen] = useState(false);

    const { getAdminProfile } = useAdminContext()
    useEffect(() => {
        getAdminProfile()
    }, [])

    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleOpenModal = () => {
        setOpen(true)
    }
    return (
        <div>
            <div>
                <Image src="/book1.jpeg" alt="image" width={150} height={150} className='rounded-full' />
                <div className='flex gap-x-2 pt-4'>
                    <h4 className="border-2 rounded-md w-full p-2">Abdulazeez Sodiq</h4>
                    <h4 className="border-2 rounded-md  w-full p-2">Admin</h4>
                </div>
                <div className='flex gap-x-2 pt-4'>
                    <h4 className="border-2 rounded-md w-full p-2">AbdulazeezSodiq@gmail.com</h4>
                    <h4 className="border-2 rounded-md  w-full p-2">Male</h4>
                </div>

                <div className='flex gap-x-2 pt-4'>
                    <h4 className="border-2 rounded-md w-full p-2">0983838883838</h4>
                    <h4 className="border-2 rounded-md  w-full p-2">Male</h4>
                </div>

                <Button className="my-4 bg-orange-400 text-white" onClick={handleOpenModal}>Update Profile</Button>
            </div>

            <ResponsiveDrawerDialog
                title="Update Profile"
                description="Let's the journey begins!"
                isOpen={open}
                onClose={handleCloseModal}
            >
                <UpdateForm />

            </ResponsiveDrawerDialog>
        </div>
    )
}
