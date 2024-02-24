import type { DefaultSession } from 'next-auth';

import { User } from '@/shared/models/user';

declare module 'next-auth' {
    interface Session {
        user: User & DefaultSession['user'];
    }
}
