"use client"
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';
import { useDocumentContext } from '../upload/context';

const books = [
    {
        id: 1,
        image: '/book1.jpeg',
        name: 'Book Name 1',
        author: 'Author 1',
        category: 'Category 1',
        availability: 'E-Book',
        status: 'Read'
    },
    {
        id: 2,
        image: '/book4.jpeg',
        name: 'Book Name 2',
        author: 'Author 2',
        category: 'Category 2',
        availability: 'Printed',
        status: 'Unread'
    },
    // Add more books as needed
];

export const MySelfDetail = () => {

    const { getLatestDocuments, documents } = useDocumentContext();

    useEffect(() => {
        getLatestDocuments();
        console.log(documents, "the doc")
        console.log("text...")
    }, [])
    return (
        <div className=" p-4">

            <div className=" p-4 rounded-md mb-4 flex justify-between items-center">
                <h4 className="font-bold w-1/5">Book</h4>
                <h4 className="font-bold w-1/5">Category</h4>
                <h4 className="font-bold w-1/5">Code</h4>
                <h4 className="font-bold w-1/5">Status</h4>
                <h4 className="font-bold w-1/5">Actions</h4>
            </div>
            {documents.map((doc, index) => (
                <div key={index} className="bg-white p-4 mb-4 rounded-md shadow-md flex gap-4 items-center">
                    <div className="flex items-center gap-4 w-1/5">

                        <div className={`w-16 h-16 object-cover rounded-md bg-${doc.cover}-200`}>

                        </div>
                        <div>
                            <h5 className="font-bold text-lg">{doc.title}</h5>
                            {/* <p className="text-sm text-gray-600">{b.author}</p> */}
                        </div>
                    </div>
                    <div className="w-1/5">
                        <p className="text-sm text-gray-600 text-start">{doc.category}</p>
                    </div>
                    <div className="w-1/5">
                        <p className="text-sm text-gray-600 tex">
                            Read</p>
                    </div>
                    <div className="w-1/5">
                        <p className="text-sm text-gray-600 ">status</p>
                    </div>
                    <div className="w-1/5 block space-y-2">
                        <Button className='bg-white border border-orange-300 text-orange-300'>Preview</Button>
                        <Button className='bg-green-400'>Download</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};
