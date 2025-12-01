'use client';

import { useState, useEffect, useRef } from "react";

interface Content{
    text: string,
    image: string,
    alt: string,
    anim: string
}

export default function IntroPanel(props: Content){

    const panelRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => {
      if (panelRef.current) {
        observer.unobserve(panelRef.current);
      }
    };
  }, []);


    return(
        <div ref={panelRef} className={`w-[70vw] grid grid-cols-1 p-5 md:grid-cols-2 md:items-center
            bg-white border-5 border-(--tertiary) rounded-3xl shadow-2xl shadow-slate-700
            transition-opacity duration-800 ${isVisible ? `opacity-100 ${props.anim}` : 'opacity-0'}`}>
            <div>
                <div className="max-w-prose md:max-w-none">
                <p className="mt-4 p-5 text-pretty text-gray-700 text-2xl lg:text-6xl text-center">
                    {props.text}
                </p>
                </div>
            </div>

            <div>
                <img src={props.image} 
                className="w-full lg:h-[500px] palce-content-center rounded-2xl" alt={props.alt} />
            </div>
        </div>
    )
}