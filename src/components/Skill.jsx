import React from "react";
import { skillText } from "@/constants";
import { size } from "lodash";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <div className="skill__event">
                    <div>
                        <h1 style={{whiteSpace:'pre-line'}}>{skillText[0].subtitle}</h1>
                    </div>
                    <div className="skill__special">
                        <div className="skill__porder-2">
                        <div className="fttitle">{skillText[3].fsubtitle2}</div>
                        <div className="leader1">{skillText[3].fsubtitle22}</div>
                        <div className="fttitle">{skillText[3].feventitle2}</div>
                        </div>
                        <div className="skill__porder">
                        <div className="fttitle">{skillText[3].feventitle1}</div>
                        <div className="leader1">{skillText[3].fmember}</div>
                        <div className="fttitle">{skillText[3].membertitle}</div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Skill;