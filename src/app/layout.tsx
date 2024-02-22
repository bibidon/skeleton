import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import AuthSessionProvider from '@/core/components/auth-session-provider';
import StoreProvider from '@/core/components/store-provider';
import Spinner from '@/shared/components/spinner';
import NotificationList from '@/shared/components/notification/notification-list';
import theme from '@/theme';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Skeleton',
    description: 'Skeleton app'
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <AuthSessionProvider>
                            <StoreProvider>
                                <Spinner />
                                <NotificationList />
                                    {children}
                            </StoreProvider>
                        </AuthSessionProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
