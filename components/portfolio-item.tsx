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
                <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200 shadow-sm">
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
                <div className="grow flex items-center justify-center min-h-[300px] bg-white rounded-3xl border-2 border-dashed border-gray-200">
                    <h1 className="text-gray-400 text-4xl font-bold italic">
                        Nothing here yet!
                    </h1>
                </div>
            ) : (
                <section className="bg-white rounded-3xl border border-(--tertiary) boxShadow divide-y divide-gray-100">
                    {projectList.map((site) => (
                        <div key={site.id} className="px-6 py-16 md:grid md:grid-cols-2 md:items-center md:gap-12 lg:px-12">
                            <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                                <h2 className="text-3xl font-bold text-gray-900 lg:text-5xl">
                                    {site.title}
                                </h2>
                                <a 
                                    href={site.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-sky-600 hover:underline font-medium text-lg lg:text-xl"
                                >
                                    <strong className="text-black">Site URL: </strong>{site.url.replace(/^https?:\/\//, '')} {/* Cleans URL for display */}
                                </a>
                                <p className="text-gray-600 text-base leading-relaxed lg:text-2xl max-w-prose">
                                    {site.info}
                                </p>
                            </div>

                            <div className="mt-10 md:mt-0 overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                                <CldImage
                                    src={site.thumbnail}
                                    width={1701}
                                    height={1347}
                                    alt={`${site.title} Preview`}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>    
                    ))}
                </section>
            )}
        </div>
    )
}