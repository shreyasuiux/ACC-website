import React from "react";
import svgPaths from "../../imports/svg-bngkqqxd9l";

interface LogoProps {
  className?: string;
  fill?: string;
  onClick?: () => void;
}

export function Logo({ className = "", fill = "white", onClick }: LogoProps) {
  return (
    <div 
      className={`h-[40.639px] w-[112px] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 40.6387">
        <g id="Group">
          <path d={svgPaths.p1a137200} fill={fill} id="Vector" />
          <path d={svgPaths.ped4dd00} fill={fill} id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}