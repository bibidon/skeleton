'use client';

import { signOut } from 'next-auth/react';

export default function Logout() {
    const onLogoutBtnClicked: () => void = (): void => {
        signOut();
    };

    return (
        <button onClick={onLogoutBtnClicked}>Logout</button>
    );
}
