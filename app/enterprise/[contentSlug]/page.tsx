import { notFound } from "next/navigation";
import Frontend from "@/components/enterprise/Frontend";
import Backend from "@/components/enterprise/Backend";
import Misc from "@/components/enterprise/Misc";


export default async function PostDetails({params}: {params: {contentSlug: string}}){
    const {contentSlug} = await params;

    if(contentSlug === "Frontend"){
        return(
            <Frontend 
                display="Intro"
            />
        ) 
    } else if(contentSlug === "Backend"){
        return(
            <Backend 
                display="Intro"
            />
        )
    } else if(contentSlug === "Misc"){
        return(
            <Misc 
                display="Intro"
            />   
        )
        
    }
     else{
        notFound();
    }
    
}