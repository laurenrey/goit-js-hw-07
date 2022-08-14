import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryCardsItems = createGalleryCardsItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCardsItems);

function createGalleryCardsItems(galleryItems) {
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
  document.addEventListener("keydown", onEscBtnClick);
  gallery.show();

  function onEscBtnClick(evt) {
    if (evt.code === "Escape") {
      gallery.close();
      document.removeEventListener("keydown", onEscBtnClick);
    }
  }
}
