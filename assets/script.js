const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* RECUPERATION DU DOM */
let img = document.querySelector('#banner .banner-img');
let tagLine = document.querySelector('#banner p');
let arrowR = document.querySelector('.arrow_right')
let arrowL = document.querySelector('.arrow_left')

/* INITIALISATION DES VARIABLES */
let imagePath = "assets/images/slideshow/";
let activeStep = 0;
let slidesLength = slides.length - 1;

/* INITIALISATION DES ECOUTEURS */

arrowR.addEventListener('click', slideSuivante)
arrowL.addEventListener('click', slidePrecedente)


function slideSuivante() {
	activeStep++;

	if (activeStep > slidesLength) {
		activeStep = 0;
	}

	updateSlider();
}

function slidePrecedente() {

	activeStep--;

	if (activeStep < 0) {
		activeStep = slidesLength - 1;
	}

	updateSlider();
}


function updateSlider() {
	let selectedSlide = slides[activeStep];
	img.src = imagePath + selectedSlide.image;
	tagLine.innerHTML = selectedSlide.tagLine;
	updateDot()
}

function updateDot() {
	const allDot = document.querySelectorAll('.dot')
	allDot.forEach((dot, key) => {
		if (dot.classList.contains('dot_selected')) {
			dot.classList.remove('dot_selected')
		}
	})

	allDot[activeStep].classList.add('dot_selected')
}
/*création des dots dans html*/
function createDots() {
	let dotsContainer = document.querySelector('.dots')

	slides.forEach((slide, key) => {
		let dot = document.createElement('div');
		dot.classList.add('dot');
		if (key === 0) {
			dot.classList.add('dot_selected');
		}
		dotsContainer.appendChild(dot);
	})
}

createDots();



