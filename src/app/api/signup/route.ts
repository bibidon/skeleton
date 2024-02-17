import bcrypt from 'bcrypt';

import { NextResponse } from 'next/server';

import { createUser, getUserByEmail } from '@/core/db/api';
import { SignupFormValue } from '@/shared/models/signup-form';
import { User } from '@/shared/models/user';

export async function POST(req: Request) {
    const body: SignupFormValue = await req.json();
    const {name, email, password} = body;

    if (!name || !email || !password) {
        return new NextResponse('Missing name, email or password', {status: 400});
    }

    const existingUser: User | undefined = await getUserByEmail(email) as User | undefined;

    if (existingUser) {
        return new NextResponse('User already exists', {status: 400});
    }

    const [user] = await createUser({
        ...body,
        password: await bcrypt.hash(body.password, 10)
    });

    return NextResponse.json(user);
}
