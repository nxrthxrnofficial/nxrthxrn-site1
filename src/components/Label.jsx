import { ArrowUpRight } from "lucide-react";

const socials = [
  ["Telegram Channel", "https://t.me/echoes_on_tape", "01"],
  ["Instagram", "https://www.instagram.com/echoes.on.tape?xtok=dTRycGJvbjdrNW1t&utm_source=qr", "02"],
  ["YouTube", "https://youtube.com/@echoesontape?si=PtcbXHfzCipT_Elo", "03"]
];

export default function Label({ t, onImageOpen }) {
  const isRu = t.label.lead.startsWith("Независимый");
  const essay = isRu ? ["Echoes On Tape — независимый музыкальный лейбл и творческая платформа, посвящённая Atmospheric Phonk, Ambient и экспериментальной электронной музыке.", "Мы создаём пространство для артистов, которые развивают собственный звук, сохраняют творческую независимость и выходят за границы привычных музыкальных форматов.", "Наша философия строится на атмосфере, эмоциональной глубине и бескомпромиссном внимании к деталям. Мы ценим музыку, которая создаёт собственный мир — от меланхоличных мелодий и масштабных текстур до глубокого баса и ритмической энергии.", "Echoes On Tape объединяет не только музыку, но и людей, которые стоят за ней. Наша миссия — поддерживать независимых артистов, находить новые таланты и развивать сообщество единомышленников.", "Мы строим музыкальную экосистему, соединяющую артистов, релизы, слушателей и ресурсы для продюсеров. Это пространство, где творчество встречается с технологиями, а уникальный личный звук находит свою аудиторию.", "Мы не стремимся следовать мимолётным музыкальным трендам. Мы создаём среду для тех, кто воспринимает музыку глубже.", "Echoes On Tape — звук, который никогда не исчезает."] : ["Echoes On Tape is an independent music label and creative platform dedicated to Atmospheric Phonk, Ambient, and experimental electronic music.", "We provide a space for artists who strive to evolve their own sound, maintain creative independence, and transcend the boundaries of conventional musical formats.", "Our philosophy is rooted in atmosphere, emotional depth, and an uncompromising attention to detail. We value music that constructs its own world—from melancholic melodies and expansive textures to deep bass and rhythmic energy.", "Echoes On Tape brings together not just music, but the people behind it. Our mission is to support independent artists, discover new talent, and foster a community of like-minded individuals.", "We are building a musical ecosystem that connects artists, releases, listeners, and resources for producers. It is a space where creativity meets technology, and where a unique, personal sound can find its audience.", "We do not seek to follow fleeting musical trends. Instead, we aim to cultivate an environment for those who experience music on a deeper level.", "Echoes On Tape — a sound that never fades."];
  const development = isRu ? ["Echoes On Tape сейчас находится в активной разработке.", "Мы дорабатываем платформу, её функции и визуальную идентичность, чтобы финальный проект полностью отражал нашу философию.", "Дата официального запуска будет объявлена позже.", "Следите за нашими социальными сетями, чтобы первыми узнать о запуске платформы.", "Сигнал вернётся. Оставайтесь на связи."] : ["Echoes On Tape is currently under active development.", "We are refining the platform, its features, and its visual identity to ensure that the final project fully embodies our core philosophy.", "The official launch date will be announced in due course.", "Follow our social media channels to be the first to know when the platform goes live.", "The signal will return. Stay tuned."];
  return (
    <section className="label-section section" id="label">
      <div className="label-panel glass">
        <div className="label-topline"><span>{t.label.topline}</span><span>EST. — 202X</span></div>
        <div className="label-main">
          <div className="label-brand">
            <button className="label-logo-wrap image-trigger" type="button" onClick={() => onImageOpen?.({ src: "/assets/label-logo.jpg", alt: "Echoes On Tape logo" })} aria-label="Open Echoes On Tape logo"><img src="/assets/label-logo.jpg" alt="Echoes On Tape logo" /></button>
            <div><p className="eyebrow">{t.label.founded}</p><h2 className="glitch-text" data-text="ECHOES ON TAPE">ECHOES<br/><span>ON TAPE</span></h2></div>
          </div>
          <div className="label-description">
            <p className="label-lead">{t.label.lead}</p><div className="label-essay">{essay.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="development-copy">
              <strong>{t.label.dev}</strong>{development.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <span className="development-pill"><i/> {t.label.dev}</span>
          </div>
        </div>
        <div className="label-bottom">
          <p>{t.label.launch}</p>
          <div className="social-list">{socials.map(([name, url, n], index) => <a href={url} target="_blank" rel="noreferrer" key={name}><span>{n}</span>{t.label.channels[index]}<ArrowUpRight size={15}/></a>)}</div>
        </div>
      </div>
    </section>
  );
}
