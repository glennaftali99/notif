const express = require('express');
const cors = require('cors');
const { getSheetData } = require('./sheets');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/notifications', async (req, res) => {
  try {
    const rows = await getSheetData();
    res.json(rows);
  } catch (err) {
    res.status(500).send('Error reading sheet: ' + err);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});