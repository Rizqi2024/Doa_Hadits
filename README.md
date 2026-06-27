# Doa & Hadits

Aplikasi mobile berbasis React Native dan Expo untuk membaca doa serta hadits secara praktis, nyaman, dan menarik. Proyek ini dikembangkan sebagai aplikasi interaktif dengan fitur pencarian, favorit, tema gelap/terang, pengaturan font, audio bacaan, serta autentikasi lokal.

## Fitur Utama

- Daftar doa dan hadits yang terstruktur secara dinamis
- Pencarian berdasarkan judul, lafaz Arab, latin, dan terjemahan
- Filter kategori untuk memudahkan navigasi
- Fitur favorit untuk menyimpan bacaan yang sering dibaca
- Mode terang dan gelap
- Pengaturan ukuran font untuk kenyamanan membaca
- Audio bacaan berbasis text-to-speech (bahasa Arab)
- Registrasi dan login lokal dengan penyimpanan data menggunakan AsyncStorage
- Fitur berbagi isi doa/hadits ke aplikasi lain

## Teknologi yang Digunakan

- React Native
- Expo Router
- TypeScript
- AsyncStorage
- Expo Speech
- React Navigation

## Persyaratan Sistem

Sebelum menjalankan aplikasi, pastikan perangkat Anda telah menginstal:

- Node.js 18 atau versi yang lebih baru
- npm atau yarn
- Expo Go di ponsel, atau emulator Android/iOS

## Cara Menjalankan

1. Clone repository ini:
   ```bash
   git clone https://github.com/Rizqi2024/Doa_Hadits.git
   cd Doa_Hadits
   ```
2. Install dependency:
   ```bash
   npm install
   ```
3. Jalankan aplikasi:
   ```bash
   npx expo start
   ```
4. Buka aplikasi Expo Go di ponsel Anda dan scan QR code yang muncul.

## Demo Login

Anda dapat mendaftar akun baru atau menggunakan akun demo berikut:

- Username: rizqi
- Password: rizqi123

- Username: admin
- Password: admin123

## Struktur Proyek

- app/ : layar aplikasi dan routing
- components/ : komponen UI reusable
- constants/ : data doa dan hadits
- context/ : state management global
- assets/ : aset gambar dan ikon

## Kontribusi

Jika Anda ingin berkontribusi, silakan fork repository ini, buat branch baru, lalu kirim pull request.

## Penulis

Dikembangkan oleh Rizqi Nurfadilah.
