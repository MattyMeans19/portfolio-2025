'use server';

import { createSession } from "@/lib/session";
import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function Login(username: string, password: string){    
    const rawHash = Buffer.from(process.env.ADMIN_HASH!, 'base64').toString('utf-8');
    const passwordCheck = await bcrypt.compare(password, rawHash);


    if(username != process.env.ADMIN_LOGIN){
        return {success: false, message: "Invalid username"}
    } else{
        if(!passwordCheck){
            return {success: false, message: "Invalid password"}
        } else{
            await createSession(username)
            return {success: true, message: "Login Successful"}
        }
    }
}

export async function Logout() {
  const cookieStore = await cookies();
  
  // 1. Delete the cookie
  cookieStore.delete('session');

  // 2. Force an expiration (Backup for some browser behaviors)
 cookieStore.set('session', '', { 
    expires: new Date(0), 
    path: '/admin-portal', // Ensure this matches the path the cookie was created on
  });

  // 3. Clear the Next.js Client Router Cache
  // This is the most likely culprit for "logging back in" on refresh
  revalidatePath('/admin', 'layout');
}