import React from 'react';
import '@/assets/scss/section/_footer.scss';

const Footer = () => {
    return (
        <div className="final__footer">
            <div className='final__footer__title'>
                <h2>NOTICE</h2>
                <ul>
                    <li>사전 오픈 알림 신청 시 안내 등 혜택/정보 수신에 동의하신 것으로 간주됩니다.</li>
                    <li>2024년 2월 19일부터 2월 25일 23시 59분까지 오픈한 프로젝트만 혜택이 적용됩니다.</li>
                    <li>일부 공개가 아닌 전체 공개로 오픈한 프로젝트만 혜택이 적용됩니다.</li>
                    <li>혜택 프로젝트 선정은 기준은 응원글 수 / 프로젝트 공유 수 / 응원멤버 수 / 응원금(금액)를 합산한 점수와 내부 기준에 따라 선정됩니다.</li>
                    <li>혜택 대상으로 선정된 프로젝트는 회원 가입 시 입력한 이메일로 안내를 드릴 예정입니다.</li>
                    <li>혜택 2번 프로젝트 도전 지원금 수상 시 제세공과금이 발생하며 수상자 본인이 부담해야 함에 따라 상금은 제세공과금을 제외하고 지급됩니다.</li>
                    <li>해당 이벤트는 내부 사정에 따라 혜택 변경, 조기 종료 또는 연장될 수 있습니다.</li>
                    <li>2월 19일에는 iOS 기기만 사용 가능합니다.</li>
                </ul>
            </div>
        </div>
    );
}
export default Footer;