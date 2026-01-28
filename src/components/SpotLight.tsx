'use client';
import { useEffect, useState } from "react";

export default function SpotLight() {
    const [position, setPosition]= useState({x:0,y:0});

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({x:e.clientX,y:e.clientY});
        };
        window.addEventListener('mousemove',updatePosition);
        return () => window.removeEventListener('mousemove',updatePosition);
    },[]);

    return (
        <div
            className="fixed top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none z-50 transition-transform duration-100 ease-out"
            style={{
                transform: `translate(${position.x - 250}px, ${position.y - 250}px)`,
            }}
        />
    );
}