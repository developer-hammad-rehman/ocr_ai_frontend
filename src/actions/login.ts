"use server";

import { IFormdata } from "@/utils";
import { cookies } from "next/headers";

export const login = async (data:IFormdata) => {
    const {email , password} = data;
    const request_form = new FormData()
    request_form.append("username" , email)
    request_form.append("password" , password)
    const response = await (await fetch(`${process.env.BACKEND_URL}/auth` , {
        method:"POST",
        body:request_form,
    })).json()
    if (response.detail) {
        return {
            status : 404,
            error : response.detail
        }
    }else{
        const {access_token , refresh_token , expires_in} = response
        console.log(expires_in);
        cookies().set("access_token" , access_token , {maxAge:expires_in , httpOnly:true})
        cookies().set("refresh_token" , refresh_token)
        return {
            status:200,
            message : "Authenticated"
        }
    }
} 