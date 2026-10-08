/* ============================================================
   PORTFOLIO QUEST — interaksi tanpa library
   01 Audio · 02 Layar Start · 03 Navigasi dan area yang dijelajahi
   Konten dan pemutar native tetap tersedia tanpa JavaScript.
   ============================================================ */
(() => {
  "use strict";

  const audio = document.getElementById("quest-audio");
  const controls = document.getElementById("music-controls");
  const toggle = document.getElementById("music-toggle");
  const buttonLabel = document.getElementById("music-button-label");
  const buttonIcon = document.getElementById("music-button-icon");
  const status = document.getElementById("music-status");
  const volume = document.getElementById("music-volume");
  const volumeOutput = document.getElementById("volume-output");
  const dialog = document.getElementById("start-screen");
  const startButton = document.getElementById("start-button");
  const startSound = document.getElementById("start-sound");
  const heroTitle = document.getElementById("hero-title");

  // Jika markup tidak lengkap, jangan mengganti kontrol audio native.
  if (!audio || !controls || !toggle || !status || !volume || !volumeOutput || !buttonLabel || !buttonIcon) return;

  let playPending = false;
  let pauseReason = "";
  let trackingStarted = false;

  /* 01 — Audio: status berasal dari keadaan pemutar yang sebenarnya. */
  function setStatus(message) {
    status.textContent = message;
  }

  function syncButton() {
    const isPlaying = !audio.paused && !audio.ended;
    buttonLabel.textContent = isPlaying ? "Pause" : "Play";
    buttonIcon.textContent = isPlaying ? "Ⅱ" : "▶";
    toggle.setAttribute("aria-label", isPlaying ? "Jeda musik" : "Putar musik");
    controls.dataset.state = isPlaying ? "playing" : "paused";
  }

  function syncVolume() {
    const percentage = Math.round(audio.volume * 100);
    volume.value = String(percentage);
    volumeOutput.value = `${percentage}%`;
    volumeOutput.textContent = `${percentage}%`;
    if (!audio.paused) setStatus(audio.muted || percentage === 0 ? "Musik diputar · tanpa suara" : "Musik diputar");
  }

  function showNativeFallback() {
    audio.hidden = false;
    audio.controls = true;
  }

  async function playMusic() {
    if (playPending) return;
    playPending = true;
    pauseReason = "";
    toggle.disabled = true;
    setStatus("Memuat musik…");
    try {
      // play() dipanggil langsung dari klik Start/Play: tanpa autoplay.
      await audio.play();
      syncButton();
      if (!audio.paused) setStatus(audio.muted || audio.volume === 0 ? "Musik diputar · tanpa suara" : "Musik diputar");
    } catch {
      syncButton();
      setStatus(audio.error ? "Audio belum tersedia. Portofolio tetap dapat dijelajahi." : "Musik belum diputar. Tekan Play untuk mencoba lagi.");
      showNativeFallback();
    } finally {
      playPending = false;
      toggle.disabled = false;
    }
  }

  toggle.addEventListener("click", () => {
    if (audio.paused) {
      void playMusic();
    } else {
      pauseReason = "";
      audio.pause();
    }
  });

  volume.addEventListener("input", () => {
    audio.volume = Number(volume.value) / 100;
    audio.muted = false;
    syncVolume();
  });

  audio.addEventListener("play", syncButton);
  audio.addEventListener("playing", () => {
    syncButton();
    syncVolume();
  });
  audio.addEventListener("pause", () => {
    syncButton();
    setStatus(pauseReason || "Musik dijeda");
  });
  audio.addEventListener("volumechange", syncVolume);
  audio.addEventListener("ended", () => {
    syncButton();
    setStatus("Musik selesai");
  });
  audio.addEventListener("error", () => {
    syncButton();
    setStatus("Audio belum tersedia. Portofolio tetap dapat dijelajahi.");
    showNativeFallback();
  });

  // Tab tersembunyi menjeda musik; kembali ke tab tidak memutarnya lagi.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !audio.paused) {
      pauseReason = "Musik dijeda saat tab tidak aktif";
      audio.pause();
    }
  });

  audio.volume = 0.25;
  syncVolume();
  syncButton();
  setStatus("Musik dijeda");
  controls.hidden = false;
  audio.controls = false;
  audio.hidden = true;

  /* 02 — Dialog native: fokus terkelola, Escape masuk tanpa musik. */
  function enterPortfolio(withSound) {
    if (withSound) {
      void playMusic();
    } else {
      pauseReason = "";
      audio.pause();
      setStatus("Musik dijeda · masuk tanpa suara");
    }
    if (dialog?.open) dialog.close();
  }

  function activatePortfolio() {
    document.body.classList.remove("start-open");
    startTracking();
    heroTitle?.focus({ preventScroll: true });
  }

  if (dialog && startButton && startSound && typeof dialog.showModal === "function") {
    startButton.addEventListener("click", () => enterPortfolio(startSound.checked));
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      enterPortfolio(false);
    });
    dialog.addEventListener("close", activatePortfolio);
    try {
      dialog.showModal();
      document.body.classList.add("start-open");
    } catch {
      // Kegagalan dialog tidak menghalangi informasi portofolio.
      document.body.classList.remove("start-open");
      startTracking();
    }
  } else {
    startTracking();
  }

  /* 03 — HUD: hitung hanya seksi yang benar-benar masuk area pandang. */
  function startTracking() {
    if (trackingStarted || !("IntersectionObserver" in window)) return;
    trackingStarted = true;
    const sections = [...document.querySelectorAll("[data-quest-section]")];
    const links = [...document.querySelectorAll("[data-area]")];
    const progress = document.getElementById("journey-progress");
    const count = document.getElementById("explored-count");
    const visited = new Set();
    if (!progress || !count || !sections.length) return;

    progress.hidden = false;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const sectionId = entry.target.id;
        visited.add(sectionId);
        document.querySelector(`[data-dot="${sectionId}"]`)?.classList.add("is-visited");
        count.textContent = `${visited.size}/${sections.length}`;
        for (const link of links) {
          const isActive = link.dataset.area === sectionId;
          link.classList.toggle("is-active", isActive);
          if (isActive) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        }
      }
    }, { rootMargin: "-12% 0px -60% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }
})();
