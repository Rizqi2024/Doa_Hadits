# 📖 Aplikasi Hadits & Doa (UAS Edition)

Aplikasi **Hadits & Doa** adalah aplikasi mobile interaktif bernuansa Islami yang dibangun menggunakan **React Native**, **TypeScript**, dan **Expo**. Aplikasi ini telah dikembangkan secara signifikan dari versi UTS menjadi versi **UAS** dengan menambahkan berbagai fitur baru yang dinamis, optimasi kode, serta perluasan basis data yang kaya.

Aplikasi ini mengusung visual *Emerald Green Theme* dengan perpaduan efek transparan *Glassmorphism* dan mode gelap premium (*Emerald Dark Theme*) untuk kenyamanan membaca di berbagai kondisi cahaya.

---

## ✨ Fitur Baru & Unggulan (UAS Edition)

1. **Perluasan Data Dinamis (Prioritas Utama)**:
   - Tidak lagi menggunakan halaman statis per doa/hadits. Data dipusatkan di `constants/database.ts` dengan total **40+ entri dinamis**.
   - **Kumpulan Doa (20+ entri)**: Doa Harian, Doa Shalat, Doa Bepergian, dan Doa Perlindungan.
   - **Kumpulan Hadits (20+ entri)**: Memuat 15+ Hadits dari kitab **Arba'in Nawawi** dan Hadits Pilihan (Niat, Ilmu, Kebersihan, Senyum, Kasih Sayang).
   - Fitur **Pencarian (Search Bar)** instan berdasarkan judul, lafal Arab, latin, atau terjemahan.
   - Fitur **Filter Kategori** menggunakan chip filter horizontal yang interaktif.

2. **Autentikasi Dinamis (Registrasi & Login)**:
   - Upgrade dari validasi statis menjadi sistem autentikasi dinamis dengan **Daftar Akun (Signup)** dan **Masuk Akun (Login)**.
   - Data akun disimpan secara lokal menggunakan **AsyncStorage** yang bertindak sebagai database lokal sehingga aman dan andal dijalankan secara offline saat proses penilaian.
   - Fitur **Persistensi Sesi**: Sesi masuk pengguna akan diingat, sehingga pengguna tidak perlu login ulang setiap kali membuka aplikasi.

3. **Sistem Favorit / Bookmark**:
   - Tab khusus **Favorit** (`app/(tabs)/favorites.tsx`) dengan Segmented Control ("Doa" / "Hadits") untuk melihat daftar bacaan yang disimpan.
   - Tombol bookmark pada halaman detail doa/hadits yang otomatis tersimpan permanen di penyimpanan lokal.

4. **Kustomisasi Tampilan & Aksesibilitas**:
   - **Dark/Light Mode Toggle**: Pilihan tema gelap premium (*Emerald Dark Theme*) dengan palet warna obsidian beraksen hijau mint yang indah di mata.
   - **Pengaturan Ukuran Font**: Tombol pengubah ukuran font Arab, latin, dan terjemahan langsung di halaman detail (A- / A+) atau melalui menu pengaturan, sangat ramah untuk pengguna lanjut usia.

5. **Audio Recitation (TTS Bahasa Arab)**:
   - Pemutar audio dinamis menggunakan **expo-speech** (Text-to-Speech) beraksen Arab asli.
   - Panel pemutar audio glassmorphism premium dengan status visual progres pemutaran yang disimulasikan secara real-time.

6. **Fitur Berbagi (Share)**:
   - Tombol berbagi instan yang secara otomatis memformat teks doa/hadits (Judul, Arab, Latin, Arti, & Referensi) dalam format estetik untuk dibagikan ke WhatsApp, Telegram, atau media sosial.

7. **Notifikasi Harian (Daily Reminder)**:
   - Pengaturan notifikasi pengingat harian pada menu pengaturan yang dijadwalkan secara otomatis menggunakan **expo-notifications** pada jam yang telah ditentukan (misalnya pukul 06:00 pagi).

---

## 🛠️ Struktur Proyek Utama

Peta struktur direktori baru dengan model dynamic routing:
```
├── app
│   ├── (tabs)
│   │   ├── _layout.tsx      # Navigasi Tab Bawah (Beranda, Favorit, Pengaturan)
│   │   ├── index.tsx         # Halaman Beranda (dilengkapi Doa Hari Ini)
│   │   ├── favorites.tsx     # Layar Menampilkan Doa/Hadits Favorit
│   │   └── settings.tsx      # Pengaturan Tema, Font, Reminder, Logout
│   ├── doa
│   │   ├── [id].tsx          # Detail Doa Dinamis (Audio, Font, Share, Fav)
│   │   └── index.tsx         # Daftar Doa Dinamis + Search & Filter Kategori
│   ├── hadits
│   │   ├── [id].tsx          # Detail Hadits Dinamis (Audio, Font, Share, Fav)
│   │   └── index.tsx         # Daftar Hadits Dinamis + Search & Filter Kategori
│   ├── _layout.tsx           # Entry point navigasi dibungkus context global
│   ├── index.tsx             # Animated Splash Screen
│   ├── login.tsx             # Halaman Masuk Akun
│   ├── register.tsx          # Halaman Pendaftaran Akun Baru [Baru]
│   └── tentang.tsx           # Informasi Pembuat (Tema Adaptif)
├── constants
│   ├── database.ts           # Basis Data 40+ Doa & Hadits [Baru]
│   └── theme.ts              # Palet warna adaptif & Fonts
├── context                   # State Management Global [Baru]
│   ├── AuthContext.tsx       # State Autentikasi Registrasi/Login
│   ├── ThemeContext.tsx      # State Kustomisasi Tema Dark/Light
│   ├── FavoritesContext.tsx  # State Penyimpanan Favorit
│   └── SettingsContext.tsx   # State Ukuran Font & Reminder
```

---

## 🚀 Cara Menjalankan Aplikasi Secara Lokal

1. Pastikan Anda telah menginstal **Node.js** (rekomendasi LTS) dan **npm** di komputer Anda.
2. Clone repository ini:
   ```bash
   git clone https://github.com/Rizqi2024/Doa_Hadits.git
   cd Doa_Hadits
   ```
3. Instal dependencies yang diperlukan:
   ```bash
   npm install
   ```
4. Jalankan Expo development server:
   ```bash
   npx expo start
   ```
5. Untuk menguji aplikasi:
   - **Android/iOS**: Unduh aplikasi **Expo Go** di App Store / Play Store dan pindai QR Code yang tampil di terminal.
   - **Web**: Tekan tombol `w` di terminal untuk membuka versi web.

---

## 🔐 Kredensial Pengujian (Credentials)

Anda bisa melakukan pendaftaran akun baru langsung di dalam aplikasi melalui tombol **"Daftar Akun"**, atau menggunakan akun default bawaan sistem berikut:

- **Akun Utama**
  - Username: `rizqi`
  - Password: `rizqi123`
- **Akun Admin**
  - Username: `admin`
  - Password: `admin123`

---

## 💻 Kualitas Kode & Tipe Data
Proyek ini dibangun menggunakan **TypeScript (94.1%)** dengan pendefinisian type dan interface yang ketat pada database dan context, menjamin kode bersih (*clean code*), dapat dipelihara (*maintainable*), dan bebas dari error runtime.

💡 **Dikembangkan oleh:** Rizqi Nurfadilah (202407002) - *Junior Developer App*
