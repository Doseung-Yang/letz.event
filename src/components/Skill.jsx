import React from "react";
import { skillText } from "@/constants";
import { size } from "lodash";

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
                   
                        <div className="skill__border">
                            <div className="ftbox">{skillText[1].ftitle1}</div>
                            <div className="fttitle">{skillText[1].fsubtitle}
                            </div>
                            <div className="fevbox">{skillText[1].feventtitle}</div>
                            <img src={skillText[1].imageUrl} alt="description" style={{width:'360px', height:'170px', borderRadius:'4px'}}/>
                            <div className="fssb">{skillText[1].fssubtitle}</div>
                        </div>
                        

                        <div className="skill__porder">
                            <div className="ftbox">{skillText[2].ftitle2}</div>
                            <div className="fttitle">{skillText[2].fsubtitle2}</div>
                        <div className="fevboxs-container">
                            <div className="fevboxs">{skillText[2].feventitle1}</div>
                            <div className="fevboxs">{skillText[2].feventitle2}</div>
                            <div className="fevboxs">{skillText[2].feventitle3}</div>
                            </div>
                            <div className="fssb">{skillText[2].fssubtitle1}</div>
                        </div>


                        <div className="skill__porder">
                            <div className="ftbox">{skillText[3].ftitle3}</div>
                            <div className="fttitle">{skillText[3].fsubtitle2}</div>
                        <div className="fevboxs-container">
                            <div className="fevboxs">{skillText[3].feventitle1}</div>
                            <div className="fevboxs">{skillText[3].feventitle2}</div>
                            </div>
                            <div className="fssb">{skillText[3].fssubtitle1}</div>
                        </div>

                        <div className="skill__porder">
                            <div className="ftbox">{skillText[4].ftitle3}</div>
                            <div className="fttitle">{skillText[4].fsubtitle2}</div>
                        <div className="fevboxs-container">
                            <div className="fevboxs">{skillText[4].feventitle1}</div>
                            <div className="fevboxs">{skillText[4].feventitle2}</div>
                            </div>
                            <div className="fssb">{skillText[4].fssubtitle1}</div>
                        </div>
                    </div>

                    <div className="margin_top">
                        <h1>{skillText[5].subtitle}</h1>
                        <div className="skill__dorder">
                        <p style={{ whiteSpace: 'pre-line', fontSize: '1.25rem', color: 'rgba(205, 211, 216, 1)'}}>{skillText[5].subbtitle}</p>
                            <div className="skill__ddorder">
                            <p style={{ whiteSpace: 'pre-line', fontSize: '0.9rem', color: 'rgba(205, 211, 216, 1)'}}>{skillText[5].subbtitle3}</p>
                            </div>
                        </div>
                    </div>
                

                    <div className="margin_top">
                        <h1>{skillText[6].subtitle}</h1>
                        <div className="skill__qorder">
                            <div className="pop">{skillText[6].number}</div>
                        <p style={{ whiteSpace: 'pre-line', fontSize: '0.9rem', color: 'rgba(205, 211, 216, 1)', marginBottom: '0.8rem', marginTop: '0.5rem'}}>{skillText[6].subbtitle}</p>
                        <div className="pop">{skillText[6].number1}</div>
                        <p style={{ whiteSpace: 'pre-line', fontSize: '0.9rem', color: 'rgba(205, 211, 216, 1)', marginTop: '0.5rem'}}>{skillText[6].subbtitle1}</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Skill;