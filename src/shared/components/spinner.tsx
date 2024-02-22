'use client';

import { JSX } from 'react';

import { LinearProgress } from '@mui/material';

import { useAppSelector } from '@/core/hooks/useStore';
import { RootState } from '@/core/store';

export default function Spinner() {
    const isLoading: boolean = useAppSelector((state: RootState) => state.application.isLoading);
    let content: JSX.Element | null = null;

    if (isLoading) {
        content = (<LinearProgress
            variant="indeterminate"
            color="warning"
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10000
            }}
        />);
    }

    return (
       content
    );
}
