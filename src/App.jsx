import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Discography from "./components/Discography.jsx";
import About from "./components/About.jsx";
import Label from "./components/Label.jsx";
import Footer from "./components/Footer.jsx";
import ReleaseModal from "./components/ReleaseModal.jsx";
import ImageLightbox from "./components/ImageLightbox.jsx";
import IntroLoader from "./components/IntroLoader.jsx";
import { translations } from "./data/translations.js";
import { releases } from "./data/releases.js";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [language, setLanguage] = useState(() => localStorage.getItem("nxrthxrn-language") || "en");
  const [loading, setLoading] = useState(true);
  const t = translations[language];
  const toggleLanguage = () => setLanguage((current) => { const next = current === "en" ? "ru" : "en"; localStorage.setItem("nxrthxrn-language", next); return next; });
  return (
    <>
      {loading && <IntroLoader onDone={() => setLoading(false)} />}
      <Navbar t={t} onToggleLanguage={toggleLanguage} />
      <main>
        <Hero t={t} onImageOpen={setLightbox} />
        <Label t={t} onImageOpen={setLightbox} />
        <About t={t} onImageOpen={setLightbox} />
        <Discography t={t} releases={releases} onSelect={setSelected} onImageOpen={setLightbox} />
      </main>
      <Footer t={t} />
      {selected && <ReleaseModal t={t} release={selected} onClose={() => setSelected(null)} />}
      {lightbox && <ImageLightbox image={lightbox} onClose={() => setLightbox(null)} />}
    </>
  );
}
