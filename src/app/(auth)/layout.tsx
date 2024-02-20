import { Card, CardContent } from '@mui/material';

import classes from './layout.module.css';

export default function AuthLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className={classes["auth-layout-container"]}>
            <div className={classes["card-container"]}>
                <Card className={classes.card}>
                    <CardContent className={classes["card-content"]}>
                        {children}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
