'use server'
import axios from "axios";
import { FormState } from "@/lib/definitions";


export async function Email(formState: FormState, formData: FormData){
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone");
    const message = formData.get("message") as string;

    const data = {
        service_id: process.env.Email_ServiceID,
        template_id: process.env.Email_TemplateID,
        user_id: process.env.PublicKey,
        template_params:{
            title: "Project inquiry",
            name: name,
            email: email,
            message: message,
            phone: phone
        }
    }

    try {
        const response = await axios.post(
            'https://api.emailjs.com/api/v1.0/email/send',
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.status === 200) {
            console.log('Email sent successfully!');
            return {message: "Message Sent!"}
        } else {
            console.error('Failed to send email:', response.data);
        }
    } catch (error: any) {
         console.error('Error sending email:', error.response ? error.response.data : error.message);
        return {message: "Something went wrong, message not sent!"}
    }
}