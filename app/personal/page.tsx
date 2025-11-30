'use client';

import { useState } from "react"
import { intro } from "@/lib/personal-intro"

export default function Personal(){
    return(
            <div className="hero-bg h-full max-w-full px-4 py-8 sm:px-6 lg:px-8 place-content-center">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                <div>
                    <div className="max-w-prose md:max-w-none">
                    <p className="mt-4 text-pretty text-gray-700 text-6xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                        architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                        sequi.
                    </p>
                    </div>
                </div>

                <div>
                    <img src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?auto=format&amp;fit=crop&amp;q=80&amp;w=1160" className="rounded" alt="" />
                </div>
                </div>
            </div>
    )
}