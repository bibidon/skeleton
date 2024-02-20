'use client';

import { Alert } from '@mui/material';

import { useAppDispatch } from '@/core/store/hooks';
import { notificationActions } from '@/core/store/notification';
import { NotificationItem } from '@/shared/models/notification';
import classes from './notification-item.module.css';

export default function NotificationItem({uuid, type, message}: NotificationItem) {
    const dispatch = useAppDispatch();
    const onClose: (event: React.SyntheticEvent | Event, reason: string | null, id: string) => void = (
        event: React.SyntheticEvent | Event,
        reason: string | null,
        id: string
    ): void => {
        dispatch(notificationActions.remove(id));
    };

    return (
        <Alert
            className={classes['notification-item']}
            severity={type}
            variant="filled"
            onClose={(event: React.SyntheticEvent | Event, reason: string | null = null) =>
                onClose(event, reason, uuid)}>
            {message}
        </Alert>
    );
};
