'use client';

import { JSX } from 'react';

import Box from '@mui/material/Box';

import NotificationItem from './notification-item';
import { useAppSelector } from '@/core/hooks/useStore';
import type { RootState } from '@/core/store';
import { NotificationItem as Item } from '@/shared/models/notification';

export default function NotificationList() {
    const notifications: Array<Item> = useAppSelector(
        (state: RootState) => state.notification.items
    );
    let content: JSX.Element | null = null;

    if (notifications.length) {
        content = (
            <Box component="div" sx={{
                position: 'absolute',
                top: 20,
                left: 20,
                zIndex: 10000
            }}>
                {notifications.map((item: Item) => (
                    <NotificationItem key={item.uuid} {...item} />
                ))}
            </Box>
        );
    }

    return (
        content
    );
}
