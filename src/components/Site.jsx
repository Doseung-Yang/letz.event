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
                <div className="site__wrap">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                        <h3>{siteText[0].title}</h3>
                        <h1 style={{ whiteSpace: 'pre-line'}}>{siteText[0].subtitle}</h1> 
                        {animationData && 
                            <div style={{ position: 'relative', width: '1700px', height: '300px', alignSelf: 'center' }}>
                                <Lottie 
                                    animationData={animationData} 
                                    style={{ position: 'absolute', width: '100%', height: '100%' }}
                                    preserveAspectRatio="xMidYMid meet"
                                />
                            </div>
                        }
                        <h2 style={{ whiteSpace: 'pre-line'}}>{siteText[0].subbtitle}</h2>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Site;
