import { ArrowUpRight } from "lucide-react";

export default function About({ t, onImageOpen }) {
  return <section className="about-section section" id="about">
    <button className="about-visual artist-portrait image-trigger" type="button" onClick={() => onImageOpen?.({ src: "/assets/artist.jpg", alt: "NXRTHXRN artist portrait" })} aria-label="Open artist portrait"><img src="/assets/artist.jpg" alt="NXRTHXRN artist portrait"/><div className="portrait-glow"/><div className="portrait-frame"/><span className="visual-caption">FIG. 003 — ARTIST / NXRTHXRN</span></button>
    <div className="about-copy"><p className="eyebrow">{t.about.eyebrow}</p><h2 className="glitch-text" data-text={`${t.about.title1} ${t.about.title2} ${t.about.title3}`}>{t.about.title1}<br/>{t.about.title2} <em>{t.about.title3}</em></h2><div className="artist-identity"><strong>{t.about.name}</strong><span>{t.about.birth}</span></div><p>{t.about.bio1}</p><p>{t.about.bio2}</p><a className="text-link" href="https://t.me/nxrthxrn" target="_blank" rel="noreferrer">{t.about.follow} <ArrowUpRight size={15}/></a></div>
  </section>;
}
