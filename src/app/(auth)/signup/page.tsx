import type { Metadata } from 'next';

import SignupForm from '@/feature/auth/signup-form';

export const metadata: Metadata = {
    title: 'Skeleton Signup',
    description: 'Skeleton app signup page'
};

export default function Signup() {
    return (
        <SignupForm />
    );
}