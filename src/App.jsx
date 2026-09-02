import { Route, Routes } from "react-router-dom";
import "./App.css";
import IntroExperience from "./components/IntroExperience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import HomePage from "./pages/HomePage";
import BookAppointment from "./pages/BookAppointment";
import TraditionalAcupuncture from "./pages/TraditionalAcupuncture";

export default function App() {
  return (
    <div className="min-h-screen text-cream-50">
      <IntroExperience />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route
            path="/treatments/traditional-acupuncture"
            element={<TraditionalAcupuncture />}
          />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
