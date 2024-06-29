import React, { useState } from 'react'
import { HeroSection } from './heroSection';
import { Newarrrival } from './newarrrival';
import { AllBooks } from './books';
import { BestDownload } from './bestDownload';
import { Footer } from './footer';
import { Thebest } from './thebest';



const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <Newarrrival />
            <BestDownload />
            <AllBooks />
            <Thebest />
            <Footer />
        </div>
    )
}

export default HomePage;
