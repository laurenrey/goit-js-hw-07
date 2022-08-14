import { galleryItems } from "./gallery-items.js";
// Change code below this line

const lightGallery = document.querySelector(".gallery");
const gallaryCardsItems = createGallaryCardsItems(galleryItems);

lightGallery.insertAdjacentHTML("beforeend", gallaryCardsItems);

function createGallaryCardsItems(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
      <li>
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
    </li>
    `;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
