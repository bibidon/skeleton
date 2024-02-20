'use client';

import { JSX } from 'react';

import { LinearProgress } from '@mui/material';

import { useAppSelector } from '@/core/hooks/useStore';
import { RootState } from '@/core/store';
import classes from './spinner.module.css';

export default function Spinner() {
    const isLoading: boolean = useAppSelector((state: RootState) => state.application.isLoading);
    let content: JSX.Element | null = null;

    if (isLoading) {
        content = (<LinearProgress className={classes.spinner} variant="indeterminate" />);
    }

    return (
        content
    );
}
