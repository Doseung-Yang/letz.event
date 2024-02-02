import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';
import { siteText } from "@/constants";
import CountUp from 'react-countup';
import styled from 'styled-components';

const SnsIcon = styled.img`
        width: 61px;
        height: 100px;
        cursor: pointer;
        margin-top: 100px;

        @media (max-width: 768px) {
        width: 50px;
        height: 80px;
        margin-top: 80px;
        }

        @media (max-width: 480px) {
        width: 50px;
        height: 80px;
        margin-top: 60px;
        }`;

const Site = () => {
    const [animationData, setAnimationData] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        fetch('/lottie.json')
            .then(response => response.json())
            .then(data => setAnimationData(data));

        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            setScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver((entries) => {
            setIsVisible(entries[0].isIntersecting);
        }, { threshold: 0.1 });
        observer.observe(observerRef.current);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        }
    }, []);

    const countEndPercent = Math.max(10 - Math.floor(scrollY / 100), 0);
    const countEndMinutes = Math.max(10 - Math.floor(scrollY / 100), 3);
    const countEndMember = Math.min(Math.floor(scrollY / 100), 9);

    const shareContent = async () => {
        try {
            await navigator.share({
                title: '공유하고 가장 먼저 사용해보세요!',
                text: '공유하고 가장 먼저 사용해보세요!',
                url: 'https://campaign.letz.team/',
            });
            console.log('공유가 성공적으로 이루어졌습니다.');
        } catch (err) {
            console.log('공유 실패:', err);
        }
    };

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
                        <div className="rolling-container" style={{ display: 'flex', position: 'relative' }} ref={observerRef}>
                        <div className='rollingSSunder'>
                                {siteText[0].potitle}
                                <div style={{ position: 'absolute', right: 30, bottom: 15, fontSize: '2rem'}}>
                                {isVisible && <CountUp end={countEndPercent} duration={10} suffix='%'/>}
                                </div>
                            </div>

                            <div className='rollingSSunder'>{siteText[0].potitle2}
                                <div style={{ position: 'absolute', right: 30, bottom: 15, fontSize: '2rem'}}>
                                {isVisible && <CountUp end={countEndMinutes} duration={10} suffix='분'/>}
                                </div>
                            </div>

                            <div className='rollingSSunder'>{siteText[0].Ssunder2}
                            <div style={{ position: 'absolute', right: 30, bottom: 15, fontSize: '2rem'}}>
                                {isVisible && <CountUp end={countEndMember} duration={10} suffix='만 명+'/>}
                                </div>
                            </div>
                        </div>
                        <h2 style={{ whiteSpace: 'pre-line', marginTop: '50px'}}>{siteText[0].Ssunabout}</h2>
            
                    <div className='lastTitle'> {siteText[0].footer_1}</div>
                    <SnsIcon src="/sns_icon.png" alt="share_icon" onClick={shareContent}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Site;
