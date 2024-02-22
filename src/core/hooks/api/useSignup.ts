'use client';

import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@/core/hooks/useStore';
import { applicationActions } from '@/core/store/application';
import signupAction from '@/core/actions/signup';
import { SignupFormValue } from '@/shared/models/signup-form';
import { notificationActions } from '@/core/store/notification';
import { NotificationType } from '@/shared/configs/notification';
import { ServerActionError } from '@/shared/models/error';

export default function useSignup() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const signup: (formValue: SignupFormValue) => Promise<void> = async (formValue: SignupFormValue): Promise<void> => {
        dispatch(applicationActions.setIsLoading(true));

        try {
            await signupAction(formValue);

            dispatch(notificationActions.add({
                type: NotificationType.SUCCESS,
                message: 'The user has been created successfully'
            }));

            router.push('/login');

        } catch (error: unknown) {
            dispatch(notificationActions.add({
                type: NotificationType.ERROR,
                message: (<ServerActionError>error).message
            }));
        } finally {
            dispatch(applicationActions.setIsLoading(false));
        }
    }

    return {
      signup
    };
}
