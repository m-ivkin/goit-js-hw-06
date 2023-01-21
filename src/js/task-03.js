const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryList = document.querySelector(".gallery");

const markup = images
  .map(
    (image) => `<li class="gallery__item">
  <img src=${image.url} 
  alt='${image.alt}' width=300 height=200 />
  </li>
  `
  )
  .join("");

console.log(markup);

galleryList.insertAdjacentHTML("afterbegin", markup);

const gallery = document.querySelector(".gallery");

gallery.style.display = "flex";
gallery.style.gap = "150px";
gallery.style.justifyContent = "center";
gallery.style.alignItems = "center";
gallery.style.listStyle = "none";
console.log(gallery.style);
