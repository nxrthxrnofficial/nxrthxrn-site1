import { X, ArrowUpRight } from "lucide-react";
export default function ReleaseModal({ t, release, onClose }) {
  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <section className="release-modal glass" role="dialog" aria-modal="true" aria-label={`${release.title} details`}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X/></button>
        <img className="modal-cover" src={release.cover} alt={`${release.title} artwork`}/>
        <div className="modal-info">
          <p className="eyebrow">{t.modal.release} {release.number} / {release.format}</p>
          <h2>{release.title}</h2><p className="modal-credit">{release.credit}</p>
          <p className="modal-description">{release.description}</p>
          <p className="pending-note">{t.modal.streaming}</p>
          <a className="button button-ghost" href="https://t.me/nxrthxrn" target="_blank" rel="noreferrer">{t.modal.updates} <ArrowUpRight size={15}/></a>
        </div>
      </section>
    </div>
  );
}
