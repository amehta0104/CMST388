// JavaScript Document
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');

const imageIndexes = [ 2, 3, 4, 5, 6];
const selectedIndex = null;

imageIndexes.forEach( (i) => {
const image = document.createElement('img');
image.src = 'gallery/gallery'+ (i) + '.jpg';
image.alt = 'gg';


image.classList.add('imgContainer');
image.classList.add('item-' + i)
image.style.width = '100%';
image.style.height = '150px';

image.addEventListener('click', () => {
    

selectedImage.src = 'gallery/gallery'+ (i) + '.jpg';
selectedImage.alt = 'gg';


});

console.log(image.src);
gallery.appendChild(image);

});


popup.addEventListener('click', () => {



popup.src = '';
popup.alt = '';


})