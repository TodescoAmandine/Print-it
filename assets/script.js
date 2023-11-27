
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



/******* ALERTE SUR EVENT LISTENER FLECHES*/

/*avec classe

let arrowR = document.querySelector('.arrow_right')
arrowR.addEventListener('click', function () {
	alert('Bonjour')
})
let arrowL = document.querySelector('.arrow_left')
arrowL.addEventListener('click', function () {
	alert('Bonjour')
})*/



/*avec ID*/
let arrowR = document.getElementById('arrow_right')
arrowR.addEventListener('click', function () {
	alert('Bonjour')
})
let arrowL = document.getElementById('arrow_left')
arrowL.addEventListener('click', function () {
	alert('Bonjour')
})

/****DIAPOSITIVE EN COURS DE VISIONNAGE*** */

/*on créé une const et on récupère les inputs dots*/
const dots = document.querySelectorAll(".dots input")

/*on créé une fonction qui contient une boucle pour connaîte la place de l'élément selectionné
on appel (n) nombre de l'endroit de l'object séléctionné...???
const elem récupère la place des dots dans le "tableau"lenght = i
On remove le dot selected dans la classe des élém 
et on ajoute dot selected à la classe selectionné
 */
function selectDot(n) {
	for (let i = 0; i < dots.length; i++) {
		const elem = dots[i];
		elem.classList.remove("dot_selected");
		if (i == n) {
			// ajouter la classe selected a l'element
			elem.classList.add('dot_selected');
		}
	}
}

/*maintenant que l'on connait la place de dot selected grâce à la fonction, on créé une boucle pour appliquer un addlistener au click*/
for (let i = 0; i < dots.length; i++) {
	const elem = dots[i];
	elem.addEventListener('click', () => {
		selectDot(i)/*applique le addEventL au clic à selectDOt récupéré*/
		console.log('dot_selected')

	})

}
/*est ce que cela corresopnd à un compteur ??*/
selectDot(0)





/* 
essai slide
const items = document.querySelectorAll(".slider img");
const nbSlide = items.length;
const suivant = document.querySelector('.arrow_right');
const precedent = document.querySelector('.arrow_left');
let count = 0;

function slideSuivante() {
	items[count].classList.remove('active');

	if (count < nbSlide - 1) {
		count++;
	} else {
		count = 0;
	}
	items[count].classList.add('active')
	console.log(items[count]);
}
suivant.addEventListener('click', slideSuivante)

function slidePrecedente() {
	items[count].classList.remove('active');

	if (count > 0) {
		count--;
	} else {
		count = nbSlide - 1;

	}

	items[count].classList.add('active')
	console.log(items[count]);

}
precedent.addEventListener('click', slidePrecedente) */
