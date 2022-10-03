import '../components/right-sidebar.scss';

import React, { useState } from 'react';

import { Button } from '@mui/material';
import { filterArr } from './filterArr';
import { setSearchData } from '../reducers/movies';
import useAxios from '../hooks/useAxios';

function FilterComponent({ selected, handleClick, options = filterArr }) {
	const apiData = {
		url: ['netflix', 'viu'].includes(selected.name)
			? 'discover/tv'
			: 'discover/movie',
		params: selected.query,
		reduxAction: setSearchData,
		isApiCall: selected.name !== '',
		query: selected.name,
	};
	useAxios(apiData);

	return (
		<div className='filter-wrapper'>
			{options.map((item) => (
				<Button
					key={item.name}
					className={
						item.name === selected.name ? 'selected-fiter' : 'filter-button'
					}
					onClick={() => handleClick(item)}
				>
					{item.label}
				</Button>
			))}
		</div>
	);
}

export default FilterComponent;
