import { configureStore } from '@reduxjs/toolkit';

import notificationReducer from './notification';

export const makeStore = () => {
    return configureStore({
        reducer: {
            notification: notificationReducer
        }
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
