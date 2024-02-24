'use client';

import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Input from '@/shared/components/input';
import Password from '@/shared/components/password';
import useLogin from '@/core/hooks/api/useLogin';
import useGoogleLogin from '@/core/hooks/api/useGoogleLogin';
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
    const {googleLogin} = useGoogleLogin();

    useEffect((): void => {
        setFocus('username');
    }, [setFocus]);


    return (
        <form className={classes.form} onSubmit={handleSubmit(login)}>

            <Input control={control} errors={errors} className={classes.input} {...USERNAME_CONFIG} />

            <Password control={control} errors={errors} className={classes.input} {...PASSWORD_CONFIG_LOGIN} />

            <Box display="flex">
                <Button
                    type="submit"
                    variant="contained"
                    disabled={!isDirty || !isValid || isLoading}
                    sx={{width: '100%', mr: 1}}>
                    Login
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    disabled={isLoading}
                    sx={{width: '100%', ml: 1}}
                    onClick={googleLogin}>
                    Login with Google
                </Button>
            </Box>

        </form>
    );
}
