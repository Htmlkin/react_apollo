import { configureStore } from '@reduxjs/toolkit';

import userReduser from './slices/userSlice';

const store = configureStore({
    reduser: {
        user: userReduser,
    },
});

export default store;
