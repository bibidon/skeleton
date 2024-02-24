import { Role } from '@/shared/configs/role';

export type SignupFormValue = {
    name: string;
    email: string;
    password: string;
    role: Role
};
