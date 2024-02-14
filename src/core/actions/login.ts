'use server';

import { signIn } from 'next-auth/react';

export async function login(formData: FormData): Promise<any> {
    const res = await signIn('credentials', {
        ...formData,
        redirect: false
    });
}
