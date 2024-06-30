import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AddYourListing from "./pages/add-your-listing/AddYourListing.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-listing" element={<AddYourListing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
