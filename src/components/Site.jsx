import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';
import { siteText } from "@/constants";
import CountUp from 'react-countup';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isMobile } from 'react-device-detect';

const SnsIcon = styled.img`
    width: 61px;
    height: auto; 
    cursor: pointer;
    margin-top: 32px;

    @media (max-width: 768px) {
        width: 60px;
        margin-top: 32px;
    }

    @media (max-width: 480px) {
        width: 60px;
        margin-top: 32px;
    }
`;

const Site = () => {
    const [animationData, setAnimationData] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        fetch('/movelotte.json')
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
        window.Kakao.init('d6083900c37df8a978428436731dc0bc'); 
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        }
    }, []);

    const countEndPercent = Math.max(Math.floor(scrollY / 100), 100);
    const countEndMember = Math.max(Math.floor(scrollY / 100), 600);
    const countEndMinutes = Math.max(10 - Math.floor(scrollY / 100), 3);

    const shareUrl = 'https://campaign.letz.team/';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl);
        toast.success("링크가 복사되었습니다", {
            position: "bottom-center",
            autoClose: 3000,
        });
    };

    const shareKakao = () => {
        if (!isMobile) {
            toast.info("모바일에서만 사용 가능합니다.", {
                position: "bottom-center",
                autoClose: 3000,
            });
        } else {
            window.Kakao.Link.sendDefault({
              objectType: 'feed',
              content: {
                title: '와디즈 팀 펀딩 서비스, 렛즈',
                description: '누구나 도전하고 응원받을 수 있어요',
                imageUrl: 'https://i.ibb.co/bLYTK46/1000-X1000.png',
                link: {
                  mobileWebUrl: shareUrl,
                  webUrl: shareUrl,
                },
              },
            });
        }
    };

    return (
        <section id="site">
            <div className="site__inner">
                <div className="site__wrap">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'auto' }}>
                        <h1 style={{ whiteSpace: 'pre-line'}}>{siteText[0].subtitle}</h1> 
                        {animationData && 
    <div style={{ position: 'relative', minWidth: '1600px', maxWidth: '1764px', width: '100%', height: '160px', alignSelf: 'center' }}>
        <Lottie 
            animationData={animationData} 
            style={{ position: 'absolute', width: '100%', height: '100%'}}
            preserveAspectRatio="xMidYMid meet"
        />
    </div>
}
                        <h2 style={{ whiteSpace: 'pre-line', marginTop: '120px'}}>{siteText[0].tabtitle}</h2>
                        <div className="rolling-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}} ref={observerRef}>
                            <div className='rollingSSunder'>{siteText[0].potitle2}
                                <div style={{ position: 'absolute', right: 30, bottom: 15, fontSize: '2rem', color:'#FFFFFF'}}>
                                    {isVisible && <CountUp end={countEndMinutes} duration={10} suffix='분'/>}
                                </div>
                            </div>
                            <div className='rollingSSunder'>{siteText[0].Ssunder2}
                                <div style={{ position: 'absolute', right: 30, bottom: 15, fontSize: '2rem', color:'#FFFFFF'}}>
                                    {isVisible && <CountUp end={countEndMember} duration={4} suffix='만 명+'/>}
                                </div>
                            </div>
                            <div className='rollingSSunder'>
                                {siteText[0].potitle}
                                <div style={{ position: 'absolute', right: 30, bottom: 15, fontSize: '2rem', color:'#FFFFFF'}}>
                                    {isVisible && <CountUp end={countEndPercent} duration={4} suffix='%'/>}
                                </div>
                            </div>
                        </div>
                        <button className="DownloadButton" type="submit" onClick={() => window.open('https://drive.google.com/file/d/1Z4b6neVPhrdruz241aumAIEG_kGbBAeO/view', '_blank')}>
  렛즈 소개서 다운로드
</button>

            <div className='lastbackground'>
                        <div className='lastTitle'> {siteText[0].footer_1}</div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px'}}>
                            <a href="#" onClick={shareKakao}>
                                <SnsIcon src="/kakao.svg" alt="share_icon"/>
                            </a>
                            <SnsIcon src="/ctrlcv.svg" alt="ctrl_icon" onClick={copyToClipboard}/>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Site;
