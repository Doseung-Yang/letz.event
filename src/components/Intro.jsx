import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { introText } from "@/constants";
import Image from 'next/image';
import RegisterForm from "@/components/RegisterForm";
import LetzImage from '../assets/img/letz_image_height.png';
import LetzImage_width from '../assets/img/letz_image_width.png';
import ImgBtn from '../assets/img/letz_movie_go.png';

const Intro = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(undefined);

    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', updateWindowWidth);
        updateWindowWidth();

        return () => window.removeEventListener('resize', updateWindowWidth);
    }, []);

    const videoOptions = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    const handleVideoEnd = () => {
        setModalOpen(false); 
    };

    const handleOutsideClick = (e) => {
        if (e.target.className === 'modal') {
            setModalOpen(false);
        }
    };

    const handleEscKey = (e) => {
        if (e.key === 'Escape') {
            setModalOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleEscKey);
        return () => {
            window.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    return (
        <section id="intro">
            <div className="intro__inner">
                <div className="intro__coming-soon">
                    {introText.map((intro, key) => (
                        <div key={key}>
                            <h3 style={{fontWeight:"bold"}}>{intro.title}</h3>
                            <h1>{intro.subtitle}</h1>
                        </div>
                    ))}
                </div>
                {modalOpen && (
                    <div className='modal' onClick={handleOutsideClick}>
                        <button className="modal__close" onClick={() => setModalOpen(false)}>X</button>
                        <YouTube videoId="gZcN1yBYAro" opts={videoOptions} onEnd={handleVideoEnd} className='youtubeVideo' />
                    </div>
                )}
            </div>
            <div className="letzmovieimg">
                {windowWidth >= 1100 ? (
                    <Image src={LetzImage_width} alt="Letz Image"/>
                ) : (
                    <Image src={LetzImage} alt="Letz Image" />
                )}
                <button className="playButton" onClick={() => setModalOpen(true)}>
                    <Image src={ImgBtn} alt="play button" layout="fill" objectFit="contain" />
                </button>
            </div>
        </section>
    );
};


export default Intro;