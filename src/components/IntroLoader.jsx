import { useEffect, useState } from "react";

export default function IntroLoader({ onDone }) {
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    const exitTimer = window.setTimeout(() => setLeaving(true), 1900);
    const doneTimer = window.setTimeout(onDone, 2450);
    return () => { window.clearTimeout(exitTimer); window.clearTimeout(doneTimer); };
  }, [onDone]);
  return <div className={`intro-loader ${leaving ? "is-leaving" : ""}`} aria-label="Loading NXRTHXRN">
    <div className="intro-orbit orbit-one"/><div className="intro-orbit orbit-two"/>
    <div className="intro-core"><img src="/assets/artist-logo.jpg" alt="NXRTHXRN"/><span className="intro-scanline"/></div>
    <p className="intro-kicker">NXRTHXRN / SIGNAL 001</p>
    <h2 className="intro-welcome">Welcome to Oblivion of NXRTHXRN!</h2>
    <div className="intro-progress"><span/></div>
  </div>;
}
