'use client'

import { ExistingProject } from "@/lib/definitions"
import { CldImage } from 'next-cloudinary';
import { useState } from "react";

interface SitesProps {
    sites: ExistingProject[]
}

export default function Project({ sites }: SitesProps) {
    const personalProjects = sites.filter(project => project.type === "Personal");
    const professionalProjects = sites.filter(project => project.type === "Professional");
    
    const [currentFilter, updateFilter] = useState("Personal");
    
    // Drive the list directly from the state to avoid "double-setting" state
    const projectList = currentFilter === "Personal" ? personalProjects : professionalProjects;

    return (
        <div className="grow flex flex-col px-4 md:px-8">
            {/* Cleaner Segmented Toggle */}
            <div className="w-full flex justify-center mb-16">
                <div className="inline-flex p-1 bg-(--secondary) rounded-xl border border-gray-200 shadow-sm">
                    <button 
                        className={`px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 ${
                            currentFilter === "Personal" 
                            ? 'bg-white text-(--primary) shadow-md' 
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => updateFilter("Personal")}
                    >
                        Personal
                    </button>
                    <button 
                        className={`px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 ${
                            currentFilter === "Professional" 
                            ? 'bg-white text-(--primary) shadow-md' 
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => updateFilter("Professional")}
                    >
                        Professional
                    </button>
                </div>
            </div>
            
            {projectList.length === 0 ? (
                <div className="grow flex items-center justify-center h-[40vh]">
                    <h1 className="text-gray-400 text-4xl h-full font-bold italic">
                        Nothing here yet!
                    </h1>
                </div>
            ) : (
            <section className="overflow-y-scroll inner-scrollbar h-[800px] py-10 lg:grid grid-cols-2 gap-x-5 gap-y-16">
                {projectList.map((site) => (
                    <div
                    key={site.id}
                    className="grid grid-rows-[auto_1fr_auto] gap-4 border border-(--tertiary) p-6 rounded-3xl"
                    >
                    {/* 1. Text Section - Forced to the top */}
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-2xl font-bold boldText-primary mb-2">
                        {site.title}
                        </h2>
                        <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--secondary) hover:underline font-medium text-sm break-all mb-4"
                        >
                        <strong className="text-(--primary)">Site URL: </strong>
                        {site.url.replace(/^https?:\/\//, "")}
                        </a>
                        {/* We use line-clamp to ensure the text doesn't explode the height */}
                        <p className="text-(--tertiary) text-base leading-relaxed line-clamp-3">
                        {site.info}
                        </p>
                    </div>

                    {/* 2. Image Section - Centered in the 1fr middle row */}
                    <div className="flex items-center justify-center">
                        <div className="rounded-lg overflow-hidden border border-(--primary) shrink-0">
                        <CldImage
                            src={site.thumbnail}
                            width={1701}
                            height={1347}
                            alt={`${site.title} Preview`}
                            className="size-80 object-cover"
                        />
                        </div>
                    </div>

                    {/* 3. Tech Stack Section - Forced to the bottom */}
                    <div className="flex flex-wrap justify-center gap-2 mt-auto">
                        {site.stack.map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-(--secondary) text-white text-xs font-semibold rounded-full"
                        >
                            {item}
                        </span>
                        ))}
                    </div>
                    </div>
                ))}
            </section>
            )}
        </div>
    )
}