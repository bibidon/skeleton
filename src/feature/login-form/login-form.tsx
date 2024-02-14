'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { signIn } from 'next-auth/react';

import { Button } from '@mui/material';

import { useForm } from 'react-hook-form';

import Input from '@/shared/components/input';
import Password from '@/shared/components/password';
import { PASSWORD_CONFIG, USERNAME_CONFIG } from '@/shared/configs/login-form';
import { LoginFormValue } from '@/shared/models/login-form';
import classes from './login-form.module.css';

export default function LoginForm(): JSX.Element {
    const router: AppRouterInstance = useRouter();
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
    const onSubmit: (formData: LoginFormValue) => void = async (formData: LoginFormValue): Promise<void> => {
        const res = await signIn('credentials', {
            ...formData,
            redirect: false
        });
        console.log(res);

        router.push('/signup');
    };

    useEffect((): void => {
        setFocus('username');
    }, [setFocus]);


    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

            <Input control={control} errors={errors} className={classes.input} {...USERNAME_CONFIG} />

            <Password control={control} errors={errors} className={classes.input} {...PASSWORD_CONFIG} />

            <Button type="submit" variant="contained" disabled={!isDirty || !isValid}>Login</Button>

        </form>
    );
}
