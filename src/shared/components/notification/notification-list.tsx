'use client';

import { JSX } from 'react';

import NotificationItem from './notification-item';
import { useAppSelector } from '@/core/hooks/useStore';
import type { RootState } from '@/core/store';
import { NotificationItem as Item } from '@/shared/models/notification';
import classes from './notification-list.module.css';

export default function NotificationList() {
    const notifications: Array<Item> = useAppSelector(
        (state: RootState) => state.notification.items
    );
    let content: JSX.Element | null = null;

    if (notifications.length) {
        content = (
            <div className={classes["notification-list"]}>
                {notifications.map((item: Item) => (
                    <NotificationItem key={item.uuid} {...item} />
                ))}
            </div>
        );
    }

    return (
        content
    );
}
