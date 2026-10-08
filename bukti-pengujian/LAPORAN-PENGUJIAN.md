# Pemeriksaan Portfolio Quest — Rusdany Maestro

Ditinjau pada 8 Oktober 2026. Versi utama menggunakan HTML, CSS, dan JavaScript sesuai pilihan eksplisit pemilik setelah ketentuan HTML/CSS murni dalam PDF dijelaskan. Tidak memakai framework atau library UI.

## Struktur dan validasi

- Nu HTML Checker **26.10.7 (8049d4d)** memeriksa `index.html` dan `assets/css/style.css`: **0 error, 0 warning**. Hasil mentah: `validasi-html-css.json`.
- `node --check assets/js/game.js`: exit code **0**.
- DOM memiliki satu `main`, satu `h1`, bahasa `id`, tanpa ID ganda, tanpa tautan fragmen lokal yang rusak, dan tanpa image yang gagal dimuat. Pixel art dibuat dengan CSS dan disembunyikan dari pembaca layar sebagai dekorasi.
- Identitas/NIM/email, tautan GitHub/LinkedIn, lima pengalaman profesional yang dikonfirmasi pemilik, dua organisasi, tiga repositori, pendidikan UMM, dan SangSurya Plus 2023–2024 tersedia. Uraian rinci pekerjaan atau hasil bisnis yang belum diberikan pemilik tidak direka.
- Sesi pemeriksaan utama tidak mencatat JavaScript page error: `kesalahan-browser.json`.

## Responsivitas

Layar Start dan halaman setelah masuk diperiksa pada **320, 360, 375, 390, 640, 768, 860, 1024, 1280, 1440, dan 1920 piksel**. Seluruh 22 pemeriksaan tidak memiliki overflow horizontal atau elemen teks yang melebar melewati viewport.

Hasil mentah: `responsif-start.json` dan `pemeriksaan-responsif.json`. Pada mobile 390 px, detail proyek yang dibuka juga tidak menimbulkan overflow (`details-mobile.json`). Tangkapan layar mobile memakai viewport 390 × 844; desktop 1440 × 900.

## Interaksi dan audio

Pemeriksaan dilakukan melalui browser Chromium dan input keyboard/pointer:

| Alur | Hasil |
| --- | --- |
| Pembukaan halaman | Dialog Start terbuka; musik paused, waktu 0, belum dimuat, volume 25%. |
| Fokus tombol Start + Enter | Dialog menutup; fokus pindah ke judul utama; WAV didekode sebagai 32 detik; waktu audio bergerak dan tombol menjadi Pause. |
| Pause kemudian Play | Audio benar-benar berhenti lalu berlanjut; label/status mengikuti keadaan audio. |
| Volume melalui keyboard Home/End | Volume menjadi 0/100%; output dan status suara mengikuti nilainya. |
| Escape dari layar Start | Masuk tanpa audio; fokus ke judul; halaman dapat dijelajahi. |
| Menonaktifkan “Musik saat mulai” + Start | Masuk tanpa audio; waktu tetap 0. |
| Detail proyek dengan Enter | Elemen `details` membuka melalui keyboard. |
| Menu Experience | Navigasi menuju bagian yang benar, di bawah header; kelima perusahaan dan LinkedIn sesuai konfirmasi. |
| Preferensi reduced motion | Browser melaporkan preferensi aktif; animasi karakter none dan scroll behavior auto. |

Hasil mentah: `game-initial.json`, `game-entered.json`, `interaksi-game.json`, `masuk-tanpa-suara.json`, `details-keyboard.json`, `navigasi-pengalaman.json`, dan `gerak-dikurangi.json`.

Auditor kode independen juga menguji penolakan `play()` dengan `NotAllowedError` dan audio rusak (media error code 4). Kedua kondisi memberikan pesan yang sesuai, mengaktifkan kembali tombol, dan menampilkan pemutar native. Penjedaan saat tab tersembunyi serta perhitungan area yang dikunjungi ditinjau dari kode. Gaya cetak ditinjau secara statis; laporan ini tidak mengklaim pengujian PDF cetak.

Musik adalah komposisi prosedural asli: 32 detik, 120 BPM, stereo PCM 44.1 kHz/16-bit. WAV dibuka kembali untuk pemeriksaan: peak 0.67999, RMS 0.16659, **0 sampel clipping**. Aset memakai loop; metadata dan SHA-256 tersimpan pada `audio-asset.json`.

## Berkas lokal dan progressive enhancement

Pembukaan langsung `file:///D:/web/portofolio/index.html` berhasil memuat CSS, font lokal, JavaScript, serta musik. Font Press Start 2P melaporkan loaded, audio mencapai readyState 4 tanpa error, dan tidak ada resource eksternal (`file-lokal.json`). Website tidak membutuhkan server/build/CDN untuk digunakan.

Fallback ketika script gagal dimuat diuji oleh auditor saat HTML/CSS game sudah tersedia tetapi `game.js` belum ada. Dialog tetap tertutup; konten dan pemutar native terlihat; kontrol custom tersembunyi. **Metode ini menguji kegagalan aset JS, bukan menonaktifkan mesin JavaScript seluruh browser.** Catatan/metode lengkap: `tanpa-javascript.json`.

## Bukti visual

Evaluasi desain independen menghasilkan **PASS** pada putaran pertama: tema pixel RPG konsisten di desktop/tablet/mobile, layar Start muat pada 375 × 812, pengalaman tampil jelas, serta alur musik dan keyboard berjalan. Tidak ada perbaikan wajib.

- `start-desktop.png`, `start-mobile.png`: layar pembuka.
- `desktop.png`, `mobile.png`: halaman setelah masuk.
- `desktop-lengkap.png`, `mobile-lengkap.png`: seluruh halaman.
- `experience.png`: bagian pengalaman profesional.

`integritas-berkas.json` mencatat ukuran dan SHA-256 berkas source/aset. Versi tugas HTML/CSS awal tetap tersedia pada commit `ce4236d08f646971583c26b0dc8f2a2976ec4839` di GitHub dan ZIP awal di folder kerja.
