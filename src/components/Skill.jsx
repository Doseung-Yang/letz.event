import React from "react";
import { skillText } from "@/constants";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
               
                <div className="skill__event">
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            <h3>{skill.title}</h3>
                            <h1>{skill.subtitle}</h1>
                            <p style={{ whiteSpace: 'pre-line' }}>{skill.subbtitle}</p>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
}

export default Skill;