'use client';

import { signIn, SignInResponse } from 'next-auth/react';

import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@/core/hooks/useStore';
import { applicationActions } from '@/core/store/application';
import { notificationActions } from '@/core/store/notification';
import { NotificationType } from '@/shared/configs/notification';
import { LoginFormValue } from '@/shared/models/login-form';

export default function useLogin() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const login: (formValue: LoginFormValue) => Promise<void> = async (formValue: LoginFormValue): Promise<void> => {
        dispatch(applicationActions.setIsLoading(true));

        const res: SignInResponse | undefined = await signIn('credentials', {
            ...formValue,
            redirect: false
        });
        const hasError: boolean = !!(res && res.error);

        dispatch(notificationActions.add({
            type: hasError ? NotificationType.ERROR : NotificationType.SUCCESS,
            message: hasError ? res!.error! : 'Logged in successfully'
        }));

        dispatch(applicationActions.setIsLoading(false));

        if (!hasError) {
            router.push('/');
        }
    }

    return {
        login
    }
}
