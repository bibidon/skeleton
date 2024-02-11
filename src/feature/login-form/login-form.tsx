'use client';

import { Button } from '@mui/material';

import { SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/shared/components/input';
import Password from '@/shared/components/password';
import { PASSWORD_CONFIG, USERNAME_CONFIG } from '@/shared/configs/login-form';
import { LoginFormValue } from '@/shared/models/login-form';
import classes from './login-form.module.css';

export default function LoginForm(): JSX.Element {
    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm<LoginFormValue>({
        defaultValues: {
            username: '',
            password: ''
        },
        mode: 'all'
    });

    const onSubmit: SubmitHandler<LoginFormValue> = (data: LoginFormValue): void => {
        console.log(data);
    };

    return (
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>

            <Input control={control} errors={errors} className={classes.input} {...USERNAME_CONFIG} />

            <Password control={control} errors={errors} className={classes.input} {...PASSWORD_CONFIG} />

            <Button type="submit" variant="contained">Login</Button>

        </form>
    );
}
