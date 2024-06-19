"use server";

import { cookies } from "next/headers";

export const getCookies = async (key:string) =>{
    return cookies().get(key)
}