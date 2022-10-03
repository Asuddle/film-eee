import React, { Suspense } from 'react';

import { CircularProgress } from '@mui/material';

//Wrapper for Adding Suspense incase of lazy loading
function SuspenseWrapper({ children }) {
	return <Suspense fallback={<CircularProgress />}>{children}</Suspense>;
}

export default SuspenseWrapper;
