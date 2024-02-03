"use client";

import React, { useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import First from "@/components/First";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Site from "@/components/Site";
import Footer from "@/components/Footer";
import smooth from "@/utils/smooth";
import link from "@/utils/link";

export default function Home(){
    useEffect(() => {
        smooth();
        link();
    }, []);

    return (
        <>  
            <First />
            <Header />
            <main id="main" role="main">
                <Intro />
                <Skill />
                <Site />
                <Footer />
            </main>
            <Toaster position="bottom-center" />
        </>
    )
}
