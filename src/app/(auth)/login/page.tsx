import type { Metadata } from 'next';

import { Button, CardActions, CardContent, TextField } from '@mui/material';

import Password from '@/shared/components/password/password';
import classes from './page.module.css';

export const metadata: Metadata = {
    title: 'Skeleton Login',
    description: 'Skeleton app login page'
};

export default function Login(): JSX.Element {
    return (
        <>
            <CardContent>
                <form className={classes.form} noValidate>
                    <TextField type="email" label="Email" size="small" placeholder="Please enter an email" required />
                    <Password />
                </form>
            </CardContent>
            <CardActions className={classes["card-actions"]}>
                <Button variant="contained">Login</Button>
            </CardActions>
        </>
    );
}
