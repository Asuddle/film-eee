import { setGenreData } from '../../reducers/movies';

const apiData = {
	url: 'discover/movie',
	params: { with_genres: 28 },
	reduxAction: setGenreData,
	label: 'action',
};

const adventureApiData = {
	url: 'discover/movie',
	params: { with_genres: 12 },
	reduxAction: setGenreData,
	label: 'adventure',
};
const animationApiData = {
	url: 'discover/movie',
	params: { with_genres: 16 },
	reduxAction: setGenreData,
	label: 'animation',
};
const popularApi = {
	url: 'movie/popular',
	reduxAction: setGenreData,
	label: 'popular',
};

const comedyApiData = {
	url: 'discover/movie',
	params: { with_genres: 35 },
	reduxAction: setGenreData,
	label: 'comedy',
};

const crimeApiData = {
	url: 'discover/movie',
	params: { with_genres: 80 },
	reduxAction: setGenreData,
	label: 'crime',
};

const documentaryApiData = {
	url: 'discover/movie',
	params: { with_genres: 99 },
	reduxAction: setGenreData,
	label: 'documentary',
};
const dramaApiData = {
	url: 'discover/movie',
	params: { with_genres: 18 },
	reduxAction: setGenreData,
	label: 'drama',
};

const familyApiData = {
	url: 'discover/movie',
	params: { with_genres: 10751 },
	reduxAction: setGenreData,
	label: 'family',
};

const fantasyApiData = {
	url: 'discover/movie',
	params: { with_genres: 14 },
	reduxAction: setGenreData,
	label: 'fantasy',
};
const historyApiData = {
	url: 'discover/movie',
	params: { with_genres: 36 },
	reduxAction: setGenreData,
	label: 'history',
};

const horrorApiData = {
	url: 'discover/movie',
	params: { with_genres: 27 },
	reduxAction: setGenreData,
	label: 'horror',
};

const musicApiData = {
	url: 'discover/movie',
	params: { with_genres: 10402 },
	reduxAction: setGenreData,
	label: 'music',
};

const mysteryApiData = {
	url: 'discover/movie',
	params: { with_genres: 9648 },
	reduxAction: setGenreData,
	label: 'mystery',
};
const romanceApiData = {
	url: 'discover/movie',
	params: { with_genres: 10749 },
	reduxAction: setGenreData,
	label: 'romance',
};
const scienceFictionApiData = {
	url: 'discover/movie',
	params: { with_genres: 878 },
	reduxAction: setGenreData,
	label: 'scienceFiction',
};
const tvMovieApiData = {
	url: 'discover/movie',
	params: { with_genres: 10770 },
	reduxAction: setGenreData,
	label: 'tvMovie',
};
const thrillerApiData = {
	url: 'discover/movie',
	params: { with_genres: 53 },
	reduxAction: setGenreData,
	label: 'thriller',
};
const warApiData = {
	url: 'discover/movie',
	params: { with_genres: 10752 },
	reduxAction: setGenreData,
	label: 'war',
};
const westernApiData = {
	url: 'discover/movie',
	params: { with_genres: 37 },
	reduxAction: setGenreData,
	label: 'western',
};
export const filmCategoryArr = [
	{ label: 'Popular Movies', apiData: popularApi, objName: 'popular' },
	{ label: 'Action', apiData: apiData, objName: 'action' },
	{ label: 'Adventure', apiData: adventureApiData, objName: 'adventure' },
	{ label: 'Animation', apiData: animationApiData, objName: 'animation' },
	{ label: 'Comedy', apiData: comedyApiData, objName: 'comedy' },
	{ label: 'Crime', apiData: crimeApiData, objName: 'crime' },
	{ label: 'Documentary', apiData: documentaryApiData, objName: 'documentary' },
	{ label: 'Drama', apiData: dramaApiData, objName: 'drama' },
	{ label: 'Family', apiData: familyApiData, objName: 'family' },
	{ label: 'Fantasy', apiData: fantasyApiData, objName: 'fantasy' },
	{ label: 'History', apiData: historyApiData, objName: 'history' },
	{ label: 'Horror', apiData: horrorApiData, objName: 'horror' },
	{ label: 'Music', apiData: musicApiData, objName: 'music' },
	{ label: 'Mystery', apiData: mysteryApiData, objName: 'mystery' },
	{ label: 'Romance', apiData: romanceApiData, objName: 'romance' },
	{
		label: 'Science Fiction',
		apiData: scienceFictionApiData,
		objName: 'scienceFiction',
	},
	{ label: 'TV Movie', apiData: tvMovieApiData, objName: 'tvMovie' },
	{ label: 'Thriller', apiData: thrillerApiData, objName: 'thriller' },
	{ label: 'War', apiData: warApiData, objName: 'war' },
	{ label: 'Western', apiData: westernApiData, objName: 'western' },
];
