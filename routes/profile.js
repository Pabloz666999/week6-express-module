const express = require('express');
const router = express.Router();

const profiles = [
  { id: 1, nim: 'F1D02310066', nama: 'Pablo Vicasso', jurusan: 'Teknik Informatika' },
  { id: 2, nim: 'F1D02310099', nama: 'Gisella Putri', jurusan: 'Teknik Sipil' },
  { id: 3, nim: 'F1D02310069', nama: 'Erenoah Ravindra Aji', jurusan: 'Teknik Dirgantara' }
];

router.get('/', (req, res) => {
  res.json(profiles);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const profile = profiles.find(p => p.id == id);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send({ message: "Profile tidak ditemukan" });
  }
});

module.exports = router;
