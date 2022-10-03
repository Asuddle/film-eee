import { CircularProgress, Grid } from '@mui/material';

import React from 'react';
import { setDiscoverMovies } from '../../reducers/movies';
import star from '../../design/icons/star.png';
import styles from './styles/home.module.scss';
import useAxios from '../../hooks/useAxios';

function DiscoverFilm({ data }) {
	const apiData = {
		url: 'discover/movie',
		reduxAction: setDiscoverMovies,
	};
	//calling discover movie api
	const { loading } = useAxios(apiData);
	const { discover, genres } = data;

	//getting genre array and transforming it into comma seperated string
	const handleGenre = (arr) => {
		let str = '';
		if (genres.length > 0) {
			arr.forEach((item) => {
				str = str + ' , ' + genres.find((x) => x.id === item).name;
			});
		}
		return str.replace(',', '');
	};

	// showing loader on data load
	if (loading) {
		return <CircularProgress className={styles.loader} />;
	}

	return (
		<div>
			<p className={styles.discoverHeading}>Discovers</p>
			<Grid
				container
				className={styles.popularMovieContainer}
				justifyContent='center'
				spacing={1}
			>
				{discover.slice(0, 6).map((item, index) => (
					<Grid item key={item.backdrop_path} className={styles.popularMovie}>
						<img
							lazy='true'
							src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
							alt='poster-path'
						/>

						<p className={styles.popularMovieTitle}>{item.title}</p>
						<p className={styles.popularMovieGenre}>
							{handleGenre(item.genre_ids)}
						</p>
						<div className={styles.ratingIcon}>
							<img src={star} alt='rating' />
							<p className={styles.rating}>{item.vote_average}</p>
						</div>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default DiscoverFilm;
