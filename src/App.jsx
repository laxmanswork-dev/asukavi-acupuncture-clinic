import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookAppointment from "./pages/BookAppointment";

export default function App() {
  return (
    <div className="min-h-screen text-cream-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
