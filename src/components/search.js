import '../components/right-sidebar.scss';

import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';

import { ReactComponent as Search } from '../design/icons/search.svg';
import { setSearchData } from '../reducers/movies';
import useAxios from '../hooks/useAxios';

function SearchInputComponent({ handleChange, input }) {
	const apiData = {
		url: 'search/movie',
		params: { query: input },
		reduxAction: setSearchData,
		isApiCall: input !== '',
		query: input,
	};
	// api for searching input data by api

	useAxios(apiData);

	return (
		<div className='search-wrapper'>
			<TextField
				placeholder='Search'
				value={input}
				onChange={handleChange}
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<Search />
						</InputAdornment>
					),
					classes: {
						root: 'search-field',
					},
				}}
				variant='outlined'
				className='search-input'
				fullWidth
			/>
		</div>
	);
}

export default SearchInputComponent;
