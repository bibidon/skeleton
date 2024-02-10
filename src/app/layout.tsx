import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@/theme';
import './globals.css';

const inter: NextFont = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Skeleton',
    description: 'Skeleton app'
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>): JSX.Element {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <main>
                            {children}
                        </main>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
