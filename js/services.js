const services = [
	{
		name: 'Cleaning',
		imgSrc: '../img/services/janitor.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suntfugiat non veritatis porro recusandae sapiente modi vero beatae, minima labore commodi molestias qui nesciunt. Atque qui nam voluptatum aliquam cupiditate.',
	},
	{
		name: 'Cooking',
		imgSrc: '../img/services/janitor.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum similique eius eligendi odit ullam eaque, accusamus impedit quisquam a, expedita nostrum! Voluptatibus, quam laudantium.',
	},
	{
		name: 'Thinking',
		imgSrc: '../img/services/janitor.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, labore accusantium! Sequi exercitationem molestias quo voluptates non, nam minima! Laborum fugit molestiae laboriosam quos iste.',
	},
];

const services__cardContainer = document.getElementById(
	'services__cardContainer'
);

let createServicesCard = (mark) => {
	const services__card = document.createElement('div');
	services__card.className = 'services__card';

	services__card.innerHTML = `
                        <img
							class="card__img"
							src="${mark.imgSrc}"
							alt="${mark.name}"
						/>
						<h2 class="card__title">
							${mark.name}
						</h2>
						<p>
							${mark.desc}
						</p>
    `;

	services__cardContainer.appendChild(services__card);
};

services.forEach(createServicesCard);
