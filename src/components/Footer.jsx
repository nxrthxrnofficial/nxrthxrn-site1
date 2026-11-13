import { ArrowUpRight, ArrowUp, Mail, Send } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className="footer section" id="contact">
      <div className="footer-main">
        <p className="eyebrow">{t.footer.eyebrow}</p>
        <h2 className="glitch-text" data-text={`${t.footer.stay} ${t.footer.loop}`}>{t.footer.stay}<br/><em>{t.footer.loop}</em></h2>
        <div className="contact-grid">
          <a href="https://t.me/nxrthxrn" target="_blank" rel="noreferrer"><Send size={16}/> {t.footer.telegram} <ArrowUpRight size={14}/></a>
          <a href="https://www.youtube.com/@nxrthxrn_official" target="_blank" rel="noreferrer"><span className="contact-glyph">YT</span> YouTube <ArrowUpRight size={14}/></a>
          <a href="https://www.instagram.com/nxrthxrn_music?cplk=MWFibDU4dnptbXl0bQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><span className="contact-glyph">IG</span> Instagram <ArrowUpRight size={14}/></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nxrthxrnofficial@gmail.com" target="_blank" rel="noreferrer"><Mail size={16}/> nxrthxrnofficial@gmail.com <ArrowUpRight size={14}/></a>
          <a href="https://t.me/ax0nne" target="_blank" rel="noreferrer"><Send size={16}/> {t.footer.manager} · @ax0nne <ArrowUpRight size={14}/></a>
        </div>
      </div>
      <div className="footer-bottom"><a className="wordmark" href="#home">NXRTHXRN<span>®</span></a><span>INDEPENDENT. BY DESIGN.</span><a href="#home" className="back-top">{t.footer.back} <ArrowUp size={13}/></a><span>© {new Date().getFullYear()} NXRTHXRN</span></div>
    </footer>
  );
}
