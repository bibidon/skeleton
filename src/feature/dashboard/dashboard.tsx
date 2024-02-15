'use client';

import { signOut } from 'next-auth/react';

export default function Dashboard(): JSX.Element {
    const onLogoutBtnClicked: () => void = (): void => {
        signOut();
    };

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={onLogoutBtnClicked}>Logout</button>
        </>
    );
}
