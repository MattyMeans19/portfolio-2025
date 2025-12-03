import Image from "next/image"


export default function About(){
    return(
        <div className="grow hero-bg p-5 xl:p-30">
            <div className="flex flex-col place-items-center gap-4 p-5 lg:p-15 bg-white border border-(--tertiary) rounded-3xl boxShadow">
                <Image
                    src="/ME.jpg"
                    width={400}
                    height={400}
                    alt="Matthew Means - Web Developer"
                    className="rounded-full border-10 border-double border-(--tertiary) bg-(--primary)"
                />

                <div >
                    <h3 className="font-medium text-gray-900 xl:text-5xl boldText-primary text-center">About Me</h3>

                    <p className="mt-15 2xl:text-4xl text-gray-700 p-5 border-5 border-(--tertiary) rounded-2xl">
                   As you may have already guessed, my name is Matthew Means, but you can call me Matt.<br/>

                    I have an extensive background in the tech industry, starting all the way back in my high school years. 
                    It began with 3D animation and Robotics, which I feel fortunate were both available at my high school.<br/>

                    After high school, I spent a few years studying electrical theory and eventually obtained an Associate's degree in 
                    Electrical Engineering Technology. Unfortunately, I was unable to complete the Bachelor's in Electrical Engineering 
                    and Communications Technology that I was pursuing. I've since used that knowledge in various technician positions throughout the years.<br/>

                    Now I have switched my focus from hardware to software. In my spare time, I enjoy writing code for video games, 
                    but I'm actively engaged in making web development my primary day job. I also have a passion for music and writing!<br/>

                    I'm working diligently every day to follow my passions and make my dreams a reality. Given the chance, 
                    I would wholeheartedly relish the privilege of helping everyone else bring their dreams to life as well!
                    </p>
                </div>
            </div>    
        </div>

    )
}