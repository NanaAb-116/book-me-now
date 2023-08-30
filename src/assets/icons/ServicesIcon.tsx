import { SVGProps } from "react";
const ServicesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.829 8.333h1.666c1.667 0 2.5-.833 2.5-2.5V4.167c0-1.667-.833-2.5-2.5-2.5h-1.667c-1.666 0-2.5.833-2.5 2.5v1.666c0 1.667.834 2.5 2.5 2.5ZM4.828 18.333h1.667c1.667 0 2.5-.833 2.5-2.5v-1.666c0-1.667-.833-2.5-2.5-2.5H4.828c-1.666 0-2.5.833-2.5 2.5v1.666c0 1.667.834 2.5 2.5 2.5ZM5.662 8.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666ZM15.662 18.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
    />
  </svg>
);
export default ServicesIcon;
