'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { signIn, SignInResponse } from 'next-auth/react';

import { useForm } from 'react-hook-form';

import { Button } from '@mui/material';

import Input from '@/shared/components/input';
import Password from '@/shared/components/password';
import { EMAIL_CONFIG, NAME_CONFIG, PASSWORD_CONFIG_SIGNUP } from '@/shared/configs/auth-form';
import { SignupFormValue } from '@/shared/models/signup-form';
import classes from './signup-form.module.css';

export default function SignupForm() {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: {errors, isDirty, isValid},
        setFocus
    } = useForm<SignupFormValue>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        mode: 'onChange'
    });
    const onSubmit: (formData: SignupFormValue) => void = async (formData: SignupFormValue): Promise<void> => {
        const res: Response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            const res: SignInResponse | undefined = await signIn('credentials', {
                username: formData.email,
                password: formData.password,
                redirect: false
            });

            if (res && res.ok) {
                router.push('/');
            }
        }
    };

    useEffect((): void => {
        setFocus('name');
    }, [setFocus]);

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

            <Input control={control} errors={errors} className={classes.input} {...NAME_CONFIG} />

            <Input control={control} errors={errors} className={classes.input} {...EMAIL_CONFIG} />

            <Password control={control} errors={errors} className={classes.input} {...PASSWORD_CONFIG_SIGNUP} />

            <Button type="submit" variant="contained" disabled={!isDirty || !isValid}>Create</Button>

        </form>
    );
}
