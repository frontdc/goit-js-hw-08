import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery')



const markup = galleryItems.reduce((acc, item) => acc + `

<li >
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" alt="${item.description}"></img>
    </a>
</li>
</li>`, ' ');



gallery.insertAdjacentHTML('beforeend', markup)

gallery.style.listStyle = 'none';

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});




