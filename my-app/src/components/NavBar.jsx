// // import Home from "../pages/Home"
// // import About from "../pages/About"
// import { Link } from "react-router-dom"

// function NavBar() {
//   return (
//     <div>
//       {/* <Home/>
//       <About/> */}
//       <Link to={"/home"}>Home</Link>
//       <Link to={"/about"}>about</Link>
//     </div>
//   )
// }

// export default NavBar

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">React Router</h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>


        <ul className="hidden md:flex space-x-4">
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/camp-info">Camp Info</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>

    
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4`}>
        <ul className="flex flex-col space-y-2">
          <li><Link to="/camp-info" onClick={() => setIsOpen(false)}>Camp Info</Link></li>
          <li><Link to="/register" onClick={() => setIsOpen(false)}>Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

