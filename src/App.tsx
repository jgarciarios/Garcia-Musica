import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Recorrido from "./components/Recorrido";
import Pilares from "./components/Pilares";
import ProyectosProios from "./components/ProyectosProios";
import Producciones from "./components/Producciones";
import Colaboraciones from "./components/Colaboraciones";
import YouTubeSection from "./components/YouTubeSection";
import ShowsEnVivo from "./components/ShowsEnVivo";
import BandExperience from "./components/BandExperience";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { LangProvider } from "./context/LangContext";

export default function App() {
  return (
    <LangProvider>
      <ScrollProgress />
      <CustomCursor />
      <div className="min-h-screen bg-white text-black">
        <Nav />
        <main>
          <Hero />
          <Recorrido />
          <Pilares />
          <ProyectosProios />
          <Producciones />
          <Colaboraciones />
          <YouTubeSection />
          <ShowsEnVivo />
          <BandExperience />
          <Blog />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
