import { eq } from 'drizzle-orm';

import { db } from '@/core/db/db';
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
                    uuid: true,
                    name: true,
                    email: true,
                    password: withPassword
                },
                where: eq(user.email, email)
            });
    } catch (error) {
        return;
    }
}

export async function createUser(newUser: Omit<ServerUser, 'id' | 'uuid'>): Promise<Array<User>> {
    try {
        return db
            .insert(user)
            .values(newUser)
            .returning({
                id: user.id,
                uuid: user.uuid,
                name: user.name,
                email: user.email
            });
    } catch (error) {
        return [];
    }
}
