import './styles/index.scss';
import movies from './data/movies.json';

const movieListContainer = document.getElementById("movies-list-container");
const modalContainer = document.getElementById('modal-container');
const modalVideoContainer = document.getElementById('modal-video-container');
const modal = document.getElementById("modal");
let modalTitle = document.getElementById("modal-title");
let modalGenre = document.getElementById("modal-genre");
let modalScore = document.getElementById("modal-score");
let modalDescription = document.getElementById("modal-description");
let modalVideo = document.getElementById("video");

const buttonX = document.getElementById('modal__button-x');
const buttonXVideoModal = document.getElementById('modal-video__button-x');


for (let i = 0; i < movies.length; i++) {
	const movie = movies[i];

	const movieElement = document.createElement('div');
	movieElement.classList.add('movie-list-item');

	movieElement.innerHTML = `
		<p>${movie.name}</p> 
		<div class="movie-list-item__left">
			<button class="play"><i class="fa-solid fa-play"></i></button>
			<button class="more-details">More details</button>
		</div>
	`;

	movieListContainer.appendChild(movieElement);

	movieElement.querySelector('.more-details').addEventListener('click', (e) => {
		modalTitle.innerHTML = `${movie.name}`;
		modalGenre.innerHTML = `${movie.genre}`;
		modalScore.innerHTML = `${movie.imdbScore}`;
		modalDescription.innerHTML = `${movie.description}`;

		openModal(movie);
	});

	movieElement.querySelector('.play').addEventListener('click', (e) => {
		modalVideo.innerHTML = `<iframe width="560" height="315" src="${movie.trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
		openVideoModal(movie);
	});

	buttonX.addEventListener('click', (e) => {
		closeModal(movie);
	});

	buttonXVideoModal.addEventListener('click', (e) => {
		closeVideoModal(movie);
	});
};

function openModal(movie) {
	modalContainer.classList.add("active");
};

function closeModal(movie) {
	modalContainer.classList.remove("active");
};

function openVideoModal(movie) {
	modalVideoContainer.classList.add("active");
};

function closeVideoModal(movie) {
	modalVideoContainer.classList.remove("active");
};

