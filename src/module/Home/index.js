import React from 'react';
import SearchData from './SearchData';
import SuspenseWrapper from '../../components/suspenceWrapper';
import { filmCategoryArr } from './filmCategoryArr';
import { moviesData } from '../../reducers/movies';
import styles from './styles/home.module.scss';
import { useSelector } from 'react-redux';

const FilmsList = React.lazy(() => import('./FilmsList'));
const DiscoverFilm = React.lazy(() => import('./DiscoverFilm'));

function HomeComponent() {
	const data = useSelector(moviesData);
	const genreData = data.genreData;
	return (
		<div className={styles.homeWrapper}>
			{/* Searched Data (if it is), shown on top  */}
			{data.searchedData.length > 0 && (
				<>
					<p className={styles.genreHeading}>Searched Data</p>
					<SuspenseWrapper>
						<SearchData data={data.searchedData} />
					</SuspenseWrapper>
				</>
			)}
			{/* Showing Discover Films Card */}
			<SuspenseWrapper>
				<DiscoverFilm data={data} />
			</SuspenseWrapper>

			{/* Showing Category Data */}
			{data.discover.length > 0 && (
				<>
					{filmCategoryArr.map((item) => (
						<div key={item.objName}>
							<p className={styles.genreHeading}>{item.label}</p>
							<SuspenseWrapper>
								<FilmsList
									data={genreData}
									apiData={item.apiData}
									objName={item.objName}
								/>
							</SuspenseWrapper>
						</div>
					))}
				</>
			)}
		</div>
	);
}

export default HomeComponent;
