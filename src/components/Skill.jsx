import React from "react";
import { skillText } from "@/constants";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
               
                <div className="skill__event">
                    <div>
                        <h3>{skillText[0].title}</h3>
                        <h1>{skillText[0].subtitle}</h1>
                        <p style={{ whiteSpace: 'pre-line' }}>{skillText[0].subbtitle}</p>
                    </div>
                    <div className="skill__special">
                    <h1>{skillText[1].ftitle}</h1>
                        <div className="skill__border">
                            <div className="ftbox">{skillText[1].ftitle1}</div>
                        </div>

                        <div className="skill__border">
                            <div className="ftbox">{skillText[1].ftitle1}</div>
                        </div>

                        <div className="skill__border">
                            <div className="ftbox">{skillText[1].ftitle1}</div>
                        </div>

                        <div className="skill__border">
                            <div className="ftbox">{skillText[1].ftitle1}</div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Skill;
