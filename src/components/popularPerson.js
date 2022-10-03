import { moviesData, setActor } from '../reducers/movies';

import ActorCardCompnent from './actorCard';
import { CircularProgress } from '@mui/material';
import React from 'react';
import useAxios from '../hooks/useAxios';
import { useSelector } from 'react-redux';

const apiData = {
	url: 'person/popular',
	reduxAction: setActor,
};

function PopularPerson() {
	const { actor } = useSelector(moviesData);

	let actorArr = [];

	const { loading } = useAxios(apiData);

	// Changing genre data to length of 4
	if (actor.length > 0) {
		actorArr = actor.slice(0, 3);
	}

	if (loading) {
		return <CircularProgress />;
	}

	return (
		<>
			<p className='heading'>Popular Actor</p>
			{actorArr.map((item) => (
				<ActorCardCompnent key={item.id} data={item} />
			))}
		</>
	);
}

export default PopularPerson;
