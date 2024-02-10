'use client';

import { Roboto } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

import { Theme, createTheme } from '@mui/material/styles';

const roboto: NextFont = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
});

const theme: Theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily
    }
});

export default theme;
