'use client';

import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Input from '@/shared/components/input';
import Password from '@/shared/components/password';
import useLogin from '@/core/hooks/api/useLogin';
import useGoogleLogin from '@/core/hooks/api/useGoogleLogin';
import { RootState } from '@/core/store';
import { PASSWORD_CONFIG_LOGIN, USERNAME_CONFIG } from '@/shared/configs/auth-form';
import { LoginFormValue } from '@/shared/models/login-form';

const Form = styled('form')(() => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
}));

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
        <Form onSubmit={handleSubmit(login)}>

            <Input control={control} errors={errors} styles={{height: '70px'}} {...USERNAME_CONFIG} />

            <Password control={control} errors={errors} styles={{height: '70px'}} {...PASSWORD_CONFIG_LOGIN} />

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

            <Link href="/signup" underline="hover" sx={{mt: 2}}>Don&apos;t have an account?</Link>

        </Form>
    );
}
