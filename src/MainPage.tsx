// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import App from "./App";
 //import HomePage from "./components/HomePage";



// const MainPage: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-black flex items-center justify-center text-white">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold mb-6">Welcome to the Periodic Table Explorer</h1>
//         <p className="text-lg mb-8">Dive into the world of elements and discover their secrets!</p>
//         <button
//           onClick={() => navigate("/periodic-table")}
//           className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transform transition-transform"
//         >
//           View Periodic Table
//         </button>
//       </div>
//     </div>
//   );
// };

// const MainApp: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/periodic-table" element={<App />} />
//       </Routes>
//     </Router>
//   );
// };

// export default MainPage;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // Assuming App contains the periodic table
import HomePage from "./components/HomePage";

const MainPage: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/periodic-table" element={<App />} />
      </Routes>
    </Router>
  );
};

export default MainPage;