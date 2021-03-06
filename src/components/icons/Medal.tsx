import * as React from "react";

function SvgMedal(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#medal_svg__clip0)" fill="#fff">
                <path d="M26.4 28.033l1.829-2.968 3.3-1.126.366-3.467 2.484-2.445-1.18-3.282 1.18-3.281-2.483-2.445-.366-3.467-3.301-1.126-1.83-2.968-3.459.418L20.001 0l-2.939 1.876-3.46-.418-1.829 2.968-3.3 1.126-.366 3.467-2.484 2.445 1.18 3.281-1.18 3.282 2.483 2.445.366 3.467 3.301 1.126 1.83 2.968 3.459-.418 2.939 1.876 2.939-1.876 3.46.418zM9.89 14.745C9.89 9.17 14.424 4.634 20 4.634c5.576 0 10.112 4.536 10.112 10.111 0 5.576-4.536 10.112-10.112 10.112-5.576 0-10.112-4.536-10.112-10.111z" />
                <path d="M20 6.98c-4.282 0-7.766 3.483-7.766 7.765 0 4.283 3.484 7.767 7.767 7.767 4.282 0 7.766-3.484 7.766-7.767 0-4.282-3.484-7.766-7.766-7.766zM16.509 30.044l-4.116.497-2.174-3.528-.74-.252-3.188 9.966 5.74-.316L16.522 40l2.643-8.26-2.656-1.696zM29.782 27.013l-2.174 3.528-4.116-.497-2.656 1.696L23.479 40l4.49-3.59 5.741.317-3.189-9.966-.739.252z" />
            </g>
            <defs>
                <clipPath id="medal_svg__clip0">
                    <path fill="#fff" d="M0 0h40v40H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default SvgMedal;
