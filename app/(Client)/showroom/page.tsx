'use client'

import { useState } from "react"

export default function Showroom() {
    const pages = {
        business_standard: "https://business-standard-b575a85dcac5.herokuapp.com/",
        business_premium: "https://business-premium-0424d21e5ca2.herokuapp.com/",
        restaurant_standard: "https://restaurant-standard-248d9b3aeab1.herokuapp.com/",
        restaurant_premium: "https://restaurant-premium-9bed4c28f5c2.herokuapp.com/",
    }

    const [currentPage, setCurrentPage] = useState(pages.business_standard);
    const [showNotes, setShowNotes] = useState(true);
    const [viewMode, setViewMode] = useState('desktop'); // desktop, tablet, mobile

    const SwitchFront = () => {
        const isAdmin = currentPage.includes("/admin-portal");
        // Strip the portal to get base URL
        const base = currentPage.replace("/admin-portal", "");
        setCurrentPage(isAdmin ? base : `${base}/admin-portal`);
    }

    // Helper for iframe sizing
    const getIframeSize = () => {
        if (viewMode === 'mobile') return 'w-[375px] border-x-8 border-t-8 border-gray-800 rounded-t-3xl mx-auto';
        if (viewMode === 'tablet') return 'w-[768px] border-x-4 border-t-4 border-gray-800 rounded-t-2xl mx-auto';
        return 'w-full h-full';
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Template Selection Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 hero-bg border-b-4 border-(--secondary)">
                {Object.entries(pages).map(([key, url]) => (
                    <button 
                        key={key}
                        className={`p-2 text-xs md:text-sm rounded transition-colors ${currentPage.includes(url) ? 'bg-(--primary) text-white' : 'bg-white text-gray-700'}`}
                        onClick={() => setCurrentPage(url)}
                    >
                        {key.replace('_', ' ').toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Viewport & Path Toggles */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-slate-800 p-2 gap-2">
                <div className="flex gap-2">
                    <button className={`px-4 py-1 rounded-full text-sm ${!currentPage.includes("/admin-portal") ? 'bg-(--primary)' : 'bg-gray-600'}`} onClick={SwitchFront}>Webfront</button>
                    <button className={`px-4 py-1 rounded-full text-sm ${currentPage.includes("/admin-portal") ? 'bg-(--primary)' : 'bg-gray-600'}`} onClick={SwitchFront}>Admin</button>
                </div>

                <div className="flex gap-4 text-white bg-slate-700 px-4 py-1 rounded-full">
                    <button onClick={() => setViewMode('desktop')} className={viewMode === 'desktop' ? 'text-blue-400' : ''}>🖥️ <span className="hidden sm:inline">PC</span></button>
                    <button onClick={() => setViewMode('tablet')} className={viewMode === 'tablet' ? 'text-blue-400' : ''}>💻 <span className="hidden sm:inline">Tablet</span></button>
                    <button onClick={() => setViewMode('mobile')} className={viewMode === 'mobile' ? 'text-blue-400' : ''}>📱 <span className="hidden sm:inline">Mobile</span></button>
                </div>
            </div>

            {/* Notes Toggle Trigger */}
            <button 
                className="w-full py-2 bg-white text-(--secondary) underline font-bold text-center italic text-sm"
                onClick={() => setShowNotes(true)}
            >
                View Login Credentials & Instructions
            </button>

            {/* Important Notes Modal */}
            {showNotes && (
                <div className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10 border-4 border-(--secondary) flex flex-col">
                        <h2 className="text-2xl font-bold mb-4 text-(--secondary) border-b pb-2">Important Notes</h2>
                        <ul className="space-y-4 list-disc pl-5 text-gray-700 text-sm md:text-base">
                            <li>Standard Templates only have <strong>One</strong> user (Admin). For multi-user, use <strong>Premium</strong>.</li>
                            <li><strong>Admin Login:</strong> Admin | Admin123</li>
                            <li><strong>Manager Login (Premium):</strong> Test_Manager | Manager123</li>
                            <li><strong className="text-(--secondary)">Please DO NOT Change these Passwords. I can fix them, but at the inconvenience of myself and others!</strong></li>
                            <li><strong>Success Test Card:</strong> 4242 4242 4242 4242</li>
                            <li><strong>Decline Test Card:</strong> 4000 0000 0000 0032</li>
                            <li className="font-bold">PC preview may not work properly on devices with smaller screens!</li>
                            <li className="italic text-xs">Please be respectful with the content you add to the live demos.</li>
                        </ul>
                        <button 
                            className="mt-8 w-full p-4 bg-(--secondary) text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
                            onClick={() => setShowNotes(false)}
                        >
                            Close & Start Testing
                        </button>
                    </div>
                </div>
            )}

            {/* Main Showroom Area */}
            <div className="grow bg-gray-300 p-2 md:p-4 overflow-hidden flex flex-col">
                <div className={`grow flex flex-col transition-all duration-300 ease-in-out shadow-2xl overflow-hidden bg-white ${getIframeSize()}`}>
                    <iframe 
                        src={currentPage}
                        className="grow w-full h-full border-none"
                        title="Showroom Content"
                    />
                </div>
            </div>
        </div>
    )
}