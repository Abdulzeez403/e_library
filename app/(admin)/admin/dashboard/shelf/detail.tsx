"use client"
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';
import { useDocumentContext } from '../upload/context';



export const MySelfDetail = () => {

    const { getLatestDocuments, documents, deleteDocument } = useDocumentContext();

    useEffect(() => {
        getLatestDocuments();
        console.log(documents, "the doc")
    }, [])
    return (
        <div className=" p-4">

            <div className=" p-4 rounded-md mb-4 flex justify-between items-center">
                <h4 className="font-bold w-1/5">Title</h4>
                <h4 className="font-bold w-1/5 text-center">Category</h4>
                <h4 className="font-bold w-1/5 text-center hidden md:flex lg:flex">Course Code</h4>
                <h4 className="font-bold w-1/5 text-center">Delete</h4>
                <h4 className="font-bold w-1/5 text-center">Download</h4>
            </div>
            {documents.map((doc, index) => (
                <div key={index} className="bg-white p-4 mb-4 rounded-md shadow-md flex gap-4 items-center">
                    <div className="flex items-center gap-4 w-1/5">
                        <div>
                            <h5 className="font-bold text-lg">{doc.title}</h5>

                        </div>
                    </div>
                    <div className="w-1/5">
                        <p className="text-sm text-gray-600 text-center">
                            {doc?.category?.[0]}</p>
                    </div>
                    <div className="w-1/5">
                        <p className="text-sm text-gray-600 text-center  hidden md:flex lg:flex">
                            {doc?.code}</p>
                    </div>

                    <div className="w-1/5 block space-y-2"
                        onClick={() => deleteDocument(doc?._id)}>
                        <div className='flex justify-center'>

                            <Button className='bg-white border border-orange-300 text-orange-300'>Delete</Button>
                        </div>
                    </div>


                    <div className="w-1/5 block space-y-2 hover:text-buttonColor">
                        <a
                            href={doc.document}
                            download={doc.title}
                            className="inline-block w-full"
                        >
                            <Button className='bg-green-400 w-full hover:bg-[#F3F3F7]'>Download</Button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};
