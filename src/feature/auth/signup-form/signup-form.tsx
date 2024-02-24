'use client';

import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { Button } from '@mui/material';

import Input from '@/shared/components/input';
import Password from '@/shared/components/password';
import Select from '@/shared/components/select';
import useSignup from '@/core/hooks/api/useSignup';
import { RootState } from '@/core/store';
import { EMAIL_CONFIG, NAME_CONFIG, PASSWORD_CONFIG_SIGNUP, ROLE_CONFIG_SIGNUP } from '@/shared/configs/auth-form';
import { Role } from '@/shared/configs/role';
import { SignupFormValue } from '@/shared/models/signup-form';
import classes from './signup-form.module.css';

export default function SignupForm() {
    const isLoading: boolean = useSelector((state: RootState) => state.application.isLoading);
    const {
        control,
        handleSubmit,
        formState: {errors, isDirty, isValid},
        setFocus
    } = useForm<SignupFormValue>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            role: Role.USER
        },
        mode: 'onChange'
    });
    const {signup} = useSignup();

    useEffect((): void => {
        setFocus('name');
    }, [setFocus]);

    return (
        <form className={classes.form} onSubmit={handleSubmit(signup)}>

            <Input control={control} errors={errors} className={classes.input} {...NAME_CONFIG} />

            <Input control={control} errors={errors} className={classes.input} {...EMAIL_CONFIG} />

            <Password control={control} errors={errors} className={classes.input} {...PASSWORD_CONFIG_SIGNUP} />

            <Select control={control} errors={errors} className={classes.select} {...ROLE_CONFIG_SIGNUP} />

            <Button type="submit" variant="contained" disabled={!isDirty || !isValid || isLoading}>Create</Button>

        </form>
    );
}
