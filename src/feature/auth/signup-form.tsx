'use client';

import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import Input from '@/shared/components/input';
import Password from '@/shared/components/password';
import Select from '@/shared/components/select';
import useSignup from '@/core/hooks/api/useSignup';
import { RootState } from '@/core/store';
import { EMAIL_CONFIG, NAME_CONFIG, PASSWORD_CONFIG_SIGNUP, ROLE_CONFIG_SIGNUP } from '@/shared/configs/auth-form';
import { Role } from '@/shared/configs/role';
import { SignupFormValue } from '@/shared/models/signup-form';

const Form = styled('form')(() => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
}));

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
        <Form onSubmit={handleSubmit(signup)}>

            <Input control={control} errors={errors} styles={{height: '70px'}} {...NAME_CONFIG} />

            <Input control={control} errors={errors} styles={{height: '70px'}} {...EMAIL_CONFIG} />

            <Password control={control} errors={errors} styles={{height: '70px'}} {...PASSWORD_CONFIG_SIGNUP} />

            <Select control={control} errors={errors} styles={{height: '70px'}} {...ROLE_CONFIG_SIGNUP} />

            <Button type="submit" variant="contained" disabled={!isDirty || !isValid || isLoading}>Create</Button>

            <Link href="/signin" underline="hover" sx={{mt: 2}}>Already have an account?</Link>

        </Form>
    );
}
