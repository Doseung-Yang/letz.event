import React from "react";

import { siteText } from "@/constants";

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">
                    
                </h2>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <article className={`site__item s${key+1}`} key={key}>
                            <span className="num">{key+1}.</span>
                           
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Site;