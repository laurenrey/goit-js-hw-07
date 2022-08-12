import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const gallaryCardsItems = createGallaryCardsItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", gallaryCardsItems);

function createGallaryCardsItems(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>
    `;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const gallery = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  gallery.show();
  galleryContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      gallery.close();
    }
  });
}