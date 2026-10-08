# Pemeriksaan tugas portofolio

Nama: Rusdany Maestro · NIM: 202210370311406 · Tanggal: 8 Oktober 2026.

## Hasil terhadap rubrik

| Rubrik | Bobot | Implementasi dan hasil pemeriksaan |
| --- | --- | --- |
| Struktur dan semantik HTML | 40% | HTML5 dengan bahasa Indonesia, satu `main` dan `h1`, hierarki `h2`/`h3`, bagian bernama, `header`, `nav`, `section`, `article`, `figure`, `dl`, `ol`/`ul`, `time`, `address`, dan `footer`. Validator tidak menemukan error atau peringatan. |
| CSS dan layout | 30% | Satu stylesheet eksternal dengan daftar isi, variabel desain, sistem warna krem/hijau/gelap, tipografi konsisten, Grid/Flexbox, breakpoint, fokus keyboard, preferensi gerak, dan gaya cetak. CSS juga lolos validator. |
| Responsivitas | 30% | Diperiksa pada 11 lebar layar. Tidak ditemukan overflow horizontal, teks keluar viewport, atau ID tujuan navigasi yang hilang. Screenshot desktop dan mobile disertakan. |

## Validator dokumen

Alat: [Nu Html Checker](https://github.com/validator/validator), versi `26.10.7 (8049d4d)`, dijalankan secara lokal dengan Java. Berkas yang diperiksa adalah `index.html` dan `assets/css/style.css`, dengan opsi pemeriksaan CSS.

```text
--stdout --format json --also-check-css index.html assets/css/style.css
Exit code: 0
{"version":"26.10.7 (8049d4d)","messages":[]}
```

Hasil asli disimpan pada [validasi-html-css.json](validasi-html-css.json). Tidak ada pesan yang disembunyikan menggunakan filter.

## Pemeriksaan layar

Browser: Google Chrome melalui agent-browser. Tinggi viewport untuk pemeriksaan ukuran adalah 900 piksel; tangkapan layar utama menggunakan 1440 × 960 dan 390 × 844.

| Lebar viewport | Overflow horizontal | Teks keluar layar | Anchor bagian rusak |
| ---: | :---: | ---: | ---: |
| 320 | Tidak | 0 | 0 |
| 360 | Tidak | 0 | 0 |
| 375 | Tidak | 0 | 0 |
| 390 | Tidak | 0 | 0 |
| 640 | Tidak | 0 | 0 |
| 768 | Tidak | 0 | 0 |
| 860 | Tidak | 0 | 0 |
| 1024 | Tidak | 0 | 0 |
| 1280 | Tidak | 0 | 0 |
| 1440 | Tidak | 0 | 0 |
| 1920 | Tidak | 0 | 0 |

Data asli mencakup viewport, heading, ID, tautan, stylesheet, dan jumlah script pada [pemeriksaan-responsif.json](pemeriksaan-responsif.json). Ilustrasi dekoratif berada di dalam container yang memotong bentuknya secara sengaja; informasi utama tetap berada di dalam layar.

## Interaksi dan penggunaan lokal

- Tab pertama menampilkan tautan `Lewati ke konten utama` dengan outline yang terlihat. Enter melewati navigasi, dan Tab berikutnya menuju `Jelajahi karya` di konten utama.
- Panel `Ruang lingkup proyek` membuka dan menutup dengan Enter; pointer click juga membukanya. Interaksi memakai elemen HTML `details`/`summary` tanpa JavaScript.
- Semua ID unik. Seluruh tautan ke bagian halaman memiliki target yang ada. Email menuju `mailto:rusdany33@gmail.com`; URL GitHub dan LinkedIn sesuai data pengguna.
- Tautan tab baru memiliki `rel="noopener noreferrer"` dan keterangan pembaca layar. Ilustrasi CSS bersifat dekoratif dan memakai `aria-hidden="true"`.
- `index.html` juga dibuka langsung melalui `file:///D:/web/portofolio/index.html`: stylesheet lokal diterapkan, tidak ada script, tidak ada permintaan resource HTTP, dan tidak ada overflow pada 390 piksel.
- Tidak ada framework CSS, CDN, font remote, gambar remote, dependensi aplikasi, inline style, atau proses build pada halaman tugas.
- Peninjauan kode independen telah memeriksa kesesuaian struktur, identitas, sumber, dan tautan. Peninjauan visual independen memeriksa desktop, tablet, dan layar sempit serta interaksi detail proyek.

## Tangkapan layar

- [Desktop — tampilan awal](desktop.png)
- [Desktop — halaman lengkap](desktop-lengkap.png)
- [Mobile — tampilan awal](mobile.png)
- [Mobile — halaman lengkap](mobile-lengkap.png)

## Batas pemeriksaan

Pemeriksaan responsivitas dilakukan dengan viewport browser, bukan setiap model perangkat fisik. Gaya cetak tersedia dalam CSS, tetapi laporan ini tidak menyatakan validasi semua printer atau browser. LinkedIn dapat meminta login untuk menampilkan profil. Pemeriksaan teknis dan kesesuaian rubrik tidak menjamin keputusan nilai akhir dosen.
