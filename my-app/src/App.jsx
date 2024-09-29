import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import AppRoutes from "./components/Routes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <AppRoutes /> 
      </div>
    </Router>
  );
};

export default App;
