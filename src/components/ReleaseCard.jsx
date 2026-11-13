import { ArrowUpRight } from "lucide-react";
export default function ReleaseCard({ release, onClick, onImageOpen }) {
  return (
    <button className="release-card" onClick={onClick}>
      <div className="cover-wrap">
        <img src={release.cover} alt={`${release.title} cover artwork`} loading="lazy" onClick={(event) => { event.stopPropagation(); onImageOpen?.({ src: release.cover, alt: `${release.title} cover artwork` }); }}/>
        <div className="cover-overlay"><span>VIEW RELEASE</span><ArrowUpRight size={18}/></div>
        <span className="release-number">{release.number}</span>
      </div>
      <div className="release-meta">
        <div><h3>{release.title}</h3><p>{release.credit}</p></div>
        <span className="format-tag">{release.format}</span>
      </div>
    </button>
  );
}
