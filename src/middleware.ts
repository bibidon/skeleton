import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { getToken, JWT } from 'next-auth/jwt';

import { apiAuthPrefix, DEFAULT_NOT_LOGGED_IN_REDIRECT, publicRoutes } from '@/shared/configs/routes';

export async function middleware(req: NextRequest) {
    const path: string = req.nextUrl.pathname;
    const isApiAuthRoute: boolean = path.startsWith(apiAuthPrefix);
    const isPublicRoute: boolean = publicRoutes.includes(path);
    const token: JWT | null = await getToken({req: req, secret: process.env.NEXTAUTH_SECRET});

    if (isApiAuthRoute || isPublicRoute) {
        return NextResponse.next();
    } else if (!token && !isPublicRoute) {
        return NextResponse.redirect(new URL(DEFAULT_NOT_LOGGED_IN_REDIRECT, req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
