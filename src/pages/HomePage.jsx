import Hero from "../components/Hero";
import About from "../components/About";
import Spotlight from "../components/Spotlight";
import Services from "../components/Services";
import Wellness from "../components/Wellness";
import BookAppointment from "./BookAppointment";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Spotlight />
      <Services />
      <Wellness />
      <BookAppointment />
    </>
  );
}
