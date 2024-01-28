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
            setNameError('이름에는 한글과 영어만 입력 가능합니다.');
        } else {
            setNameError("");
        }
    };

    const handleContactChange = (e) => {
        const input = e.target.value;
        setContact(input);
        if (!validateContact(input)) {
            setContactError('연락처에는 숫자만 입력 가능합니다.');
        } else {
            setContactError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isChecked) {
            toast.error('체크박스를 체크해주세요.');
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
        toast.success('성공적으로 사전예약에 등록되었습니다!');
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
                />
                {contactError && <p style={{ color: 'rgba(0, 255, 255, 1)' }}>{contactError}</p>}
            </div>

            <div className="agreeCheckbox" style={{backgroundColor: isChecked ? 'blue' : 'rgba(0, 255, 255, 1)'}}>
                <input
                    id="agree"
                    type="checkbox"
                    className="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label htmlFor="agree" style={{color: isChecked ? 'white' : 'black'}}></label>
                <span style={{color: isChecked ? 'white' : 'black'}}>동의합니다.</span>
            </div>


<button className="submitButton" type='submit'>사전 오픈 알림 신청하기</button>
        </form>
    );
};

export default RegisterForm;
