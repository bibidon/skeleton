'use client';

import type { RootState } from '@/core/store';
import { useAppSelector } from '@/core/store/hooks';
import { NotificationItem } from '@/shared/models/notification';

export default function Notification(): JSX.Element | null {
    const notifications: Array<NotificationItem> = useAppSelector(
        (state: RootState) => state.notification.items
    );
    let content: JSX.Element | null = null;

    if (notifications.length) {
        content = (
            <div>
                {notifications.map((notification: NotificationItem, index: number) => (
                    <div key={index}>
                        <p>{notification.type}</p>
                        <p>{notification.message}</p>
                    </div>
                ))}
            </div>
        );
    }

    return (
        content
    );
};
