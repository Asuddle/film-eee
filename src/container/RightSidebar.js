import '../components/right-sidebar.scss';

import { Avatar, Drawer } from '@mui/material';
import React, { useState } from 'react';

import FilterComponent from '../components/filter';
import { ReactComponent as Location } from '../design/icons/location.svg';
import { ReactComponent as Notification } from '../design/icons/notification.svg';
import PopularFilms from '../components/popularFilms';
import PopularPerson from '../components/popularPerson';
import SearchInputComponent from '../components/search';
import person from '../design/images/avatar.jpg';

function RightSidebar({ open }) {
	const [selected, setSelected] = useState({ name: '', query: '' });
	const [input, setInput] = useState('');

	// Search field input change
	const handleChange = (e) => {
		// When Input is changed , if the selected filter is added it is changed to its empty state
		if (selected.name !== '') {
			setSelected({ name: '', query: '' });
		}
		//scrolling to top

		window.scrollTo({ top: 0, behavior: 'smooth' });
		setInput(e.target.value);
	};

	// Filter Button Change
	const handleClick = (value) => {
		// When Filter button is clicked and input field is added, it is changed to its empty state
		if (input !== '') {
			setInput('');
		}
		//scrolling to top
		window.scrollTo({ top: 0, behavior: 'smooth' });

		setSelected({ name: value.name, query: value.query });
	};

	return (
		<div>
			<Drawer
				className='right-bar-wrapper'
				classes={{
					paper: 'drawer-right-paper',
				}}
				variant='persistent'
				anchor='right'
				open={open}
			>
				<div className='filter-component'>
					<div className='user-info'>
						<Avatar alt='avatar' src={person} />
						<p className='user-name'>John Doe</p>
						<div className='notify-icons'>
							<Location />
							<Notification />
						</div>
					</div>
					<SearchInputComponent handleChange={handleChange} input={input} />
					<FilterComponent handleClick={handleClick} selected={selected} />
				</div>
				<div style={{ overflow: 'auto', padding: '18px', marginRight: '8px' }}>
					<PopularFilms />
					<PopularPerson />
				</div>
			</Drawer>
		</div>
	);
}

export default RightSidebar;
