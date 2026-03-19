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
                <section className="h-full overflow-y-scroll">
                    {projectList.map((site) => (
                        <div key={site.id} className="">
                            <div className="flex flex-col ">
                                <h2 className="text-2xl font-bold text-gray-900 ">
                                    {site.title}
                                </h2>
                                <a 
                                    href={site.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-sky-600 hover:underline font-medium text-lg"
                                >
                                    <strong className="text-black">Site URL: </strong>{site.url.replace(/^https?:\/\//, '')} {/* Cleans URL for display */}
                                </a>
                                <p className="text-gray-600 text-base leading-relaxed max-w-prose">
                                    {site.info}
                                </p>
                            </div>

                            <div>
                                <CldImage
                                    src={site.thumbnail}
                                    width={1701}
                                    height={1347}
                                    alt={`${site.title} Preview`}
                                    className="size-80"
                                />
                            </div>
                            <div>
                                {site.stack.map((item, index) =>(
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </div>    
                    ))}
                </section>
            )}
        </div>
    )
}