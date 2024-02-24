import type { Metadata } from 'next';

import LoginForm from '@/feature/auth/login-form';

export const metadata: Metadata = {
    title: 'Skeleton Login',
    description: 'Skeleton app login page'
};

export default async function Login(): Promise<JSX.Element> {
    return (
        <LoginForm />
    );
}
