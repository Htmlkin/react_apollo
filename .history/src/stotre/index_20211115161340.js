import { configureStore } from '@reduxjs/toolkit';

import useReduser from './slices/userSlice';

export const store = configureStore({
    reduser: {
        user: useReduser,
    },
});
