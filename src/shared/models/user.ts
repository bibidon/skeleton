import { Role } from '@/shared/configs/role';

export type User = {
    id: string;
    name: string;
    email: string;
    emailVerified: Date | null;
    image: string | null;
    role: Role;
};

export type ServerUser = User & {
    password: string;
};
