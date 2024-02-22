import { getServerSession, Session } from 'next-auth';

export default async function Dashboard() {
    const session: Session | null = await getServerSession();
    console.log(session);

    return (
        <>
            <p>Dashboard</p>
        </>
    );
}
