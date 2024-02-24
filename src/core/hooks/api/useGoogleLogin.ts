'use client';

import { signIn } from 'next-auth/react';

import { useAppDispatch } from '@/core/hooks/useStore';
import { applicationActions } from '@/core/store/application';
import { DEFAULT_LOGIN_REDIRECT } from '@/shared/configs/routes';

export default function useGoogleLogin() {
    const dispatch = useAppDispatch();

    const login: () => void = () => {
        dispatch(applicationActions.setIsLoading(true));

        signIn(
            'google',
            {
                callbackUrl: DEFAULT_LOGIN_REDIRECT
            }
        )
    };

    return {
        googleLogin: login
    }
}
