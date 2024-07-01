
"use client"
import React, { useState } from 'react'
import { UploadDetail } from './detail'
import { CategoryForm } from './categoryform'
import { ResponsiveDrawerDialog } from '@/app/components/modal/responsivedrawer';
import { Button } from '@/components/ui/button';

export default function Page() {
    const [open, setOpen] = useState(false);

    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleOpenModal = () => {
        setOpen(true)
    }
    return (
        <div>
            <Button className="flex justify-end" onClick={handleOpenModal}> Add Categroy </Button>
            <UploadDetail />

            <ResponsiveDrawerDialog
                title="Login/Register"
                description="Let's the journey begins!"
                isOpen={open}
                onClose={handleCloseModal}
            >
                <CategoryForm />

            </ResponsiveDrawerDialog>


        </div>
    )
}
