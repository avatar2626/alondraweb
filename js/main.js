// ALONDRA — interacciones sencillas y accesibles
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const dialog = document.getElementById("lightbox");
  const dialogImage = dialog?.querySelector("img");
  const closeButton = dialog?.querySelector(".lightbox__close");

  document.querySelectorAll(".gallery__item").forEach((item) => {
    item.addEventListener("click", () => {
      if (!dialog || !dialogImage) return;
      dialogImage.src = item.dataset.full;
      dialogImage.alt = item.querySelector("img")?.alt || "Fotografía ampliada de Alondra";
      if (typeof dialog.showModal === "function") dialog.showModal();
    });
  });

  closeButton?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener("close", () => {
    if (dialogImage) dialogImage.src = "";
  });
});
