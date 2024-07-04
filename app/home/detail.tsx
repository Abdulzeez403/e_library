import React, { useState } from 'react'
import { HeroSection } from './heroSection';
import { Newarrrival } from './newarrrival';
import { AllBooks } from './books';
import { BestDownload } from './bestDownload';
import { Footer } from './footer';
import { Thebest } from './thebest';


interface IProps {
    documents: any
}


const HomePage = ({ documents }: IProps) => {
    return (
        <div>
            <HeroSection />
            <Newarrrival documents={documents} />
            <BestDownload />
            <AllBooks />
            {/* <Thebest /> */}
            <Footer />
        </div>
    )
}

export default HomePage;
