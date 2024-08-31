import { 
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom"

import Home from "./pages/home/home";
import Myths from "./pages/myths/myths";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Quiz from "./pages/quiz/quiz";

import Navbar from "./components/navBar";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myths" element={<Myths />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>    
        </div>
      <Footer />
    </Router>
  );
}

export default App;