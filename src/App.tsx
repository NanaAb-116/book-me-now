import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Customers from "./pages/Customers";

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/customers" element={<Customers />} />
        <Route path="/bookings" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
