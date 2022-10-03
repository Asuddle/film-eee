import { CircularProgress, Grid } from '@mui/material';
import React, { useState } from 'react';

import VisibilitySensor from 'react-visibility-sensor';
import styles from './styles/home.module.scss';
import useAxios from '../../hooks/useAxios';

function FilmsList({ apiData, objName = 'popular', data }) {
	const [isVisible, setIsVisible] = useState(false);
	//respective api calls for multiple genre movie data
	const { loading } = useAxios({
		...apiData,
		...{ isApiCall: isVisible },
	});

	let arr = data[objName];

	if (isVisible && arr.length === 0) {
		if (loading) {
			return <CircularProgress />;
		}
	}

	// run the function when respective component inside visibiility sensor is shown on screeen
	const onVisibilityChange = (isVis) => {
		if (isVis) {
			setIsVisible(true);
		}
	};

	return (
		<VisibilitySensor
			delayedCall
			active={arr.length === 0}
			onChange={onVisibilityChange}
			partialVisibility={true}
			intervalDelay={500}
		>
			<Grid
				container
				spacing={3}
				className={styles.filmList}
				justifyContent='center'
			>
				<p>a</p>
				{arr.length > 0 &&
					arr.map(
						(item) =>
							item.poster_path !== null && (
								<Grid key={item.poster_path} item className={styles.film}>
									<img
										lazy='true'
										src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
										alt='poster-path'
										className={styles.filmImg}
									/>
								</Grid>
							),
					)}
			</Grid>
		</VisibilitySensor>
	);
}

export default FilmsList;
