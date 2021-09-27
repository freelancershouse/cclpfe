import * as React from "react";

function SvgCoding(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M27.422.686v7.127h7.126L27.422.686z" fill="#fff" />
            <path
                d="M26.25 10.156a1.172 1.172 0 01-1.172-1.172V0H8.281a3.52 3.52 0 00-3.515 3.516v32.968A3.52 3.52 0 008.28 40H31.72a3.52 3.52 0 003.515-3.516V10.156H26.25zM15.431 27.062a1.172 1.172 0 11-1.8 1.5l-3.906-4.687a1.172 1.172 0 010-1.5l3.906-4.688a1.172 1.172 0 011.8 1.5l-3.28 3.938 3.28 3.937zm7.243-8.254l-3.125 9.375a1.172 1.172 0 01-2.223-.741l3.125-9.375a1.172 1.172 0 012.223.741zm7.601 5.067l-3.906 4.688a1.17 1.17 0 01-1.65.15 1.172 1.172 0 01-.15-1.65l3.28-3.938-3.28-3.937a1.172 1.172 0 111.8-1.5l3.906 4.687a1.172 1.172 0 010 1.5z"
                fill="#fff"
            />
        </svg>
    );
}

export default SvgCoding;