import { 
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom"

import Home from "./pages/home/home";
import Myths from "./pages/myths/myths";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myths" element={<Myths />} />
          </Routes>    
        </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;