import './container.scss';

import React, { useState } from 'react';

import { Button } from '@mui/material';
import LeftSideBar from './Sidebar';
import { ReactComponent as More } from '../design/icons/more.svg';
import RightSidebar from './RightSidebar';

export default function Layout({ children }) {
	const [open, setOpen] = useState(true);

	// toggle right sidebar
	const handleDrawer = () => {
		setOpen(!open);
	};

	return (
		<div className='layout'>
			<LeftSideBar />
			<RightSidebar open={open} />
			<div
				className='main-screen'
				style={{ marginRight: open ? '340px' : '0px' }}
			>
				<Button onClick={handleDrawer} className='more-button'>
					<More />
				</Button>
				{children}
			</div>
		</div>
	);
}
