import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ElementCard from "./components/ElementCard";
import DetailsCard from "./components/DetailsCard";
import PeriodicTable from "./PeriodicTable";


const App: React.FC = () => {
  const [hoveredElement, setHoveredElement] = useState({
    name: "Hydrogen",
    symbol: "H",
    number: 1,
    category: "Reactive Nonmetals",
    atomicWeight: 1.008,
    electronegativity: 2.20,
    meltingPoint: -259.1,
    boilingPoint: -252.9,
    electronAffinity: 72.8,
    ionization: 1312.0,
    radius: 53,
    density: 0.0899,
    conductivity: 0.1805,
    color:"bg-red-500",
  });

  return (
    <Router>
      <Routes>
        {/* HomePage Route */}
        <Route path="/" element={<HomePage />} />

        {/* PeriodicTable Route */}
        <Route
          path="/periodic-table"
          element={
            <div className="h-screen bg-black flex text-white">
              
              <div className="flex flex-col p-4 w-1/4 bg-black">
                {/* ElementCard */}
                <div className="mb-4">
                  <ElementCard
                    atomicNumber={hoveredElement.number}
                    symbol={hoveredElement.symbol}
                    name={hoveredElement.name}
                    atomicWeight={hoveredElement.atomicWeight}
                    color={hoveredElement.color}
                  />
                </div>
                {/* DetailsCard */}
                <DetailsCard element={hoveredElement} />
              </div>

              {/* Periodic Table */}
              <div className="flex-1 flex items-center justify-center bg-black">
                <PeriodicTable setHoveredElement={setHoveredElement} />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
    
    
    
