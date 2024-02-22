'use client';

import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { Button } from '@mui/material';

import Input from '@/shared/components/input';
import Password from '@/shared/components/password';
import useLogin from '@/core/hooks/api/useLogin';
import { RootState } from '@/core/store';
import { PASSWORD_CONFIG_LOGIN, USERNAME_CONFIG } from '@/shared/configs/auth-form';
import { LoginFormValue } from '@/shared/models/login-form';
import classes from './login-form.module.css';

export default function LoginForm() {
    const isLoading: boolean = useSelector((state: RootState) => state.application.isLoading);
    const {
        control,
        handleSubmit,
        formState: {errors, isDirty, isValid},
        setFocus
    } = useForm<LoginFormValue>({
        defaultValues: {
            username: '',
            password: ''
        },
        mode: 'onChange'
    });
    const {login} = useLogin();

    useEffect((): void => {
        setFocus('username');
    }, [setFocus]);


    return (
        <form className={classes.form} onSubmit={handleSubmit(login)}>

            <Input control={control} errors={errors} className={classes.input} {...USERNAME_CONFIG} />

            <Password control={control} errors={errors} className={classes.input} {...PASSWORD_CONFIG_LOGIN} />

            <Button type="submit" variant="contained" disabled={!isDirty || !isValid || isLoading}>Login</Button>

        </form>
    );
}
