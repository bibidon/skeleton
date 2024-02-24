import { DefaultJWT } from 'next-auth/jwt';

import { Role } from '@/shared/configs/role';

declare module 'next-auth/jwt' {
    interface JWT extends DefaultJWT {
        role?: Role;
    }
}
