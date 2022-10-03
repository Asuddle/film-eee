import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<ReduxProvider store={store}>
		<App />
	</ReduxProvider>,
	// </React.StrictMode>
);

reportWebVitals();
