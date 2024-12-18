import React from "react";

interface DetailsListProps {
  element: {
    atomic_mass?: number;
    electron_configuration?: number;
    electronegativity_pauling?: number;
    melt?: number;
    boil?: number;
    electron_affinity?: number;
    appearance?: number;
    block?: number;
    group?: string;
    density?: number;
    discovered_by?: number;
  };
}

const DetailsList: React.FC<DetailsListProps> = ({ element }) => {
  const displayValue = (value: number | string | undefined, unit: string = "") =>
    value !== undefined && value !== null ? `${value} ${unit}` : "N/A";

  return (
    <ul className="text-sm space-y-2">
      <li className="flex justify-between">
        <span className="text-gray-400">Weight:</span>
        <span>{displayValue(element.atomic_mass, "u")}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-400">Electron Configuration:</span>
        <span>{displayValue(element.electron_configuration)}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-400">Electronegativity:</span>
        <span>{displayValue(element.electronegativity_pauling)}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-400">Melting point:</span>
        <span>{displayValue(element.melt, "°C")}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-400">Boiling point:</span>
        <span>{displayValue(element.boil, "°C")}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-400">Electron affinity:</span>
        <span>{displayValue(element.electron_affinity, "kJ/mol")}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-400">Appearance:</span>
        <span>{displayValue(element.appearance)}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-400">Block:</span>
        <span>{displayValue(element.block)}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-400">Group:</span>
        <span>{element.group || "N/A"}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-400">Density:</span>
        <span>{displayValue(element.density, "kg/m³")}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-400">Discovered By:</span>
        <span>{displayValue(element.discovered_by)}</span>
      </li>
    </ul>
  );
};

export default DetailsList;
