'use client'
import { useState } from "react";
import { Login } from "../actions";
import { redirect } from "next/navigation";
import Image from "next/image";
import MyLogo from "@/public/BrandTag.png"

export default function Admin(){
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const [message, setMessage] = useState("")

    async function LoginClicked(){
        if(login.username != "" && login.password != ""){
            const loginRequest = await Login(login.username, login.password);
            if(loginRequest.success){
                setMessage(loginRequest.message);
                redirect("/admin/dashboard");
            } else{
                setMessage(loginRequest.message)
            }
        } else{
            alert("You stupid bruh, enter your login shit.")
        } 
    }

    return(
        <div className="w-full h-full bg-(--primary) place-items-center flex flex-col justify-around">
            <Image
                src={MyLogo}
                alt="My Logo"
                width={800}
                height={800}
                className="size-100 rounded-full"
            />
            <div className="flex flex-col p-20 border-5 rounded-3xl gap-20 w-[50vw] bg-green-500">
                <input type="text" id="username" placeholder="User Name" autoComplete="off" onChange={(e) => (setLogin({...login, username: e.target.value}))}
                className="bg-white border pl-10 text-3xl"/>
                <input type="password" id="paswword" placeholder="Password" onChange={(e) => (setLogin({...login, password: e.target.value}))}
                className="bg-white border pl-10 text-3xl"/>
                <button className="bg-(--secondary) w-fit self-center p-5 text-4xl border rounded-3xl"
                    onClick={() => (LoginClicked())}>
                    Login
                </button>
                {message && <p className="text-(--secondary) text-4xl text-center">{message}</p>}                
            </div>

        </div>
    )
}