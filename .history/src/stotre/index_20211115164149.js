import { configureStore } from '@reduxjs/toolkit';

import userReduser from './slices/userSlice';

const Store = configureStore({
    reduser: {
        user: userReduser,
    },
});

export default Store;
