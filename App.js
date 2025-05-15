import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import VendorsSection from "./components/VendorsSection";
import Footer from "./components/Footer";
import ChatbotPage from "./components/ChatbotPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TestimonialsSection from "./components/TestimonialsSection";

// Customization Components
import RoleSelection from "./components/Customization/RoleSelection";
import BrideOptions from "./components/Customization/BrideOptions";
import CustomizeYourOwn from "./components/Customization/CustomizeYourOwn";
import PreDesigned from "./components/Customization/PreDesigned";
import CategoryGallery from './components/Customization/CategoryGallery';

function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturesSection />
                <TestimonialsSection />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <HeroSection />
                <FeaturesSection />
                <TestimonialsSection />
              </>
            }
          />
          <Route
            path="/explore"
            element={
              <>
                <div className="text-center py-20 text-4xl text-[#B17F6B]">
                  Explore Our Features
                </div>
                <FeaturesSection />
              </>
            }
          />
          <Route path="/vendors" element={<VendorsSection />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🧵 Customization Flow */}
          <Route path="/customization" element={<RoleSelection />} />
          <Route path="/bride" element={<BrideOptions />} />
          <Route path="/bride/customize" element={<CustomizeYourOwn />} />
          <Route path="/bride/pre-designed" element={<PreDesigned />} />
          <Route path="/bride/enhance/:category" element={<CategoryGallery />} />

          {/* Future Expansion */}
          <Route path="/groom" element={<div className="text-center py-40 text-3xl">Groom Customization Coming Soon</div>} />
          <Route path="/others" element={<div className="text-center py-40 text-3xl">Other Customization Coming Soon</div>} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
