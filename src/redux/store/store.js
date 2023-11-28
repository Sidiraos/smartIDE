import { configureStore } from '@reduxjs/toolkit';
import codeUpdater from '../slices/codeUpdater';
import updateIndexSlice from '../slices/updateIndex';
import toggleSlice from '../slices/toggleSlice';

export const store = configureStore({
	reducer: {
		codeUpdater,
		updateIndexSlice,
		toggleSlice,
	},
});
