"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { ResponsiveDrawerDialog } from '@/app/components/modal/responsivedrawer';
import { UpdateForm } from './updateform';
import { useAdminContext } from './context';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

export default function Page() {

    const [open, setOpen] = useState(false);

    const { getAdminProfile, adminProfile: user, deleteAdmin } = useAdminContext()
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
        <div className="p-4">

            <div className="flex justify-between items-center">
                <h4 className='py-4 font-bold'>Profile Info</h4>
                <Button className="bg-red-400"
                    onClick={() => deleteAdmin()}> Delete Account</Button>
            </div>

            <div className="w-full">
                <Table className='border-2 border-white'>
                    <TableBody className=''>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Name:</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-medium">{user?.name}</div>
                            </TableCell>
                        </TableRow >
                        <TableRow>

                            <TableCell>
                                <div className="font-medium">Email:</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-medium">{user?.email}</div>
                            </TableCell>
                        </TableRow >

                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Gender:</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-medium">{user?.gender ? (<h4>{user?.gender}</h4>) : (<h4>Male</h4>)}</div>
                            </TableCell>
                        </TableRow >

                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Phone:</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-medium">{user?.phone}</div>
                            </TableCell>
                        </TableRow >

                    </TableBody>
                </Table>
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
