import { getServerSession, Session } from 'next-auth';

import Logout from '@/shared/components/logout';

export default async function Dashboard() {
    const session: Session | null = await getServerSession();
    console.log(session);

    return (
        <>
            <h1>Dashboard</h1>
            <Logout />
        </>
    );
}
