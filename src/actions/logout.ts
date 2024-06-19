"use server";

import { cookies } from "next/headers";


const logOut = () => {
    cookies().delete("refresh_token")
    cookies().delete("access_token")
    return {
        status:200,
        message:"Logged out"
    }
}