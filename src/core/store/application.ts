import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Application } from '@/shared/models/application';

const initialState: Application = {
    isLoading: false
};

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        setIsLoading(state: Application, action: PayloadAction<boolean>): void {
            state.isLoading = action.payload;
        }
    }
});

export const applicationActions = applicationSlice.actions;
export default applicationSlice.reducer;
