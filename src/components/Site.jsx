import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

import { siteText } from "@/constants";

const Site = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('/lottie.json')
            .then(response => response.json())
            .then(data => setAnimationData(data));
    }, []);

    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title"></h2>
                <div className="site__wrap">
                        {animationData && <Lottie animationData={animationData} />}
                </div>
            </div>
        </section>
    )
}

export default Site;
