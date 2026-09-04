import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import IntroExperience from "./components/IntroExperience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import BookAppointment from "./pages/BookAppointment";

// BookAppointment is already pulled into the homepage bundle (HomePage
// embeds it directly as its final section), so lazy-loading it here would
// save nothing. TraditionalAcupuncture isn't embedded anywhere else --
// code-splitting it keeps its 20+ modality images and filtering logic out
// of the initial homepage payload entirely, only fetched when someone
// actually navigates there.
const TraditionalAcupuncture = lazy(() => import("./pages/TraditionalAcupuncture"));

export default function App() {
  return (
    <div className="min-h-screen text-cream-50">
      <ScrollToTop />
      <IntroExperience />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route
            path="/treatments/traditional-acupuncture"
            element={
              <Suspense fallback={null}>
                <TraditionalAcupuncture />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
      <CallButton />
      <WhatsAppButton />
    </div>
  );
}
