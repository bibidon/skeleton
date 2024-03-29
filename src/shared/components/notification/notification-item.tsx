'use client';

import { useEffect } from 'react';

import { PayloadAction } from '@reduxjs/toolkit';

import { Alert } from '@mui/material';

import { useAppDispatch } from '@/core/hooks/useStore';
import { notificationActions } from '@/core/store/notification';
import { NotificationItem } from '@/shared/models/notification';

export default function NotificationItem({uuid, type, message}: NotificationItem) {
    const dispatch = useAppDispatch();
    const onClose: () => PayloadAction<string> = (): PayloadAction<string> => dispatch(notificationActions.remove(uuid));

    useEffect(() => {
        const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
            dispatch(notificationActions.remove(uuid));
        }, 3000);

        return () => {
            clearTimeout(timeout);
        }
    }, [dispatch, uuid]);

    return (
        <Alert
            severity={type}
            variant="filled"
            onClose={onClose}
            sx={{mb: '10px'}}>
            {message}
        </Alert>
    );
};
