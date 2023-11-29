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

/*FONCTION MAIN*/
/*appel toute les fonctions au même endroit*/


/*fonction slide suivante est on augmente le score de active steps si active step est plus grand que tableau de slide et update le slider*/
function slideSuivante() {
	activeStep++;

	if (activeStep > slidesLength) {
		activeStep = 0;
	}

	updateSlider();
}

function slidePrecedente() {
	/* TODO */
	/*comme on part en sens inverse on va décroitre -- au lieu de ++*/
	activeStep--;

	if (activeStep < 0) {
		activeStep = slidesLength - 1;
	}
	/*else {
		activeStep == 0;
	}*/
	updateSlider();
}

/*update la position de slider*/
/*La fonction de update de slider est 
variable de selectslide est égale à la position de l'image dans active step, on lui indique la source de l'image et le tag line et on update le dot opur lier les position images et dots*/
function updateSlider() {
	let selectedSlide = slides[activeStep];
	img.src = imagePath + selectedSlide.image;
	tagLine.innerHTML = selectedSlide.tagLine;
	updateDot()
}
/*updatedot = la position de dot*/
/*la fonction de update dot est une constante de tout les dots. Pour chaque dots on mets l^'objet key dot si la classe dot contient dot selected 
Key(object) place la position dots comme dans un tableau*/
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


/*ECOUTEURS DOTS*/
/*Je veux que lorsqu'on clic sur un dot l'image correspondante s'affiche*/
/* function clickDots() {
	let dotsclick = document.querySelector(".dot")

	dotsclick.addEventListener("click", slideSuivante){

	}
}
clickDots();
 */

/*document.querySelector("dot").addEventListener("click", => {
	slide.classeName = "updateSlider"
})*/
