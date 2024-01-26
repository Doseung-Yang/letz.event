import { GoogleSpreadsheet } from 'google-spreadsheet';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: '허용되지 않는 메서드입니다.'});
    }

    const { name, contact } = req.body;

    try {
        const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
        });

        await doc.loadInfo();  

        let sheet = doc.sheetsByTitle["유저등록정보"];
        if (!sheet) {
            sheet = await doc.addSheet({ headerValues: ['Name', 'Contact'], title: '유저등록정보' });
        }

        const rows = await sheet.getRows();
        const isRegistered = rows.some(row => row['Name'] === name && row['Contact'] === contact);

        if (isRegistered) {
            return res.status(400).json({ message: '이미 등록된 사용자입니다.' });
        }

        await sheet.addRow({ Name: name, Contact: contact });

        return res.status(200).json({ message: '성공적으로 등록되었습니다!' });
    } catch (error) {
        console.error('Google Spreadsheet Error: ', error);
        return res.status(500).json({ message: '내부 서버 오류가 발생했습니다.' });
    }
}
