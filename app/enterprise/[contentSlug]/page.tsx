import { notFound } from "next/navigation";
import { Suspense } from "react";



export default async function PostDetails({params}: {params: {contentSlug: string}}){
    const {contentSlug} = await params;

    if(contentSlug === "Frontend" || contentSlug === "Backend" || contentSlug === "Misc"){
        return(
            <h1>{contentSlug}</h1>
        ) 
    } else{
        notFound();
    }
    
}