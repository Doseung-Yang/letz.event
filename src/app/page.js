"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Site from "@/components/Site";
import smooth from "@/utils/smooth";
import link from "@/utils/link";

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
            </main>
        </>
    )
}