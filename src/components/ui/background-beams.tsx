"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full bg-transparent flex flex-col items-center justify-center opacity-40",
        className
      )}
    >
       <div className="absolute inset-0 bg-transparent h-full w-full pointer-events-none" 
            style={{
              backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
              backgroundSize: `4rem 4rem`,
              maskImage: 'radial-gradient(transparent 10%, black 90%)',
              WebkitMaskImage: 'radial-gradient(transparent 10%, black 90%)',
            }}
       ></div>
       {/* Animated Radial Gradient that follows attention */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
    </div>
  );
};