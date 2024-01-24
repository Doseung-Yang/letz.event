import React from "react";
import Image from "next/image";

import { introText } from "@/constants";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h2 className="intro__title">
                    {introText.title}
                </h2>
               
                <div className="intro__text">
                    





                    
                    
                </div>
                <div className="intro__lines bottom" aria-hidden="true">
           
                </div>
            </div>
        </section>
    )
}

export default Intro;