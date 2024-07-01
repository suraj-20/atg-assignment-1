import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AddYourListing from "./pages/add-your-listing/AddYourListing.jsx";
import { useEffect, useState } from "react";

function App() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-listing" element={<AddYourListing />}></Route>
      </Routes>
      {backToTop && (
        <button onClick={scrollUp} className="backToTopButton">
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      )}
    </BrowserRouter>
  );
}

export default App;
