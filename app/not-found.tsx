export default function NotFound(){
    return(
        <div className="hero-bg grow  w-screen text-center place-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                className="mx-auto size-20 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"></path>
            </svg>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">Page Not Found</h2>
        </div>       
    )
}