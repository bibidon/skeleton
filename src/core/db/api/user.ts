import { eq } from 'drizzle-orm';

import { db } from '@/core/db';
import { user } from '@/core/db/schema';
import { ServerUser, User } from '@/shared/models/user';

export async function getUserByEmail(
    email: string,
    withPassword: boolean = false
): Promise<User | ServerUser | undefined> {
    try {
        return db
            .query
            .user
            .findFirst({
                columns: {
                    id: true,
                    name: true,
                    email: true,
                    emailVerified: true,
                    image: true,
                    role: true,
                    password: withPassword
                },
                where: eq(user.email, email)
            });
    } catch (error) {
        return;
    }
}

export async function getUserById(
    id: string,
    withPassword: boolean = false
): Promise<User | ServerUser | undefined> {
    try {
        return db
            .query
            .user
            .findFirst({
                columns: {
                    id: true,
                    name: true,
                    email: true,
                    emailVerified: true,
                    image: true,
                    role: true,
                    password: withPassword
                },
                where: eq(user.id, id)
            });
    } catch (error) {
        return;
    }
}

export async function createUser(newUser: Omit<ServerUser, 'id' | 'emailVerified' | 'image'>): Promise<Array<User>> {
    try {
        return db
            .insert(user)
            .values(newUser)
            .returning({
                id: user.id,
                name: user.name,
                email: user.email,
                emailVerified: user.emailVerified,
                image: user.image,
                role: user.role
            });
    } catch (error) {
        return [];
    }
}
