"use client"
import React, { useState } from 'react'
import { BookListingDetail } from './detail'
import HomeLayout from '@/app/homeLayout';
import { useUserContext } from '@/app/context';

export default function Page() {
    const { user } = useUserContext()
    const [open, setOpen] = useState(false);

    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleOpenModal = () => {
        setOpen(true)
    }
    return (
        <div>
            <HomeLayout
                user={user}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                open={open} />
            <BookListingDetail
            />
        </div>
    )
}
