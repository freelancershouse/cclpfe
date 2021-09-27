import * as React from "react";

function SvgCircle(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="136" 
          height="136" 
          viewBox="0 0 136 136" 
          fill="none"
          {...props} >
            <g filter="url(#filter0_d)">
                <path d="M4.99998 65.5733C4.99998 100.132 33.015 128.147 67.5732 128.147C102.131 128.147 130.146 100.132 130.146 65.5733C130.146 31.015 102.131 3 67.5732 3C33.015 3 4.99998 31.015 4.99998 65.5733Z" fill="url(#paint0_linear)" />
            </g>
            <defs>
                <filter id="filter0_d" x="0" y="0" width="135.147" height="135.147" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.615686 0 0 0 0 1 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <linearGradient id="paint0_linear" x1="30.5507" y1="119.282" x2="76.9592" y2="-15.772" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6E7FFF" />
                    <stop offset="1" stop-color="#668FFF" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SvgCircle;
