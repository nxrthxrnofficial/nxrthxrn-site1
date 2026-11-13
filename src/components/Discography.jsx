import { ArrowUpRight } from "lucide-react";
import ReleaseCard from "./ReleaseCard.jsx";

export default function Discography({ t, releases, onSelect, onImageOpen }) {
  return <section className="section releases-section" id="releases">
    <div className="section-heading"><div><p className="eyebrow">{t.discography.eyebrow}</p><h2>{t.discography.title}<span className="heading-dot">.</span></h2></div><p className="section-note">{t.discography.note}<br/>{t.discography.note2}</p></div>
    <div className="release-grid">{releases.map((release) => <ReleaseCard key={release.number} release={release} onClick={() => onSelect(release)} onImageOpen={onImageOpen} />)}</div>
    <div className="section-foot"><span>{t.discography.catalogue}</span><span>{t.discography.more} <ArrowUpRight size={13}/></span></div>
  </section>;
}
