import '../components/right-sidebar.scss';

import { ReactComponent as Heart } from '../design/icons/heart.svg';
import React from 'react';
import star from '../design/icons/star.png';

function FilmCard({ data }) {
	const { overview, original_title, poster_path, vote_average, vote_count } =
		data;

	// slicing a overview data to less then or equal to 110 char.
	const sliceOverview = () => {
		return overview.length > 120
			? `${overview.substring(0, 110)}...`
			: overview;
	};

	return (
		<div className='film-card-wrapper'>
			<div className='image-wrapper'>
				<img
					lazy='true'
					src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
					alt='das'
				/>
				<div className='rating'>
					<img src={star} alt='rate' />
					<p>{vote_average}</p>
				</div>
				<div className='love-rating'>
					<Heart />
					<p>{vote_count}</p>
				</div>
			</div>
			<div className='film-description'>
				<p className='film-heading'>{original_title}</p>
				<p className='film-plot'>{sliceOverview()}</p>
			</div>
		</div>
	);
}

export default FilmCard;
