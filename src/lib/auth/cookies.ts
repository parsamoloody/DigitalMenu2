import 'server-only'
import { NextResponse, NextRequest } from "next/server";

// Set a cookie
export function setCookie(
    res: NextResponse,
    name: string,
    value: string,
    options: { maxAge?: number; httpOnly?: boolean; path?: string } = {}
) {
    const cookieOptions = {
        httpOnly: options.httpOnly ?? true,
        path: options.path ?? "/",
        maxAge: options.maxAge ?? 60 * 60 * 24, // default 1 day
    };

    res.cookies.set(name, value, cookieOptions);
}

// Read a cookie
export function getCookie(req: NextRequest, name: string) {
    return req.cookies.get(name)?.value ?? null;
}

// Delete a cookie
export function deleteCookie(res: NextResponse, name: string) {
    res.cookies.set(name, "", { maxAge: 0, path: "/" });
}
