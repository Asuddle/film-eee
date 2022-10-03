import { Grid } from '@mui/material';
import React from 'react';
import styles from './styles/home.module.scss';

function SearchData({ data }) {
	//Showing searched data
	return (
		<Grid
			container
			spacing={3}
			className={styles.filmList}
			justifyContent='center'
		>
			{data.map(
				(item) =>
					item.poster_path !== null && (
						<Grid key={item.poster_path} item className={styles.film}>
							<img
								src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
								alt='poster-path'
								className={styles.filmImg}
							/>
						</Grid>
					),
			)}
		</Grid>
	);
}

export default SearchData;
