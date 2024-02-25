import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import '../assets/scss/section/_RegisterForm.scss';
import { firstText } from '@/constants';


const RegisterForm = () => {
    return (
        <form onSubmit>
        <div className='mainbanner'>
            
        </div>
        <div class="buttonWrapper">
        <button className="submitButton" type="button" onClick={() => {
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
}}>프리 런칭 이벤트 참여하기</button>
    </div>
    </form>
    );};

export default RegisterForm;
