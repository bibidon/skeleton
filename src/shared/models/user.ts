export type User = {
    id: number;
    name: string;
    email: string;
};

export type ServerUser = User & {
    password: string;
};
