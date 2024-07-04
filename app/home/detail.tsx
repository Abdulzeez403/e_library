import React, { useState } from 'react'
import { HeroSection } from './heroSection';
import { AllBooks } from './books';
import { BestDownload } from './bestDownload';
import { Footer } from './footer';
import NewArrival from './newarrrival';
import { useUserContext } from '../context';


interface IProps {
    documents: any;
    user: any;
    handleCloseModal: () => void;
    handleOpenModal: () => void;
    open: boolean;
}


const HomePage = ({ documents, user, handleCloseModal, handleOpenModal, open }: IProps) => {

    return (
        <div>
            <HeroSection />
            <NewArrival
                documents={documents}
                user={user}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                open={open}
            />


            <BestDownload />
            <AllBooks user={user}
                // documents={documents}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                open={open}
            />
            {/* <Thebest /> */}
            <Footer />
        </div>
    )
}

export default HomePage;
