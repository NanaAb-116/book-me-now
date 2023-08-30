import { SVGProps } from "react";
const ReceiptIconBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#00100B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.097 12.52H5.08M11.097 9.03H5.08M7.376 5.55H5.08"
    />
    <path
      stroke="#00100B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.257 1.292-6.407.003c-2.3.014-3.724 1.527-3.724 3.836v7.663c0 2.32 1.435 3.84 3.754 3.84l6.408-.003c2.3-.015 3.725-1.529 3.725-3.837V5.131c0-2.32-1.436-3.84-3.756-3.84Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ReceiptIconBlack;
