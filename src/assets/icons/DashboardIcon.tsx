import { SVGProps } from "react";
const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M10.662 15v-2.5M9.054 2.35 3.279 6.975c-.65.517-1.067 1.608-.925 2.425l1.108 6.633c.2 1.184 1.333 2.142 2.533 2.142h9.334c1.191 0 2.333-.967 2.533-2.142L18.97 9.4c.134-.817-.283-1.908-.925-2.425L12.27 2.358c-.891-.716-2.333-.716-3.216-.008Z"
    />
  </svg>
);
export default DashboardIcon;
