import { SVGProps } from "react";
const BookingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#808885"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.328 1.667v2.5M13.995 1.667v2.5M3.578 7.575h14.167M18.162 7.083v7.084c0 2.5-1.25 4.166-4.167 4.166H7.33c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166Z"
    />
    <path
      stroke="#808885"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.74 11.417h.008M13.74 13.917h.008M10.658 11.417h.008M10.658 13.917h.008M7.574 11.417h.007M7.574 13.917h.007"
    />
  </svg>
);
export default BookingsIcon;
