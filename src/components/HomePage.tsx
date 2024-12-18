import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleViewTable = () => {
    // Set a session flag before navigating
    sessionStorage.setItem("navigatedToPeriodicTable", "true");
    navigate("/periodic-table");
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-800 to-green-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-6 animate-bounce">
        Welcome to the Periodic Table Explorer
      </h1>
      <p className="text-lg mb-8">
        Discover the elements in a visually interactive periodic table!
      </p>
      <button
        onClick={handleViewTable}
        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg transition transform hover:scale-110"
      >
        View the Periodic Table
      </button>
    </div>
  );
};

export default HomePage;





// import React from "react";
// import { useNavigate } from "react-router-dom";

// const HomePage: React.FC = () => {
//   const navigate = useNavigate();

//   const handleViewTable = () => {
//      navigate("/periodic-table");
//     //navigate('/periodic-table', { state: { fromHomePage: true } });
//   };

//   return (
//     <div className="h-screen bg-gradient-to-br from-blue-800 to-green-900 flex flex-col items-center justify-center text-white">
//       <h1 className="text-5xl font-bold mb-6 animate-bounce">Welcome to the Periodic Table Explorer</h1>
//       <p className="text-lg mb-8">Discover the elements in a visually interactive periodic table!</p>
//       <button
//         onClick={handleViewTable}
//         className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg transition transform hover:scale-110"
//       >
//         View the Periodic Table
//       </button>
//     </div>
//   );
// };

// export default HomePage;