



import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "./PeriodicTableJSON.json";

interface Element {
  name: string;
  symbol: string;
  number: number;
  category: string;
  xpos: number;
  ypos: number;
  atomicWeight: number;
  electronegativity: number;
  meltingPoint: number;
  boilingPoint: number;
  electronAffinity: number;
  ionization: number;
  radius: number;
  density: number;
  conductivity: number;
  color: string;
}

const colorMap: { [key: string]: string } = {
  "noble gas": "bg-yellow-300",
  "alkaline earth metal": "bg-red-300",
  "diatomic nonmetal": "bg-red-500",
  "alkali metal": "bg-purple-700",
  "transition metal": "bg-gray-600",
  "post-transition metal": "bg-green-500",
  metalloid: "bg-blue-300",
  "reactive nonmetal": "bg-yellow-500",
  lanthanide: "bg-pink-400",
  actinide: "bg-indigo-400",
};

interface PeriodicTableProps {
  setHoveredElement: (element: Element) => void;
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ setHoveredElement }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user navigated properly
    const navigated = sessionStorage.getItem("navigatedToPeriodicTable");
    if (!navigated) {
      navigate("/"); // Redirect to home if the flag is not found
    }
  }, [navigate]);

  return (
    <div className="flex w-full h-screen bg-black text-white justify-center items-center">
      <div
        className="grid gap-1 overflow-auto"
        style={{
          gridTemplateColumns: "repeat(18, 60px)",
          gridTemplateRows: "repeat(10, 60px)",
        }}
      >
        {data.elements.map((element: any) => (
          <div
            key={element.name}
            className={`flex relative items-center justify-center border border-gray-400 ${
              colorMap[element.category] || "bg-gray-500"
            } hover:scale-125 hover:z-10`}
            style={{
              gridRow: element.ypos,
              gridColumn: element.xpos,
            }}
            onMouseEnter={() =>
              setHoveredElement({
                ...element,
                color: colorMap[element.category] || "bg-gray-500", // Set color dynamically
              })
            }
          >
            <strong className="text-lg">{element.symbol}</strong>
            <small className="absolute top-1 left-1 text-xs">
              {element.number}
            </small>
            <small className="absolute bottom-1 left-1 text-xs truncate w-full text-center">
              {element.name}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeriodicTable;




// import React from "react";
// import data from "./PeriodicTableJSON.json";
// import { useNavigate, useLocation } from 'react-router-dom';

// interface Element {
//   name: string;
//   symbol: string;
//   number: number;
//   category: string;
//   xpos: number;
//   ypos: number;
//   atomicWeight: number;
//   electronegativity: number;
//   meltingPoint: number;
//   boilingPoint: number;
//   electronAffinity: number;
//   ionization: number;
//   radius: number;
//   density: number;
//   conductivity: number;
//   color:string;
// }



// const colorMap: { [key: string]: string } = {
//   "noble gas": "bg-yellow-300",
//   "alkaline earth metal": "bg-red-300",
//   "diatomic nonmetal": "bg-red-500",
//   "alkali metal": "bg-purple-700",
//   "transition metal": "bg-gray-600",
//   "post-transition metal": "bg-green-500",
//   metalloid: "bg-blue-300",
//   "reactive nonmetal": "bg-yellow-500",
//   "lanthanide": "bg-pink-400",
//   "actinide": "bg-indigo-400",
// };

// interface PeriodicTableProps {
//   setHoveredElement: (element: Element) => void;
// }

// const PeriodicTable: React.FC<PeriodicTableProps> = ({ setHoveredElement }) => {
  
//   return (
//     <div className="flex w-full h-screen bg-black text-white justify-center items-center">
//       <div
//         className="grid gap-1 overflow-auto"
//         style={{
//           gridTemplateColumns: "repeat(18, 60px)",
//           gridTemplateRows: "repeat(10, 60px)",
//         }}
//       >
//         {data.elements.map((element: any) => (
//           <div
//             key={element.name}
//             className={`flex relative items-center justify-center border border-gray-400 ${
//               colorMap[element.category] || "bg-gray-500"
//             } hover:scale-125 hover:z-10`}
//             // style={{
//             //   gridRow: element.ypos,
//             //   gridColumn: element.xpos,
//             //   width: "60px",
//             //   height: "60px",
//             // }}
//             style={{
//               gridRow: element.ypos,
//               gridColumn: element.xpos,
//             }}
//             onMouseEnter={() =>
//               setHoveredElement({
//                 ...element,
//                 color: colorMap[element.category] || "bg-gray-500", //  color dynamically
//               })
//             }
//           >
//             <strong className="text-lg">{element.symbol}</strong>
//             <small className="absolute top-1 left-1 text-xs">
//               {element.number}
//             </small>
//             <small className="absolute bottom-1 left-1 text-xs truncate w-full text-center">
//               {element.name}
//             </small>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PeriodicTable;