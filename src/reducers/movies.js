import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	discover: [],
	genres: [],
	actor: [],
	searchedData: [],
	genreData: {
		popular: [],
		action: [],
		adventure: [],
		animation: [],
		comedy: [],
		crime: [],
		documentary: [],
		drama: [],
		family: [],
		fantasy: [],
		history: [],
		horror: [],
		music: [],
		mystery: [],
		romance: [],
		scienceFiction: [],
		tvMovie: [],
		thriller: [],
		war: [],
		western: [],
	},
};

export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		//setting discover movies data
		setDiscoverMovies: (state, action) => {
			state.discover = action.payload;
		},

		//setting popular movies data
		setPopularMovies: (state, action) => {
			state.popular = action.payload;
		},
		//setting movies data of multiple genre
		setGenreData: (state, action) => {
			const { data, label } = action.payload;
			state.genreData = { ...state.genreData, ...{ [label]: data } };
		},
		//setting search data
		setSearchData: (state, action) => {
			state.searchedData = action.payload;
		},
		// setting all genre
		setGenre: (state, action) => {
			state.genres = action.payload;
		},
		//setting actor data
		setActor: (state, action) => {
			state.actor = action.payload;
		},
	},
});

export const moviesData = (state) => state.movies;
export const genreData = (state) => state.movies.genreData;

export const {
	setDiscoverMovies,
	setPopularMovies,
	setGenre,
	setActor,
	setGenreData,
	setSearchData,
} = moviesSlice.actions;

export default moviesSlice.reducer;
