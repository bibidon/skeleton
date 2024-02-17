export type User = {
    id: number;
    uuid: string;
    name: string;
    email: string;
};

export type ServerUser = User & {
    password: string;
};
