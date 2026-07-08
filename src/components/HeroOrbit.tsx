import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({ 
    children,
    size,
    rotation,
    shouldOrbit = false,
    orbitDuration = 10,
    shouldSpin = false,
    spinDuration = 10,
}: PropsWithChildren<{ 
    size: number; 
    rotation: number;
    shouldOrbit?: boolean;
    orbitDuration?: number;
    shouldSpin?: boolean;
    spinDuration?: number;
}>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
          {/* حاوية الدوران الخارجي (المدار) */}
          <div 
            className={twMerge(shouldOrbit && "animate-spin")}
            style={{ animationDuration: `${orbitDuration}s` }}
          >
            <div 
              className="flex items-start justify-start" 
              style={{ 
                  transform: `rotate(${rotation}deg)`,
                  height: `${size}px`, 
                  width: `${size}px` 
              }}
            >
              {/* حاوية الدوران الداخلي العكسي (لمنع انقلاب الأيقونة) */}
              <div 
                className={twMerge(shouldSpin && "animate-spin")}
                style={{ 
                    animationDuration: `${spinDuration}s`, 
                    animationDirection: "reverse" 
                }}
              >
                <div 
                  className="inline-flex"
                  style={{ transform: `rotate(${-rotation}deg)` }}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};