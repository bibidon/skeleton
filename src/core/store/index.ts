import { configureStore } from '@reduxjs/toolkit';

import notificationReducer from './notification';
import applicationReducer from './application';

export const makeStore = () => {
    return configureStore({
        reducer: {
            application: applicationReducer,
            notification: notificationReducer
        }
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
