import { useEffect, useState } from 'react';

import axios from 'axios';
import { useDispatch } from 'react-redux';

const useAxios = ({
	url,
	params = {},
	reduxAction = false,
	isApiCall = true,
	responseObj = 'results',
	label = '',
	query = '',
}) => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	const getData = async (url, parameters) => {
		try {
			const result = await axios({
				url: `${process.env.REACT_APP_API_URL}/${url}`,
				params: {
					api_key: process.env.REACT_APP_MOVIE_TMDB_API_KEY,
					...parameters,
				},
			});
			if (label) {
				dispatch(reduxAction({ data: result.data[responseObj], label }));
			} else {
				dispatch(reduxAction(result.data[responseObj]));
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (isApiCall) {
			getData(url, params);
		}
	}, [isApiCall, query]);

	return { loading };
};

export default useAxios;
