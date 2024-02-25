import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import MOAnimationData from '../assets/img/MO.json';
import '@/assets/scss/section/_first.scss';
import {firstText, headerNav} from "@/constants";
import { setWith } from 'lodash';

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
    };        window.addEventListener('resize', handleResize);
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
            <section id="first">
                <div className="first__header">
                    
                    <div className='first__header__title'>
                        {!isMobile && (
                            <div className='letz_image'>
                                <img src={firstText[0].imageUrl} alt="letz_image" />
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
                                    <p style={{color: 'white', fontSize: '1.8rem', fontWeight: 'bold'}}>와디즈 팀 펀딩 서비스, 렛즈</p>
                                </div>
                            </>
                        )}

                        <div className='first__bottom'>
                        <button className="submitButton1" type="button" onClick={() => {
                            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

                            if (isIOS) {
                                // 'letz://open' 실행
                                window.location.href = 'letz://open';

                                // 일정 시간 후에 앱스토어로 이동
                                setTimeout(() => {
                                    window.location.href = 'https://apps.apple.com/kr/app/%EC%99%80%EB%94%94%EC%A6%88/id1107828621';
                                }, 1000);
                            } else {
                                // iOS가 아닐 경우 토스트 메시지 출력
                                toast.error('렛즈 베타 서비스는 현재 iOS에서만 사용 가능합니다. \n추후 안드로이드 OS도 런칭 예정입니다.', { duration: 3000 });
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
