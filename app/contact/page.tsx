
export default function Contact(){
    return(
        <div className="grow hero-bg place-content-center space-y-10">
            <p className="text-center text-3xl text-(--secondary) text-shadow-md text-shadow-black">Feel free to contact me anytime!</p>
            <form action="#" className="mx-auto grid max-w-2xl grid-cols-1 gap-4 rounded-lg border border-gray-300 bg-gray-100 p-6 sm:grid-cols-2">
                <div className="md:col-span-2">
                    <label className="block text-sm lg:text-2xl font-medium text-gray-900" htmlFor="name">
                        Name<strong className="text-red-600 text-sm">*</strong></label>

                    <input className="mt-1 w-full rounded-lg bg-white p-2 focus:border-indigo-500 focus:outline" 
                    id="name" type="text" placeholder="Your name" required/>
                </div>

                <div>
                    <label className="block text-sm lg:text-2xl font-medium text-gray-900" htmlFor="email">
                        Email<strong className="text-red-600 text-sm">*</strong></label>

                    <input className="mt-1 w-full rounded-lg bg-white p-2 focus:border-indigo-500 focus:outline" 
                    id="email" type="email" placeholder="Your email" required/>
                </div>

                <div>
                    <label className="block text-sm lg:text-2xl font-medium text-gray-900" htmlFor="phone">Phone</label>

                    <input className="mt-1 w-full rounded-lg bg-white p-2 focus:border-indigo-500 focus:outline" 
                    id="phone" type="tel" placeholder="Your phone"/>
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm lg:text-2xl font-medium text-gray-900" htmlFor="message">
                        Message<strong className="text-red-600 text-sm">*</strong></label>

                    <textarea className="mt-1 w-full resize-none rounded-lg bg-white p-2 focus:border-indigo-500" 
                    id="message" rows={4} placeholder="Your message" required></textarea>
                </div>

                <div className="md:col-span-2">
                    <button className="block w-full rounded-lg border border-(--tertiary) bg-(--primary) px-12 py-3 
                    text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-(--primary)" type="submit">
                    Send Message
                    </button>
                </div>
            </form>   
        </div>
        
    )
}