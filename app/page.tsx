"use client"
import HomePage from "../app/home/detail"
import { useDocumentContext } from "./(admin)/admin/dashboard/upload/context";
import HomeLayout from "./homeLayout";
import { useEffect, useState } from "react";

export default function Home() {
    const { getLatestDocuments, documents, } = useDocumentContext();


    const [open, setOpen] = useState(false);

    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleOpenModal = () => {
        setOpen(true)
    }

    useEffect(() => {
        getLatestDocuments();
    }, [])
    return (

        <main className="">
            <HomeLayout
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                open={open} />
            <HomePage documents={documents} />
        </main>
    );
}
