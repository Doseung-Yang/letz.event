import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import PCAnimationData from '../assets/img/PC.json';
import MOAnimationData from '../assets/img/MO.json';
import '@/assets/scss/section/_first.scss';
import {firstText, headerNav} from "@/constants";

const First = () => {
    const [animationData, setAnimationData] = useState(PCAnimationData);
    const [top, setTop] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setAnimationData(MOAnimationData);
                setTop(-10);
                setIsMobile(true);
            } else {
                setAnimationData(PCAnimationData);
                setTop(0);
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const countdownDate = new Date("2024-02-19").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

            setTimeLeft({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const handleClick = (e, url) => {
        e.preventDefault();
        document.querySelector(url).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <section id="first">
                <div className="first__header">
                    <div className='first__header__title'>
                        {!isMobile && (
                            <div className='letz_image'>
                                <img src={firstText[0].imageUrl} alt="letz_image" />
                            </div>
                        )}
                        <Lottie 
                            options={defaultOptions}
                            style={{ position: 'absolute', top: `${top}%`, left: 0, width: '100%', height: '90%' }}
                        />
                        {isMobile && (
                            <>
                                <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
                                    <ul>
                                        {headerNav.map((nav, key) => (
                                            <li key={key}>
                                                <a href={nav.url} onClick={(e) => handleClick(e, nav.url)}>
                                                    {nav.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div style={{ position: 'absolute', top: '10%', left: '0', textAlign: 'center', width: '100%'}}>
                                    <p style={{color: 'white', fontSize: '2rem', fontWeight: 'bold'}}>렛즈 베타 서비스 오픈</p>
                                </div>
                            </>
                        )}
                        <div style={{ position: 'absolute', top: '90%', left: '0', textAlign: 'center', width: '100%' }}>
                            <p style={{color: 'rgba(0, 255, 255, 1)', fontSize: '2rem', fontWeight: 'bold'}}>
                                {`${timeLeft.days}일 : ${timeLeft.hours} : ${timeLeft.minutes} : ${timeLeft.seconds}`}
                            </p>
                            <p style={{color:'rgba(73, 80, 87, 1)', fontSize: '1.2rem',fontWeight: '600'}}>2024.02.19 MON</p>
                        </div>
                    </div>
                </div>
            </section>
            {isMobile && (
                <nav className="first__nav" role="navigation" aria-label="푸터 메뉴" style={{ backgroundColor: 'rgba(20, 24, 30, 1)'}}>
                    <ul style={{}}>
                        {['#intro', '#skill', '#site'].map((nav, key) => (
                            <li key={key}>
                                <a href={nav} onClick={(e) => handleClick(e, nav)} style={{ color: 'rgba(134, 142, 150, 1)'}}>
                                {
                            nav === '#intro' ? 'coming-soon' :
                            nav === '#skill' ? 'event' :
                            nav === '#site' ? 'about letz' : ''
                        }
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
}

export default First;
