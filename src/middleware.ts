import { NextRequest, NextResponse } from "next/server";

export async function middleware(request:NextRequest) {
    const path = request.nextUrl.pathname
    const token = request.cookies.get("refresh_token")
    if (token && (path == "/auth" || path == "/register")) {
        return NextResponse.redirect(new URL('/generate-report' , request.url))
    }else if (!token && path == "/generate-report") {
        return NextResponse.redirect(new URL('/auth' , request.url))
    }else{
        return NextResponse.next()
    }
}