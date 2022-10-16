// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector(".gallery");
 const markup =  makeGallery(galleryItems);


divGallery.insertAdjacentHTML("afterbegin", markup);

function  makeGallery(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<li>
              <a class="gallery__item" href="${original}">
              <img
              class="gallery__image"
              src="${preview}"
              alt="${description}" 
              />
              </a>
              </li> `;  })	.join("");
}
 
new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });