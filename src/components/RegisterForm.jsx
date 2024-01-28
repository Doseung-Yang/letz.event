import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [nameError, setNameError] = useState("");
    const [contactError, setContactError] = useState("");

    // 이름에 특수 문자를 입력하지 못하게 하는 함수
    const validateName = (input) => {
        const regex = /^[가-힣a-zA-Z]*$/; // 한글과 영어만 허용
        return regex.test(input);
    };

    // 연락처에 특수 문자나 영어를 입력하지 못하게 하는 함수
    const validateContact = (input) => {
        const regex = /^[0-9]*$/; // 숫자만 허용
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
        toast.success('성공적으로 사전예약에 등록되었습니다!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="이름을 입력하세요"
            />
            {nameError && <p style={{ color: 'rgba(0, 255, 255, 1)' }}>{nameError}</p>}
            <input
                type="text"
                value={contact}
                onChange={handleContactChange}
                placeholder="연락처를 입력하세요"
            />
            {contactError && <p style={{ color: 'rgba(0, 255, 255, 1)' }}>{contactError}</p>}
            <button type="submit">사전 예약</button>
        </form>
    );
};

export default RegisterForm;
