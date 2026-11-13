import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero({ t, onImageOpen }) {
  return <section className="hero" id="home">
    <div className="hero-media" aria-hidden="true"><img src="/assets/hero-portal.jpg" alt=""/><div className="hero-media-wash"/></div>
    <div className="hero-grid"/><div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
    <div className="hero-content">
      <p className="eyebrow hero-kicker"><span className="status-dot"/> {t.hero.kicker}</p>
      <h1 className="hero-title glitch-text" data-text="NXRTHXRN" aria-label="NXRTHXRN"><span className="title-line">NXRTH<span>X</span>RN</span><span className="title-echo">NXRTHXRN</span><span className="title-ghost ghost-a">NXRTHXRN</span><span className="title-ghost ghost-b">NXRTHXRN</span></h1>
      <p className="hero-subtitle">{t.hero.subtitle}<br/><em>{t.hero.subtitle2}</em></p>
      <p className="hero-copy">{t.hero.copy}</p>
      <div className="hero-actions"><a className="button button-primary" href="#releases">{t.hero.explore} <ArrowDown size={15}/></a><a className="button button-ghost" href="https://t.me/nxrthxrn" target="_blank" rel="noreferrer">{t.hero.touch} <ArrowUpRight size={15}/></a></div>
    </div>
    <button className="hero-emblem image-trigger" type="button" onClick={() => onImageOpen?.({ src: "/assets/artist-logo.jpg", alt: "NXRTHXRN logo" })} aria-label="Open NXRTHXRN logo"><img src="/assets/artist-logo.jpg" alt="NXRTHXRN logo"/></button>
    <div className="hero-index"><span>01 / 04</span><span>{t.hero.index}</span></div><a className="scroll-cue" href="#releases"><span>{t.hero.scroll}</span><ArrowDown size={14}/></a>
  </section>;
}
