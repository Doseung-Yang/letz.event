import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import MOAnimationData from '../assets/img/MO.json';
import '@/assets/scss/section/_first.scss';
import {firstText, headerNav} from "@/constants";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const First = () => {
  const [animationData, setAnimationData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState('100%');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1099) {
        setAnimationData(MOAnimationData);
        setIsMobile(true);
      } else {
        setAnimationData(null);
        setIsMobile(false);
      }
    };        
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
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
      <ToastContainer 
        autoClose={3000}
        position="top-left"
        hideProgressBar
        style={{
          backgroundColor: '#212529',
          width: 'auto',
          minWidth: '300px',
          zIndex: 9999,
        }}
      />
      <section id="first">
        <div className="first__header">
          <div className='first__header__title'>
            {!isMobile && (
              <div className='letz_image'>
                <img src={firstText[0].imageUrl} alt="letz_image" className="letz_image_responsive" />
              </div>
            )}
            <div className='lottieHouse'>
              <Lottie 
                options={defaultOptions} className="first__header__animation"
                style={{ position: 'relative', top: `${top}% `, left: 0, width: '100%', height: `${height}` }}
              />
            </div>
            {isMobile && (
              <>
                <div className="mov_title" style={{ position: 'absolute', left: '0', textAlign: 'center', width: '100%'}}>
                  <p style={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>와디즈 팀 펀딩 서비스, 렛즈</p>
                </div>
              </>
            )}
            <div className='first__bottom'>
              <button className="submitButton1" type="button" onClick={() => {
                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if (isIOS) {
                  window.location.href = 'letz://open';
                  setTimeout(() => {
                    window.location.href = 'https://apps.apple.com/kr/app/%EC%99%80%EB%94%94%EC%A6%88/id1107828621';
                  }, 1000);
                } else {
                  toast.error(
                    <>

                <p style={{ 
                        color: 'white', 
                        fontSize: '14px', 
                        whiteSpace: 'pre-wrap', 
                        wordWrap: 'break-word', 
                        textAlign: 'left' 
                    }}>
                    렛즈 베타 서비스는 현재 iOS에서만 사용 가능합니다. 추후 안드로이드 OS도 런칭 예정입니다.
                    </p>
                    </>,
                    {
                      autoClose: 3000,
                      position: 'top-center',
                      hideProgressBar: true,
                      style: {
                        backgroundColor: '#212529',
                        width: '293',
                        height: '92',
                        minWidth: '300px',
                        zIndex: 9999,
                      },
                    }
                  );
                }
              }}>렛즈 시작하기</button>
              <div className='LetzAbouttitle'>
                <ul className='lenAbout' style={{listStyleType: 'disc'}}>
                  <li>렛즈 베타 서비스는 현재 iOS에서만 사용 가능합니다.</li>
                  <li>추후 안드로이드OS도 런칭 예정입니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default First;
