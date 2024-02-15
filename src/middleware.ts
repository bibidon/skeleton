import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { getToken, JWT } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
    const publicPaths: Array<string> = ['/login', '/signup'];
    const protectedPaths: Array<string> = ['/'];
    const path: string = req.nextUrl.pathname;
    const predicate: (url: string) => boolean = (url: string) => url === path
    const isPublicPath: boolean = publicPaths.some(predicate);
    const isProtectedPath: boolean = protectedPaths.some(predicate);
    const token: JWT | null = await getToken({req: req, secret: process.env.SECRET});

    if (isPublicPath || token && isProtectedPath) {
        return NextResponse.next();
    } else if (!token && isProtectedPath) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
