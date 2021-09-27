import * as React from "react";

function SvgBlurCircle(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="205" height="205" viewBox="0 0 205 205" fill="none">
            <g filter="url(#filter0_d)">
                <path d="M92.856 11.2388C48.0664 16.4704 16.0206 57.2118 21.2798 102.237C26.5389 147.263 67.1115 179.522 111.901 174.29C156.691 169.058 188.737 128.317 183.477 83.2917C178.218 38.2663 137.646 6.00715 92.856 11.2388Z" fill="url(#paint0_linear)" />
            </g>
            <defs>
                <filter id="filter0_d" x="0.714844" y="0.682617" width="203.328" height="204.164" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="10" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.384314 0 0 0 0 0.588235 0 0 0 0 1 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <linearGradient id="paint0_linear" x1="27.1346" y1="52.6592" x2="209.363" y2="92.0908" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7C63FF" stop-opacity="0.3" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SvgBlurCircle;
