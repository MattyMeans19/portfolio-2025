import Frontend from "@/components/enterprise/Frontend";
import Backend from "@/components/enterprise/Backend";
import Misc from "@/components/enterprise/Misc";
import { notFound } from "next/navigation";

export default async function SkillData({params}: {params: {dataSlug: string}}){
        const {dataSlug} = await params;

        if(dataSlug === "TailwindCSS" || dataSlug === "Other-Styling" || dataSlug === "Next.JS" || dataSlug === "React"){
            return(
                <Frontend 
                    display={dataSlug}
                />
            )
        } else if(dataSlug === "Express.JS" || dataSlug === "PostgreSQL" || dataSlug === "RESTful-APIs"){
            return(
                <Backend 
                    display={dataSlug}
                />
            )
        }  else if(dataSlug === "EJS" || dataSlug === "TypeScript" || dataSlug === "Authentication-Security"){
            return(
                <Misc 
                    display={dataSlug}
                />
            )
        } else{
                notFound();
            }
}