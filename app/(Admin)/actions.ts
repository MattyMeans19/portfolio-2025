'use server';

import { db } from "@/db";
import { AddOns, ToDo } from "@/db/schema";
import { Addon } from "@/lib/definitions";
import { createSession } from "@/lib/session";
import bcrypt from "bcrypt"
import { eq } from "drizzle-orm";
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

export async function CreateAddon(addon: Addon){
    try{
        await db.insert(AddOns).values(
            {name: addon.name, info: addon.info, startUp: addon.startUp, monthly: addon.monthly, buildETA: addon.buildETA, isPremium: addon.isPremium}
        )
        return {success: true, message: "Addon created!"}
    } catch (error){
        console.error("Failed with error: ", error);
        if (error instanceof Error && (error as any).code === '23505') {
            return { 
                success: false, 
                message: `An addon with the name "${addon.name}" already exists.` 
            };
        }
        return {success: false, message: "Addon not created!"}
    }
}

export async function DeleteAddon(id: number){
    try{
        await db.delete(AddOns).where(eq(AddOns.id, id));
        return{success: true, message: "Add-on Deleted!"}
    } catch(error){
        console.error("Failed with error: ", error)
        return{success: false, message: "Failed to delete Add-on!"}
    }
}

export async function AddToDo(title: string, info: string){
    try{
        await db.insert(ToDo).values({title: title, info: info});
        return {success: true, message: "To Do Item created!"}
    }catch(error){
        console.error("Failed with error: ", error)
        if (error instanceof Error && (error as any).code === '23505') {
            return { 
                success: false, 
                message: `To Do Item with the name "${title}" already exists.` 
            };
        }
        return {success: false, message: "Failure to add to do item!"}
    }
}

export async function DeleteToDo(id: number){
    try{
        await db.delete(ToDo).where(eq(ToDo.id, id));
        return {success: true, message: "To Do Item completed/deleted!"}
    } catch(error){
        console.error("Failed with error: ", error)
        return {success: false, message: "Failure to remove to do item!"}
    }
}