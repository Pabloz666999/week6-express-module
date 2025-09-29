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
Folder project diberi nama:  expressModule_F1D02310144


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

2. GET /hitung

Menampilkan hasil perhitungan sederhana
👉 http://localhost:3000/hitung

3. GET /profile

Menampilkan JSON array profile
👉 http://localhost:3000/profile
<img width="328" height="419" alt="image" src="https://github.com/user-attachments/assets/27db7955-8d77-488f-afb4-82728b4e52ad" />


4. GET /profile/1

Menampilkan detail profile berdasarkan ID/NIM
👉 http://localhost:3000/profile/1
