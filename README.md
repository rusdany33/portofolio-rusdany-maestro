# Portofolio Personal — Rusdany Maestro

Tugas 1 Pemrograman Web Semester Ganjil TA 2026/2027.

- Nama: Rusdany Maestro
- NIM: 202210370311406
- Program studi: Informatika
- Kampus: Universitas Muhammadiyah Malang

## Membuka halaman

Ekstrak ZIP terlebih dahulu, lalu buka `index.html` di Chrome, Edge, atau Firefox. Halaman bekerja langsung dari berkas lokal tanpa instalasi, koneksi internet, atau proses build. Tautan GitHub dan sumber publik memerlukan internet, sedangkan tautan email membuka aplikasi email yang tersedia di perangkat.

Jika ingin menggunakan server lokal dan Python sudah terpasang, jalankan dari folder ini:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Kemudian buka `http://127.0.0.1:8765`. Tekan Ctrl+C untuk menghentikan server.

## Isi berkas

```text
portofolio/
├── index.html             # Struktur semantik dan isi portofolio
├── assets/
│   └── css/
│       └── style.css      # Seluruh layout, warna, responsivitas, dan gaya cetak
├── README.md              # Panduan penggunaan dan penjelasan singkat
├── SUMBER-DATA.md          # Asal informasi biografi dan proyek
└── bukti-pengujian/        # Laporan pemeriksaan dan tangkapan layar
```

## Penjelasan untuk memahami tugas

HTML membentuk isi dan struktur dokumen. Tag semantik seperti `header`, `nav`, `main`, `section`, `article`, `address`, dan `footer` menjelaskan fungsi tiap bagian. Judul disusun dengan satu `h1`, judul bagian `h2`, dan subjudul `h3`. Navigasi menggunakan tautan ke ID bagian dalam halaman.

CSS berada dalam berkas terpisah supaya struktur dan penataan mudah dipelajari. Variabel dalam `:root` menjaga konsistensi warna, tipografi, dan jarak. Grid dan Flexbox mengatur kolom; media query menyesuaikannya untuk layar kecil. Tidak ada Bootstrap, Tailwind, JavaScript, CDN, maupun library UI yang dipakai untuk menjalankan portofolio ini. Nama framework pada deskripsi proyek merujuk proyek lain di GitHub, bukan teknologi yang digunakan oleh halaman tugas ini.

Aksesibilitas didukung oleh bahasa dokumen Indonesia, tautan lewati navigasi, fokus keyboard terlihat, serta ilustrasi dekoratif yang tidak menambah gangguan bagi pembaca layar. Gaya cetak disediakan agar resume tetap dapat dibaca saat dicetak melalui browser.

## Mengubah isi

Edit teks pada `index.html`. Nama, NIM, email, dan URL GitHub sudah sesuai data pengguna. Deskripsi proyek dan pengalaman menggunakan sumber publik yang dicatat dalam `SUMBER-DATA.md`. Untuk mengubah desain, edit variabel dan aturan pada `assets/css/style.css`.

## Pengumpulan

Tenggat pada PDF: **Jumat, 9 Oktober 2026, pukul 23.59 WIB**. Buka [form pengumpulan](https://forms.gle/FwLZHLvb3xmpnD5JA) dan ikuti kolom serta jenis berkas yang diminta. ZIP berisi halaman, aset, panduan, sumber, dan bukti pengujian. PDF tidak menetapkan format berkas pengumpulan secara khusus.

Hasil pemeriksaan teknis tercatat dalam `bukti-pengujian/LAPORAN-PENGUJIAN.md`. Penilaian akhir tetap ditentukan dosen. Pelajari struktur HTML dan CSS agar dapat menjelaskan pilihan implementasinya.
