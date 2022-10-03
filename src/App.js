import HomeComponent from './module/Home';
import Layout from './container/Layout';
import { setGenre } from './reducers/movies';
import useAxios from './hooks/useAxios';

function App() {
	// getting genre array to be used in discover movie UI
	const apiData = {
		url: '/genre/movie/list',
		reduxAction: setGenre,
		responseObj: 'genres',
	};
	useAxios(apiData);

	return (
		<div>
			<Layout>
				<HomeComponent />
			</Layout>
		</div>
	);
}

export default App;
