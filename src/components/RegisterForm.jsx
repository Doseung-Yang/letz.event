import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import '../assets/scss/section/_RegisterForm.scss';


const RegisterForm = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [nameError, setNameError] = useState("");
    const [contactError, setContactError] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const validateName = (input) => {
        const regex = /^[가-힣a-zA-Z]*$/; 
        return regex.test(input);
    };

    const validateContact = (input) => {
        const regex = /^[0-9]*$/; 
        return regex.test(input);
    };

    const handleNameChange = (e) => {
        const input = e.target.value;
        setName(input);
        if (!validateName(input)) {
            setNameError('한글과 영어만 입력 가능합니다.');
        } else {
            setNameError("");
        }
    };

    const handleContactChange = (e) => {
        const input = e.target.value;
        setContact(input);
        if (!validateContact(input)) {
            setContactError('숫자만 입력 가능합니다.');
        } else {
            setContactError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isChecked) {
            toast.error('사전 혜택 안내를 위해 개인정보 수집 및 이용에 동의해주세요.');
            return;
        }

        if (name === '') {
            toast.error('이름을 입력해주세요.');
            return;
        }

        if (contact === '') {
            toast.error('연락처를 입력해주세요.');
            return;
        }

        if (nameError || contactError) {
            toast.error('입력한 정보를 확인해주세요.');
            return;
        }

        const res = await fetch('/api/Spreadsheet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, contact }),
        });

        const data = await res.json();

        if (!res.ok) {
            if (res.status === 400 && data.message === '이미 등록된 사용자입니다.') {
                toast.error('이미 사전 알림에 신청된 사용자입니다.');
            } else {
                console.error(data);
            }
            return;
        }

        setName("");
        setContact("");
        setIsChecked(false);
        toast.success('사전예약에 접수되었습니다!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="formGroup">
                <label htmlFor="nameInput">이름</label>
                <input 
                    id="nameInput"
                    className="nameInput"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="이름을 입력해주세요"
                    style={{ color: name ? 'rgba(0, 255, 255, 1)' : 'rgba(255, 255, 255, 1)' }}
                />
                {nameError && <p style={{ color: 'rgba(0, 255, 255, 1)' }}>{nameError}</p>}
            </div>
            <div className="formGroup">
                <label htmlFor="contactInput">연락처</label>
                <input 
                    id="contactInput"
                    className="nameInput"
                    type="text"
                    value={contact}
                    onChange={handleContactChange}
                    placeholder="연락처를 입력해주세요"
                    style={{ color: name ? 'rgba(0, 255, 255, 1)' : 'rgba(255, 255, 255, 1)' }}
                />
                {contactError && <p style={{ color: 'rgba(0, 255, 255, 1)' }}>{contactError}</p>}
            </div>



            <div className="agreeCheckbox" style={{ backgroundColor: isChecked ? 'rgba(52, 58, 64, 1)' : 'rgba(52, 58, 64, 1)', cursor: 'pointer' }}
            onClick={() => setIsChecked(!isChecked)}>
      <input
        id="agree"
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="agree" style={{ color: isChecked ? 'white' : 'rgba(134, 142, 150, 1)' }}></label>
      <span style={{ color: isChecked ? 'rgba(46, 213, 213, 1)' : 'gray' }}>개인정보 수집 및 이용에 동의합니다.</span>
    </div>
    
    <div className="agreeAbout" style={{ textAlign: 'center', lineHeight: '2' }}>
  <ul style={{ listStyleType: 'disc', textAlign: 'left', paddingLeft: '20px' }}>
    <li>수집 및 목적 : 렛즈 베타 서비스 론칭 알림</li>
    <li>수집 항목 : 이름, 휴대전화번호</li>
    <li>보유 및 이용 기간 : <span style={{}}>베타 서비스 론칭 후 1개월까지</span></li>
    </ul>
    </div>

    <div className="agreeAbout" style={{ textAlign: 'center', lineHeight: '2', height:'124px', transform: 'translateY(-20px)'}}>
  <ul style={{ listStyleType: 'disc', textAlign: 'left', paddingLeft: '20px'}}>
    <li>귀하는 동의를 거부할 수 있습니다.&nbsp; 다만 동의를 거부할 경우 사전 알림 정보 제공이 제한됩니다.</li>
    <li>렛즈 베타 서비스는 현재 iOS에서만 사용 가능합니다. </li>
    <li>2월 19일 이후 앱 업데이트 후 사용해주세요.</li>
    </ul>
    </div>

<button className="submitButton" type='submit'>사전 오픈 알림 신청하기</button>
        </form>
    );
};

export default RegisterForm;
