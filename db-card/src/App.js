import React from "react";
import "./App.css";
import CTASection from "./Components/CTASection";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import ProfileName from "./Components/ProfileName";
import ProfilePic from "./Components/ProfilePic";

function App() {
  return (
    <div className="container">
      <ProfilePic />
      <section>
        <ProfileName />
        <CTASection />
        <Description />
        <Footer />
      </section>
    </div>
  );
}

export default App;
