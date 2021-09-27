import * as React from "react";

function SvgTransparancy(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M52.008.248v47.837c13.21 0 23.918-10.71 23.918-23.919 0-13.21-10.708-23.918-23.918-23.918z"
                fill="#6F75FF"
                fillOpacity={0.52}
            />
            <path
                d="M71.4 24.166C71.4 10.956 62.718.248 52.008.248c-13.21 0-23.918 10.708-23.918 23.918 0 13.21 10.709 23.919 23.918 23.919 10.71 0 19.392-10.71 19.392-23.919z"
                fill="#C5C8FF"
            />
            <path
                d="M29.372 75.248c15.71 0 28.445-12.736 28.445-28.446S45.082 18.356 29.372 18.356.925 31.092.925 46.802 13.66 75.248 29.372 75.248z"
                fill="#6F75FF"
            />
            <path
                d="M48.56 43.339l-18.938 27.38c12.682-.13 23.001-10.13 23.636-22.685l-4.699-4.695z"
                fill="#CCCEFF"
            />
            <path
                d="M48.763 46.802c0 13.107-8.546 23.75-19.14 23.917l-.251.001c-13.21 0-23.919-10.708-23.919-23.918 0-12.791 10.04-23.237 22.668-23.887l20.438 20.423c.135 1.13.204 2.287.204 3.464z"
                fill="#EDEEFF"
            />
            <path
                d="M29.378 22.884l19.365 24.978c1.068.146 2.157.223 3.265.223.42 0 .837-.019 1.251-.051.02-.408.031-.819.031-1.232 0-13.208-10.705-23.915-23.912-23.918z"
                fill="#ABAFFF"
            />
            <path
                d="M29.379 22.884c-.426 0-.843.01-1.257.032-.021.414-.032.83-.032 1.25 0 12.103 8.989 22.104 20.654 23.696.012-.352.02-.705.02-1.06 0-13.207-8.678-23.914-19.385-23.918z"
                fill="#C5C8FF"
            />
        </svg>
    );
}

export default SvgTransparancy;