import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { uuid } from '@/core/services/utilities';
import { Notification, NotificationItem } from '@/shared/models/notification';

const initialState: Notification = {
    items: []
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        add(state: Notification, action: PayloadAction<Omit<NotificationItem, 'uuid'>>): void {
            state.items.push({
                ...action.payload,
                uuid: uuid()
            });
        },
        remove(state: Notification, action: PayloadAction<string>): void {
            const index: number = state.items.findIndex((item: NotificationItem) => item.uuid === action.payload);
            state.items.splice(index, 1);
        }
    }
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;
