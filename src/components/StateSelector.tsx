import React, { useState, useEffect } from "react";

interface StateSelectorProps {
  meltingPoint?: number;  
  boilingPoint?: number; 
}

const StateSelector: React.FC<StateSelectorProps> = ({
  meltingPoint = 0,
  boilingPoint = 100,
}) => {
  const [temperature, setTemperature] = useState<number>(0);
  const [unit, setUnit] = useState<string>("°C");
  const [state, setState] = useState<string>("Solid");

  //  convert temperature
  const convertTemperature = (temp: number, toUnit: string) => {
    if (toUnit === "°F") return (temp * 9) / 5 + 32;
    if (toUnit === "K") return temp + 273.15;
    return temp; 
  };

  //  state 
  const determineState = (temp: number, unit: string) => {
    const tempInCelsius =
      unit === "°F"
        ? ((temp - 32) * 5) / 9
        : unit === "K"
        ? temp - 273.15
        : temp;

    if (tempInCelsius < meltingPoint) return "Solid";
    if (tempInCelsius >= boilingPoint) return "Gas";
    return "Liquid";
  };

  useEffect(() => {
    const newState = determineState(temperature, unit);
    setState(newState);
  }, [temperature, unit, meltingPoint, boilingPoint]);

  return (
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-400">State at</span>
      <div className="flex items-center space-x-1">
        
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
          className="w-12 bg-gray-800 text-white border border-gray-700 rounded px-1 py-0.5 text-center text-sm"
        />

        {/* Dropdown  */}
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 rounded px-1 py-0.5 text-sm"
        >
          <option value="°C">°C</option>
          <option value="°F">°F</option>
          <option value="K">K</option>
        </select>
      </div>
      <span className="text-white">{state}</span>
    </div>
  );
};

export default StateSelector;
