'use client';

import { signOut } from 'next-auth/react';

export default function Dashboard() {
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
