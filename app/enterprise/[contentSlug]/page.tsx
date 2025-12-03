import { notFound } from "next/navigation";
import Frontend from "@/components/enterprise/Frontend";
import Backend from "@/components/enterprise/Backend";
import Misc from "@/components/enterprise/Misc";


export default async function PostDetails({params}: {params: {contentSlug: string}}){
    const {contentSlug} = await params;

    if(contentSlug === "Frontend"){
        return(
            <Frontend />
        ) 
    } else if(contentSlug === "Backend"){
        return(
            <Backend />
        )
    } else if(contentSlug === "Misc"){
        <Misc />
    }
     else{
        notFound();
    }
    
}