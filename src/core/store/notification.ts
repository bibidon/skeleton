import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Notification, NotificationItem } from '@/shared/models/notification';

const initialState: Notification = {
    items: []
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        add(state: Notification, action: PayloadAction<NotificationItem>): void {
            state.items.push(action.payload);
        }
    }
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;
