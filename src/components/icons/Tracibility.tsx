import * as React from "react";

function SvgTracibility(props: React.SVGProps<SVGSVGElement>) {
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
                d="M73.004 62.22l-14.37-14.37a7.632 7.632 0 00-10.793 0c-2.98 2.98-.816 4.583 2.165 7.564l20.507 17.175 4.705-4.396a7.614 7.614 0 00-2.214-5.974z"
                fill="#C5C8FF"
            />
            <path
                d="M71.71 69.045a7.606 7.606 0 01-5.397-2.236l-14.37-14.37a7.614 7.614 0 01-2.211-5.974 7.632 7.632 0 00-1.89 12.177l14.37 14.37a7.607 7.607 0 005.396 2.235 7.609 7.609 0 005.397-2.235 7.6 7.6 0 002.211-4.82 7.626 7.626 0 01-3.506.853z"
                fill="#6F75FF"
            />
            <path
                d="M32.173 57.895c14.49 0 26.237-11.746 26.237-26.236S46.663 5.422 32.173 5.422c-14.49 0-26.236 11.746-26.236 26.237 0 14.49 11.746 26.236 26.236 26.236z"
                fill="#F9F6F6"
            />
            <path
                d="M40.968 42.322c-11.47 0-20.768-9.299-20.768-20.769 0-6.268 2.78-11.883 7.17-15.69C15.175 8.118 5.938 18.808 5.938 31.658c0 14.49 11.746 26.237 26.236 26.237 14.085 0 25.576-11.1 26.208-25.028-3.705 5.689-10.117 9.454-17.413 9.454z"
                fill="#C5C8FF"
                fillOpacity={0.29}
            />
            <path
                d="M32.173 63.07C14.853 63.07.762 48.979.762 31.659S14.852.248 32.172.248s31.412 14.09 31.412 31.41S49.493 63.07 32.173 63.07zm0-52.474c-11.614 0-21.063 9.449-21.063 21.063 0 11.614 9.45 21.062 21.063 21.062s21.062-9.449 21.062-21.062c0-11.614-9.449-21.063-21.062-21.063z"
                fill="#C5C8FF"
            />
            <path
                d="M32.173 63.07C14.853 63.07.762 48.979.762 31.659a5.174 5.174 0 1110.348 0c0 11.614 9.45 21.062 21.063 21.062a5.174 5.174 0 110 10.349z"
                fill="#6F75FF"
            />
        </svg>
    );
}

export default SvgTracibility;
