const galleryContainer = document.getElementById('gallery__photos-container');

const gallery = [
	{ imgSrc: '../img/gallery/service-1.jpg' },
	{ imgSrc: '../img/gallery/service-2.png' },
	{ imgSrc: '../img/gallery/service-3.jpeg' },
	{ imgSrc: '../img/gallery/service-4.jpeg' },
	{ imgSrc: '../img/gallery/service-5.jpg' },
	{ imgSrc: '../img/gallery/service-6.jpeg' },
];

let createGallery = (photo) => {
	const image = document.createElement('div');
	image.className = 'gallery__img';
	image.innerHTML = `
        <img src="${photo.imgSrc}"/>
    `;
	galleryContainer.appendChild(image);
};

gallery.forEach(createGallery);
