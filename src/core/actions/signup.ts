'use server';

import bcrypt from 'bcryptjs';

import { createUser, getUserByEmail } from '@/core/db/api';
import { SignupFormValue } from '@/shared/models/signup-form';
import { User } from '@/shared/models/user';

export default async function signup(formData: SignupFormValue) {
    const {name, email, password} = formData;

    if (!name || !email || !password) {
        throw new Error('Missing name, email or password');
    }

    const existingUser: User | undefined = await getUserByEmail(email) as User | undefined;

    if (existingUser) {
        throw new Error('User already exists');
    }

    const [user] = await createUser({
        ...formData,
        password: await bcrypt.hash(password, 10)
    });

    if (!user) {
        throw new Error('The user could not be created');
    }
}
