"use server";
import { IFormdata } from "@/utils";
export const signup = async (data:IFormdata) => {
    const {email , password} = data;
    const request_form = new FormData()
    request_form.append("username" , email)
    request_form.append("password" , password)
    const response = await (await fetch(`${process.env.BACKEND_URL}/register` , {
        method:"POST",
        body:request_form,
    })).json()
    if (response.detail) {
        return {
            status : 404,
            error : response.detail
        }
    }else{
        return {
            status:200,
            message : "Authenticated"
        }
    }
} 