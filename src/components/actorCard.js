import '../components/right-sidebar.scss';

import { Avatar } from '@mui/material';
import React from 'react';

function ActorCardCompnent({ data }) {
	const { name, profile_path, popularity } = data;
	return (
		<div className='actor-card-wrapper'>
			<div className='actor-avatar'>
				<Avatar
					alt='profile'
					src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
				/>

				<div className='actor-info'>
					<p className='actor-name'>{name}</p>
					<p className='actor-country'>America</p>
				</div>
			</div>
			<div className='actor-followers'>
				{popularity} <br />
				popularity
			</div>
		</div>
	);
}

export default ActorCardCompnent;
