"use client"
import HomePage from "../app/home/detail"
import { useDocumentContext } from "./(admin)/admin/dashboard/upload/context";
import { useUserContext } from "./context";
import HomeLayout from "./homeLayout";
import { useEffect, useState } from "react";

export default function Home() {
    const { getLatestDocuments, documents, } = useDocumentContext();
    const { getUserProfile, user } = useUserContext();


    const [open, setOpen] = useState(false);

    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleOpenModal = () => {
        setOpen(true)
    }




    useEffect(() => {
        getLatestDocuments();
        getUserProfile();

    }, [])
    return (

        <main className="">
            <HomeLayout
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                open={open}
                user={user} />
            <HomePage documents={documents} user={user}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                open={open} />
        </main>
    );
}
