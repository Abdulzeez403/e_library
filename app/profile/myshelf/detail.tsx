"use client"
import { useDocumentContext } from '@/app/(admin)/admin/dashboard/upload/context';
import { useUserContext } from '@/app/context';
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';



export const MySelfDetail = () => {

    const { getUserDashboard, dashboardData, } = useUserContext()



    const { deleteDocument } = useDocumentContext()

    useEffect(() => {

        getUserDashboard()
    }, [])


    return (
        <div className=" ">

            <div className=" p-4 rounded-md mb-4 flex justify-between items-center">
                <h4 className="font-bold w-1/5 text-sm md:text-md lg:text-md">Title</h4>
                <h4 className="font-bold w-1/5 text-center  text-sm md:text-md lg:text-m">Category</h4>
                <h4 className="font-bold w-1/5 text-center  text-sm md:text-md lg:text-m">Course Code</h4>
                <h4 className="font-bold w-1/5 text-center  text-sm md:text-md lg:text-m">Delete</h4>
                {/* <h4 className="font-bold w-1/5 text-center">Download</h4> */}
            </div>
            {dashboardData?.accessedDocuments?.map((doc: any) => (
                <div key={doc?._id} className="bg-white p-4 mb-4 rounded-md shadow-md flex gap-4 items-center">
                    <div className="flex items-center gap-4 w-1/5">
                        <div>
                            <h5 className="font-bold md:text-lg lg:text-lg  text-sm">{doc.title}</h5>

                        </div>
                    </div>
                    <div className="w-1/5">
                        <p className="text-sm text-gray-600 text-center">
                            {doc?.category?.[0]}</p>
                    </div>
                    <div className="w-1/5">
                        <p className="text-sm text-gray-600 text-center">
                            {doc?.code}</p>
                    </div>

                    <div className="w-1/5 block space-y-2">
                        <div className='flex justify-center'
                            onClick={() => deleteDocument(doc?._id)}>

                            <Button className='bg-white border border-orange-300 text-orange-300'>Delete</Button>
                        </div>
                    </div>


                    {/* <div className="w-1/5 block space-y-2">
                        <a
                            href={doc.document}
                            download={doc.title}
                            className="inline-block w-full"
                        >
                            <Button className='bg-green-400 w-full hover:bg-[#F3F3F7]'>Download</Button>
                        </a>
                    </div> */}
                </div>
            ))}
        </div>
    );
};
