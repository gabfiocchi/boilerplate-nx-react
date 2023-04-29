import { configureStore } from '@reduxjs/toolkit';

import { USER_FEATURE_KEY, userReducer } from '../user/user.slice';


export const store = configureStore({
    reducer: { [USER_FEATURE_KEY]: userReducer },
    // Additional middleware can be passed to this array
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
    // Optional Redux store enhancers
    enhancers: [],
});

// export default store