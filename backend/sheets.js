const { google } = require('googleapis');
const keys = require('./credentials.json');

const sheets = google.sheets('v4');
const auth = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ['https://www.googleapis.com/auth/spreadsheets.readonly']
);

async function getSheetData() {
  await auth.authorize();
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range: process.env.SHEET_RANGE,
  });
  const [header, ...rows] = response.data.values;
  return rows.map(row => {
    const rowObj = {};
    header.forEach((h, i) => rowObj[h] = row[i] || '');
    return rowObj;
  });
}

module.exports = { getSheetData };