"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link"
import { motion } from 'framer-motion'
import { useDocumentContext } from '../(admin)/admin/dashboard/upload/context'

import { ResponsiveDrawerDialog } from '../components/modal/responsivedrawer'
import { Button } from '@/components/ui/button'
import { useUserContext } from '../context'


interface IProps {
    user: any;
    handleCloseModal: () => void;
    handleOpenModal: () => void;
    open: boolean

}




export const AllBooks = ({ user, handleCloseModal: handleAuthCloseeModal, handleOpenModal: handleAuthOpeneModal, open: openAuth }: IProps) => {

    const { getDocument, document, documents } = useDocumentContext();
    const [hoveredBookId, setHoveredBookId] = useState<string | null>(null);
    const { downloadDocument } = useUserContext()


    const [open, setOpen] = useState(false);

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleOpenModal = (id: string) => {
        setOpen(true);
        getDocument(id);
    };

    const handleMouseEnter = (id: string) => {
        setHoveredBookId(id);
    };

    const handleMouseLeave = () => {
        setHoveredBookId(null);
    };



    return (
        <div className='my-10'>
            <div className='flex justify-center'>
                <div className="w-full max-w-xl px-4">
                    <h4 className='font-bold text-[2rem] text-center'>
                        All <span className="text-orange-400">Materials</span>
                    </h4>
                    <p className='text-center'>Explore all categories of our special selected books</p>
                </div>
            </div>

            <div className='flex justify-center m-0'>
                <div className='w-[90%] mx-auto py-10'>

                    {/* Mobile View: Display 4 books */}
                    <div className='block md:hidden lg:hidden justify-center'>
                        <div className='grid grid-cols-2 gap-6'>
                            {documents.slice(0, 4).map((book: any, index) => (
                                <div className="w-full flex-shrink-0 mx-2" key={book?._id}>
                                    <div
                                        className="relative flex flex-wrap 
                                        w-54 p-4 border border-gray-200 rounded-md shadow-md h-80"
                                        style={{ backgroundColor: book?.cover || '#BFDBFE' }}
                                        // onClick={() => handleOpenModal(book?._id)}
                                        onMouseEnter={() => handleMouseEnter(book?._id)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="w-full text-center mt-24">
                                            <h5 className="font-bold text-lg text-white">{book.title}</h5>
                                            <h5 className="font-bold text-lg text-white pt-8">{book.code}</h5>
                                        </div>
                                        {hoveredBookId === book?._id && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300">
                                                {user?._id ? (<button
                                                    className="text-black bg-white px-4 py-2 rounded-md"
                                                    onClick={() => handleOpenModal(book?._id)}
                                                >
                                                    View
                                                </button>) : (<button
                                                    className="text-black bg-white px-4 py-2 rounded-md"
                                                    onClick={() => handleAuthOpeneModal()}
                                                >
                                                    Login
                                                </button>)}
                                            </div>
                                        )}
                                    </div>
                                    <ResponsiveDrawerDialog
                                        title="Download Materials"
                                        description="Let's the learning begin!"
                                        isOpen={open}
                                        onClose={handleCloseModal}
                                    >
                                        <div>
                                            <div className=''>
                                                <div style={{ backgroundColor: document?.cover || '#BFDBFE' }} className="w-80 mx-auto text-center h-60 p-8">
                                                    <h5 className="font-bold text-lg text-white">{document.title}</h5>
                                                    <h5 className="font-bold text-lg text-white pt-8">{document.code}</h5>
                                                </div>
                                                <div className="text-center">
                                                    <h4>{document.title}</h4>
                                                    <h4>{document.code}</h4>
                                                    <h4>{document.description}</h4>
                                                    <div onClick={() => downloadDocument(document?._id)}>
                                                        <a
                                                            href={document.document}
                                                            download={`${document.title}.pdf`}
                                                            className="inline-block w-full"
                                                        >
                                                            <Button className='bg-green-400 w-full hover:bg-[#F3F3F7]'>Download</Button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ResponsiveDrawerDialog>
                                </div>
                            ))}
                        </div>

                        <div className='flex justify-center  mt-4'>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="px-4 py-3 text-white bg-buttonColor rounded-md text-lg font-medium"
                            >
                                <Link href="/booklisting">
                                    Start Exploring
                                </Link>
                            </motion.button>
                        </div>
                    </div>

                    {/* Desktop View: Display 8 books */}
                    <div className='hidden md:block lg:block justify-center'>
                        <div className='grid grid-cols-5 gap-4'>
                            {documents.slice(0, 12).map((book: any) => (
                                <div className="w-60 flex-shrink-0 mx-2" key={book?._id}>
                                    <div
                                        className="relative flex flex-wrap w-60 p-4 border border-gray-200 rounded-md shadow-md h-80"
                                        style={{ backgroundColor: book?.cover || '#BFDBFE' }}
                                        // onClick={() => handleOpenModal(book?._id)}
                                        onMouseEnter={() => handleMouseEnter(book?._id)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="w-full text-center mt-24">
                                            <h5 className="font-bold text-lg text-white">{book.title}</h5>
                                            <h5 className="font-bold text-lg text-white pt-8">{book.code}</h5>
                                        </div>
                                        {hoveredBookId === book?._id && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300">

                                                {user?._id ? (<button
                                                    className="text-black bg-white px-4 py-2 rounded-md"
                                                    onClick={() => handleOpenModal(book?._id)}
                                                >
                                                    View
                                                </button>) : (<button
                                                    className="text-black bg-white px-4 py-2 rounded-md"
                                                    onClick={() => handleAuthOpeneModal()}
                                                >
                                                    Login
                                                </button>)}
                                            </div>
                                        )}



                                    </div>
                                    <ResponsiveDrawerDialog
                                        title="Download Materials"
                                        description="Let's the learning begin!"
                                        isOpen={open}
                                        onClose={handleCloseModal}
                                    >
                                        <div>
                                            <div className=''>
                                                <div style={{ backgroundColor: document?.cover || '#BFDBFE' }} className="w-80 mx-auto text-center h-60 p-8">
                                                    <h5 className="font-bold text-lg text-white">{document.title}</h5>
                                                    <h5 className="font-bold text-lg text-white pt-8">{document.code}</h5>
                                                </div>
                                                <div className="text-center">
                                                    <h4>{document.title}</h4>
                                                    <h4>{document.code}</h4>
                                                    <h4>{document.description}</h4>
                                                    <div onClick={() => downloadDocument(document?._id)}>
                                                        <a
                                                            href={document.document}
                                                            download={`${document.title}.pdf`}
                                                            className="inline-block w-full"
                                                        >
                                                            <Button className='bg-green-400 w-full hover:bg-buttonColor'>Download</Button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ResponsiveDrawerDialog>
                                </div>
                            ))}
                        </div>

                        <div className='flex justify-center mt-4 '>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="px-4 py-3 text-white bg-buttonColor rounded-md text-lg font-medium"
                            >
                                <Link href="/home/booklisting">
                                    Start Exploring
                                </Link>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
