import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

// interface LogoProps extends SvgProps {
//   // isDark: boolean;
// }

const Logo: React.FC<SvgProps> = ({ /* isDark, */ ...props }) => {
  const textColor = "#FFFFFF";
  return (
    <svg
    viewBox="0 0 816 1056"
    height="1056"
    width="816"
    color="#adbbd2"
    fontWeight="bold"
    fontVariant="normal"
    fontSize="12px"
    fontFamily="Arial"
    fillOpacity="1"
    fillRule="nonzero"
    stroke="none"
    id="svg2"
    version="1.1">
     <defs
      id="defs6">
       <clipPath
        id="clipPath18"
        clipPathUnits="userSpaceOnUse">
         <path
          clipRule="evenodd"
          id="path16"
          d="M 9.12e-6,0 H 612.00001 V 792 H 9.12e-6 Z" />
       </clipPath>
       <clipPath
        id="clipPath30"
        clipPathUnits="userSpaceOnUse">
         <path
          clipRule="evenodd"
          id="path28"
          d="M 9.12e-6,0 H 612.00001 V 792 H 9.12e-6 Z" />
       </clipPath>
       <clipPath
        id="clipPath38"
        clipPathUnits="userSpaceOnUse">
         <path
          clipRule="evenodd"
          id="path36"
          d="M 9.12e-6,0 H 612.00001 V 792 H 9.12e-6 Z" />
       </clipPath>
     </defs>
     <g
      transform="matrix(1.3333333,0,0,-1.3333333,0,1056)"
      id="g10">
       <g id="g12">
         <g clipPath="url(#clipPath18)" id="g14">
           <text id="text22"
            // style="font-variant:normal;font-weight:bold;font-size:12px;font-family:Arial;-inkscape-font-specification:Arial-BoldMT;writing-mode:lr-tb;fill:#bbbbbb;fill-opacity:1;fill-rule:nonzero;stroke:none"
            transform="matrix(1,0,0,-1,72.024,708.82)">
             <tspan id="tspan20" y="0"
              x="0 8.1479998 16.548 23.879999 31.884001 41.880001 51.216 60.576 69.239998 79.907997 86.580002 93.323997 96.660004 104.604 114.072 120.672">Rothswap</tspan>
           </text>
         </g>
       </g>
       <g id="g24">
         <g clipPath="url(#clipPath30)" id="g26" />
       </g>
       <g id="g32">
         <g clipPath="url(#clipPath38)" id="g34" />
       </g>
     </g>
   </svg>
  );
};

export default React.memo(Logo, /* (prev, next) => prev.isDark === next.isDark */ );
