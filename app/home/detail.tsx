import React, { useState } from 'react'
import { HeroSection } from './heroSection';
import { AllBooks } from './books';
import { BestDownload } from './bestDownload';
import { Footer } from './footer';
import NewArrival from './newarrrival';


interface IProps {
    documents: any
}


const HomePage = ({ documents }: IProps) => {
    return (
        <div>
            <HeroSection />
            <NewArrival documents={documents} />
            <BestDownload />
            <AllBooks />
            {/* <Thebest /> */}
            <Footer />
        </div>
    )
}

export default HomePage;
