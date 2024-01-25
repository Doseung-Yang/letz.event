import React from "react";

import { skillText } from "@/constants";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
               
                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            <h3>{skill.title}</h3>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
}

export default Skill;