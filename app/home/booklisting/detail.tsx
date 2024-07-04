"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Grid2X2, AlignVerticalSpaceAround, SearchCode } from 'lucide-react';
import { InputSearchComponent } from '../../component/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ResponsiveDrawerDialog } from '../../components/modal/responsivedrawer';
import { useDocumentContext } from '../../(admin)/admin/dashboard/upload/context';
import { useCategoryContext } from '../../(admin)/admin/dashboard/upload/categorycontext';
import Button from '../../components/button';
import { useUserContext } from '../../context';

export const BookListingDetail = () => {
    const [selectedCategory, setSelectedCategory] = useState('Educational Technology');
    const { getDocument, document, getDocumentsByCategory, categoryDocument, } = useDocumentContext();
    const { categories } = useCategoryContext();
    const { downloadDocument } = useUserContext()
    const { searchDocuments } = useDocumentContext()
    const [hoveredBookId, setHoveredBookId] = useState<string | null>(null);
    const [search, setSearch] = useState<string>('');

    const handleSearchChange = (val: string) => {
        setSearch(val);
    };

    const [open, setOpen] = useState(false);

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleOpenModal = (id: any) => {
        setOpen(true);
        getDocument(id);
    };

    useEffect(() => {
        getDocumentsByCategory(selectedCategory);
    }, [selectedCategory]);

    const handleCategory = (category: any) => {
        setSelectedCategory(category)
    }

    const handleMouseEnter = (id: string) => {
        setHoveredBookId(id);
    };

    const handleMouseLeave = () => {
        setHoveredBookId(null);
    };

    useEffect(() => {
        searchDocuments(search)
        console.log(search)
    }, [search])


    return (
        <div className="w-[90%] mx-auto mt-10">
            <div>

            </div>
            <div className="flex gap-x-20">
                {/* <div className="w-[25%]">
                    < SidebarComponent category={categories} handleCategory={handleCategory} selectedCategory={selectedCategory} />
                </div> */}
                <div>
                    <div className="flex justify-between items-center pb-4">
                        <div className="flex items-center gap-x-4">
                            {/* <div className="flex gap-x-6">
                                <Grid2X2 className="h-6 w-6" />
                                <AlignVerticalSpaceAround className="h-6 w-6" />
                            </div> */}
                            <InputSearchComponent
                                type="text"
                                placeholder="Searching.."
                                icon={<SearchCode className="h-4 w-4" />}
                                onChange={handleSearchChange}
                            />
                        </div>
                        <div className="w-60">
                            <Select onValueChange={(val: any) => setSelectedCategory(val)}>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories?.map((c: any) => (
                                        <SelectItem key={c.name} value={c.name}>
                                            {c.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-x-6">
                        {categoryDocument.map((book, index) => (
                            <div className="w-60 flex-shrink-0 mx-2 pb-4" key={book?._id}>
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
                </div>
            </div>
        </div>
    );
};
