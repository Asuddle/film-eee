import { ReactComponent as Favourite } from './design/icons/favourite.svg';
import { ReactComponent as Home } from './design/icons/home.svg';
import { ReactComponent as Letter } from './design/icons/letter.svg';
import { ReactComponent as Live } from './design/icons/live.svg';
import { ReactComponent as Playlist } from './design/icons/playlist.svg';
import { ReactComponent as Purchase } from './design/icons/purchase.svg';
import { ReactComponent as Reminder } from './design/icons/reminder.svg';
import { ReactComponent as Setting } from './design/icons/setting.svg';

export const navigationArr = [
	{
		name: 'Menu',
		children: [
			{ label: 'Home', icon: <Home /> },
			{ label: 'Favorite', icon: <Favourite /> },
			{ label: 'Purchase', icon: <Purchase /> },
			{ label: 'Reminder', icon: <Reminder /> },
		],
	},
	{
		name: 'Other',
		children: [
			{ label: 'Playlist', icon: <Playlist /> },
			{ label: 'Live', icon: <Live /> },
			{ label: 'Bookmarks', icon: <Letter /> },
			{ label: 'Settings', icon: <Setting /> },
		],
	},
];
