import * as React from "react";

function SvgSemiCircle(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="266" height="405" viewBox="0 0 266 405" fill="none" {...props} >
            <g filter="url(#filter0_d)">
                <path d="M5.5051 200.334C5.5051 309.318 93.8545 397.668 202.839 397.668C311.823 397.668 400.173 309.318 400.173 200.334C400.173 91.3494 311.823 3 202.839 3C93.8545 3 5.5051 91.3494 5.5051 200.334Z" fill="url(#paint0_linear)" />
            </g>
            <defs>
                <filter id="filter0_d" x="0.504883" y="0" width="404.668" height="404.668" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.615686 0 0 0 0 1 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <linearGradient id="paint0_linear" x1="86.0831" y1="369.712" x2="232.439" y2="-56.2002" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6E7FFF" />
                    <stop offset="1" stop-color="#668FFF" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SvgSemiCircle;