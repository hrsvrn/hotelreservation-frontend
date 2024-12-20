'use server';
import { cookies } from "next/headers";

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
    const cookieStore = await cookies();
    cookieStore.set('session_userid', userId, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/'
    });
    cookieStore.set('session_access_token', accessToken, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60, // 60 minutes
        path: '/'
    });
    cookieStore.set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/'
    });
}
export async function resetAuthCookies(){
    const cookieStore = await cookies();
    cookieStore.set('session_userid','');
    cookieStore.set('session_access_token','');
    cookieStore.set('session_refresh_token','');

}

export async function getUserId(){
    const cookieStore=await cookies();
    const userId=cookieStore.get('session_userid')?.value
    return userId ? userId : null

}
export async function getAccessToken() {
    const cookieStore=await cookies();
    let accessToken = cookieStore.get('session_access_token')?.value;
    return accessToken;
}