"use client";

import React, { useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Site from "@/components/Site";
import smooth from "@/utils/smooth";
import link from "@/utils/link";
import Share from "@/components/share";

export default function Home(){
    useEffect(() => {
        smooth();
        link();
    }, []);

    return (
        <>  
            <Header />
            <main id="main" role="main">
                <Intro />
                <Skill />
                <Site />
                <Share />
            </main>
            <Toaster position="bottom-center" />
        </>
    )
}
