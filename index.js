const express = require('express');
const app = express();
const port = 3000;

const math = require('./utils/math');

const profileRouter = require('./routes/profile');

app.get('/', (req, res) => {
  res.send('Nama: M. Bayu Aji <br> NIM: F1D02310144');
});

// route hitung penjumlahan
app.get('/hitung', (req, res) => {
  const hasil = math.tambah(66, 99);
  res.send(`Hasil penjumlahan 66 + 99 = ${hasil}`);
});

// gunakan route profile
app.use('/profile', profileRouter);

// jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
