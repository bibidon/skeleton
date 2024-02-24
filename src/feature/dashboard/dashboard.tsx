import { getServerSession, Session } from 'next-auth';

import { authOptions } from '@/shared/configs/auth';

export default async function Dashboard() {
    const session: Session | null = await getServerSession(authOptions);

    return (
        <>
            <p>Dashboard</p>
            {JSON.stringify(session)}
        </>
    );
}
