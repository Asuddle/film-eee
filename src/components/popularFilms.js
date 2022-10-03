import '../components/right-sidebar.scss';

import { moviesData, setGenreData } from '../reducers/movies';

import FilmCard from './filmCard';
import React from 'react';
import useAxios from '../hooks/useAxios';
import { useSelector } from 'react-redux';

const popularApi = {
	url: 'movie/popular',
	reduxAction: setGenreData,
	label: 'popular',
};

function PopularFilms() {
	useAxios(popularApi);
	const {
		genreData: { popular },
	} = useSelector(moviesData);
	let arr = [];
	if (popular.length > 0) {
		arr = popular.slice(0, 3);
	}
	return (
		<>
			<p className='heading'>Popular Movie</p>
			{arr.map((item) => (
				<FilmCard key={item.overview} data={item} />
			))}
		</>
	);
}

export default PopularFilms;
