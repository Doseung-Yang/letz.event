import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { siteText } from "@/constants";
import CountUp from 'react-countup';

const Site = () => {
    const [animationData, setAnimationData] = useState(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        fetch('/lottie.json')
            .then(response => response.json())
            .then(data => setAnimationData(data));

        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            setScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const countEndPercent = Math.max(10 - Math.floor(scrollY / 100), 0);
    const countEndMinutes = Math.max(10 - Math.floor(scrollY / 100), 3);
    const countEndMember = Math.min(Math.floor(scrollY / 100), 9);

    return (
        <section id="site">
            <div className="site__inner">
                <div className="site__wrap">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'auto' }}>
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
                        <div className="rolling-container" style={{ display: 'flex', position: 'relative' }}>
                        <div className='rollingSSunder'>
                                {siteText[0].potitle}
                                <div style={{ position: 'absolute', right: 30, bottom: 15, fontSize: '2rem'}}>
                                <CountUp start={10} end={countEndPercent} duration={10} suffix='%'/>
                                </div>
                            </div>

                            <div className='rollingSSunder'>{siteText[0].potitle2}
                                <div style={{ position: 'absolute', right: 30, bottom: 15, fontSize: '2rem'}}>
                                <CountUp start={10} end={countEndMinutes} duration={10} suffix='분'/>
                                </div>
                            </div>

                            <div className='rollingSSunder'>{siteText[0].Ssunder2}
                            <div style={{ position: 'absolute', right: 30, bottom: 15, fontSize: '2rem'}}>
                                <CountUp start={1} end={countEndMember} duration={10} suffix='만 명+'/>
                                </div>
                            </div>
                        </div>
                        <h2 style={{ whiteSpace: 'pre-line', marginTop: '50px'}}>{siteText[0].Ssunabout}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Site;
