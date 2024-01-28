import { google } from "googleapis";
import credentials from '../../../../vue.json';
const { client_email, private_key } = credentials;

const authorize = new google.auth.JWT(client_email, null, private_key, ['https://www.googleapis.com/auth/spreadsheets']);
const googleSheet = google.sheets({ version: 'v4', auth: authorize });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, contact } = req.body;

  try {
    const response = await googleSheet.spreadsheets.values.get({
      spreadsheetId: '1X5enVSDX9eXq6L6jymJwPvhDemNwNm972CQu1WA67mI',
      range: 'A:B',
    });

    const rows = response.data.values;

    if (!rows) {
      console.error('Failed to load data from Google Spreadsheet');
      return res.status(500).json({ message: '데이터를 불러오는 데 실패했습니다.' });
    }

    const isRegistered = rows.some(row => row[0] === name && row[1] === contact);

    if (isRegistered) {
      return res.status(400).json({ message: '이미 등록된 사용자입니다.' });
    }

    await googleSheet.spreadsheets.values.append({
      spreadsheetId: '1X5enVSDX9eXq6L6jymJwPvhDemNwNm972CQu1WA67mI',
      range: 'A:B',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[name, contact]],
      },
    });

    return res.status(200).json({ message: '성공적으로 등록되었습니다!' });
  } catch (error) {
    console.error('Google Spreadsheet Error: ', error);
    return res.status(500).json({ message: '내부 서버 오류가 발생했습니다.' });
  }
}
