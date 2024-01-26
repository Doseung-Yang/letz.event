import React, { useState } from 'react';

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/Spreadsheet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, contact }),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error(data);
            return;
        }

        setName("");
        setContact("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="이름을 입력하세요"
            />
            <input
                type="text"
                value={contact}
                onChange={e => setContact(e.target.value)}
                placeholder="연락처를 입력하세요"
            />
            <button type="submit">사전 예약</button>
        </form>
    );
};

export default RegisterForm;
