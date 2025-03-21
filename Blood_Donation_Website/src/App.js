import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DonorRegistrationPage from "./components/Donationform/DonorRegistrationPage";
import Home from "./components/Home/Home";
import AboutUs from "./components/About/AboutUs";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import ContactUs from "./components/Contactform/ContactUs";
import Blog from "./components/Blogpage/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonorRegistrationPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
