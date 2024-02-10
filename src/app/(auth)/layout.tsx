import { Card } from '@mui/material';

import classes from './layout.module.css';

export default function AuthLayout({children}: Readonly<{ children: React.ReactNode; }>): JSX.Element {
    return (
        <div className={classes['auth-layout-container']}>
            <Card className={classes.card}>
                {children}
            </Card>
            <div className={classes['card-background']}></div>
        </div>
    );
}
