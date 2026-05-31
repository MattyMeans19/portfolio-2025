'use client';

import { Email } from "@/actions/email"
import { useActionState } from "react"

export default function Contact(){

    const [emailState, formAction] = useActionState(Email, undefined)

    return(
        <div className="grow w-full p-10 lg:place-content-center space-y-10">
            <p className="text-center text-3xl text-(--secondary)">Feel free to contact me anytime for a quote or more information!</p>
            <form action={formAction} className="mx-auto grid w-full grid-cols-1 gap-4 rounded-lg border bg-(--secondary) p-6 sm:grid-cols-2">
                <div className="md:col-span-2">
                    <label className="contact-label" htmlFor="name">
                        Name<strong className="text-red-600 text-sm">*</strong></label>

                    <input className="contact-input" 
                    id="name" name="name" type="text" placeholder="Your name" required/>
                </div>

                <div>
                    <label className="contact-label" htmlFor="email">
                        Email<strong className="text-red-600 text-sm">*</strong></label>

                    <input className="contact-input" 
                    id="email" name="email" type="email" placeholder="Your email" required/>
                </div>

                <div>
                    <label className="contact-label" htmlFor="phone">Phone</label>

                    <input className="contact-input" 
                    id="phone" name="phone" type="tel" placeholder="Your phone"/>
                </div>

                <div className="md:col-span-2">
                    <label className="contact-label" htmlFor="message">
                        Message<strong className="text-red-600 text-sm">*</strong></label>

                    <textarea className="contact-input" 
                    id="message" name="message" rows={4} placeholder="Your message" required></textarea>
                </div>

                <div className="md:col-span-2">
                    <button className="block w-full rounded-lg bg-(--tertiary) px-12 py-3 
                    text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-(--primary)" type="submit">
                    Send Message
                    </button>
                </div>
                {emailState?.message && <strong className="boldText-primary text-center col-span-full">{emailState.message}</strong>}
            </form>  
        </div>
        
    )
}