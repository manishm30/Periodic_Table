import React from "react";
import StateSelector from "./StateSelector";
import DetailsList from "./DetailsList";

interface ElementDetails {
  name: string;
  symbol: string;
  number: number;
  category: string;
  stateAt?: string;
  atomic_mass?: number;
  electron_configuration?: number;
  electronegativity_pauling?: number;
  melt?: number;
  boil?: number;
  electron_affinity?: number;
  ionization_energies?: number;
  block?: number;
  group?: string;
  density?: number;
  discovered_by?: number;
}

interface DetailsCardProps {
  element: ElementDetails;
}

const DetailsCard: React.FC<DetailsCardProps> = ({ element }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md w-80">
      <h2 className="text-md font-semibold text-gray-400 mb-4">
        {element.category || "Unknown Category"}
      </h2>

      {/* State Selector */}
      
      <StateSelector meltingPoint={element.melt} boilingPoint={element.boil} />

      
      <hr className="border-gray-700 mb-2" />

      
      <DetailsList element={element} />

      
    </div>
  );
};

export default DetailsCard;
