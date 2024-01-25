import React from "react";
import Image from "next/image";
import { introText } from "@/constants";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">

                <div className="intro__coming-soon">
                    {introText.map((intro, key) => (
                            <div key={key}>
                            <h3>{intro.title}</h3>
                            <h1>{intro.subtitle}</h1>
                             <p style={{ whiteSpace: 'pre-line' }}>{intro.subbtitle}</p>
                        </div>

                        ))}
                </div>
            </div>
        </section>
    )
}

export default Intro;