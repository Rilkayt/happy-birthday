document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  audio.play().catch((err) => {
    console.warn("Autoplay diblokir browser. Harus klik dulu.");
  });
});
