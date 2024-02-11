import type { Metadata } from 'next';

import { CardContent } from '@mui/material';

import LoginForm from '@/feature/login-form/login-form';
import classes from './page.module.css';

export const metadata: Metadata = {
    title: 'Skeleton Login',
    description: 'Skeleton app login page'
};

export default function Login(): JSX.Element {
    return (
        <CardContent className={classes["card-content"]}>
            <LoginForm />
        </CardContent>
    );
}
