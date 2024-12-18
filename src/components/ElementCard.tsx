import React from 'react';

interface ElementCardProps {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicWeight: number;
  color: string; 
}

const calculateElectronConfiguration = (atomicNumber: number): number[] => {
  const shells = [2, 8, 18, 32, 50, 72]; // Max electrons per shell
  const configuration: number[] = [];
  let remainingElectrons = atomicNumber;

  for (const maxElectrons of shells) {
    if (remainingElectrons > 0) {
      const electronsInShell = Math.min(remainingElectrons, maxElectrons);
      configuration.push(electronsInShell);
      remainingElectrons -= electronsInShell;
    } else {
      break;
    }
  }

  return configuration;
};

const ElementCard: React.FC<ElementCardProps> = ({
  atomicNumber,
  symbol,
  name,
  atomicWeight,
  color,
}) => {
  const electronConfiguration = calculateElectronConfiguration(atomicNumber);

  return (
    <div className={`p-4 w-32 h-40 flex flex-col relative rounded-lg shadow-md ${color}`}>
      {/*  Electron Configuration */}
      <div className="flex justify-between w-full text-white text-sm">
        <span>{atomicNumber}</span>
        <div className="flex flex-col items-end space-y-1">
          {electronConfiguration.map((electrons, index) => (
            <div key={index} className="text-xs">
              {electrons}
            </div>
          ))}
        </div>
      </div>

      {/* Symbol and Name Left alignment */}
      <div className="absolute top-10 left-2 text-left">
        <div className="text-4xl font-bold">{symbol}</div>
        <div className="text-blue-300 underline text-sm mt-1">{name}</div>
      </div>

      
      <div className="absolute bottom-2 left-2 text-sm">
        {atomicWeight}
      </div>
    </div>
  );
};

export default ElementCard;
