import './container.scss';

import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { navigationArr } from '../nav';

export default function LeftSideBar() {
	const [selected, setSelected] = React.useState('Home');

	// changing the navigation on click (For now just adding the style)
	const handleChange = (val) => {
		setSelected(val);
	};

	return (
		<div className='left-bar-wrapper'>
			<Drawer
				classes={{
					paper: 'drawer-paper',
				}}
				variant='permanent'
				anchor='left'
			>
				<p className='logo'>Fil-mee</p>
				{/* mapping through the navigation array data */}
				{navigationArr.map((item) => (
					<div key={item.name}>
						{/* Heading of the Navigation */}
						<p className='left-menu-heading'>{item.name}</p>
						{/* navigation children */}
						{item.children.map((it) => (
							<ListItem key={it.label} disablePadding>
								<ListItemButton
									className={
										selected === it.label ? 'selected-option' : 'other-option'
									}
									onClick={() => handleChange(it.label)}
								>
									<ListItemIcon>{it.icon}</ListItemIcon>
									<ListItemText primary={it.label} />
								</ListItemButton>
							</ListItem>
						))}
					</div>
				))}
			</Drawer>
		</div>
	);
}
