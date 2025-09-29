# Assignment: Express.js & Modul Node.js

## Identitas
- **Nama** : M. Bayu Aji  
- **NIM**  : F1D02310144  

---

## Deskripsi Tugas
Program ini merupakan aplikasi sederhana berbasis **Node.js** dengan framework **Express.js**.  
Aplikasi berjalan di server lokal dan menyediakan beberapa endpoint untuk:

- Menampilkan identitas (Nama & NIM).  
- Melakukan operasi matematika dasar menggunakan modul lokal.  
- Mengelola data profil dengan konsep **route modular**.  

---

## Langkah Pengerjaan

### 1. Membuat Folder Project
Folder project diberi nama:  week6-express-module


### 2. Inisialisasi Node.js Project
Jalankan perintah berikut di terminal:  
```bash
npm init -y
```

### 3. Install Express.js
Jalankan perintah berikut di terminal:  
```bash
npm install express
```

### 4. Melengkapi Struktur Folder
<img width="301" height="272" alt="image" src="https://github.com/user-attachments/assets/99329194-e19f-4ee9-9605-8a9d7ea1befc" />

keterangan file:

index.js → berisi konfigurasi utama server.
utils/math.js → modul lokal dengan fungsi tambah(a, b) dan kali(a, b).
routes/profile.js → mengatur endpoint terkait data profil.
node_modules, package.json, package-lock.json → otomatis dibuat saat install dependency.

Hasil
1. GET /

Menampilkan Nama dan NIM
👉 http://localhost:3000/

<img width="278" height="161" alt="image" src="https://github.com/user-attachments/assets/711d20c0-676a-4acc-bb8e-ba1e4516d95e" />


2. GET /hitung

Menampilkan hasil perhitungan sederhana
👉 http://localhost:3000/hitung

<img width="318" height="149" alt="image" src="https://github.com/user-attachments/assets/8a1ff744-f90d-40d5-b6c1-ad381c06e6a9" />


3. GET /profile

Menampilkan JSON array profile
👉 http://localhost:3000/profile

<img width="362" height="428" alt="image" src="https://github.com/user-attachments/assets/8fc157bb-54f2-4ea1-970c-3202c7f2354f" />


4. GET /profile/1

Menampilkan detail profile berdasarkan ID/NIM
👉 http://localhost:3000/profile/1

<img width="344" height="250" alt="image" src="https://github.com/user-attachments/assets/4296e39f-2888-4060-a861-3382a1d1296f" />

