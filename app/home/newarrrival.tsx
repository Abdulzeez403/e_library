"use client"
import React, { useEffect, useState, useRef } from 'react';
import { useDocumentContext } from '../(admin)/admin/dashboard/upload/context';
import { ResponsiveDrawerDialog } from '../components/modal/responsivedrawer';
import { Button } from '@/components/ui/button';

interface IProps {
    documents: any;
}

export const NewArrival = ({ documents }: IProps) => {
    const [isScrollable, setIsScrollable] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { getDocument, document } = useDocumentContext();
    const [hoveredBookId, setHoveredBookId] = useState<string | null>(null);

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
                    <h4 className='font-bold text-[2rem] text-center'>
                        New <span className="text-orange-400">Materials</span>
                    </h4>
                    <p className='text-center'>Discover the Latest Additions: Fresh Content and Resources</p>
                </div>
            </div>

            <div className='w-[100%] mx-auto py-10 relative'>
                <div ref={containerRef} className='flex justify-center overflow-x-auto no-scrollbar'>
                    {documents.slice(0, 4).map((book: any) => (
                        <div className="w-60 flex-shrink-0 mx-2" key={book?._id}>
                            <div
                                className="relative flex flex-wrap w-60 p-4 border border-gray-200 rounded-md shadow-md h-80"
                                style={{ backgroundColor: book?.cover || '#BFDBFE' }}
                                onClick={() => handleOpenModal(book?._id)}
                                onMouseEnter={() => handleMouseEnter(book?._id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="w-full text-center mt-24">
                                    <h5 className="font-bold text-lg text-white">{book.title}</h5>
                                    <h5 className="font-bold text-lg text-white pt-8">{book.code}</h5>
                                </div>
                                {hoveredBookId === book?._id && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300">
                                        <button
                                            className="text-black bg-white px-4 py-2 rounded-md"
                                            onClick={() => handleOpenModal(book?._id)}
                                        >
                                            View
                                        </button>
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
                                        <div className="w-80 mx-auto text-center bg-blue-300 h-60 p-8">
                                            <h5 className="font-bold text-lg text-white">{document.title}</h5>
                                            <h5 className="font-bold text-lg text-white pt-8">{document.code}</h5>
                                        </div>
                                        <div className="text-center">
                                            <h4>{document.title}</h4>
                                            <h4>{document.code}</h4>
                                            <h4>{document.description}</h4>
                                            <div>
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
                {isScrollable && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 flex justify-center">
                        <div className="w-12 h-1 bg-orange-400 rounded-full"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewArrival;
