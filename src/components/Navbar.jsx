import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [["releases", "#releases"], ["about", "#about"], ["label", "#label"], ["contact", "#contact"]];
export default function Navbar({ t, onToggleLanguage }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="nav glass">
        <a className="wordmark" href="#home" aria-label="NXRTHXRN home">NXRTHXRN<span>®</span></a>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{t.nav[label]}</a>)}
          <button className="language-toggle glitch-control" type="button" onClick={onToggleLanguage} data-text={t.nav.language}>{t.nav.language}</button>
          <a className="nav-cta" href="https://t.me/nxrthxrn" target="_blank" rel="noreferrer">{t.nav.connect} <ArrowUpRight size={14}/></a>
        </div>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      </nav>
    </header>
  );
}
