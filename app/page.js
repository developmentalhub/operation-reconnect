import Link from 'next/link';
import Reveal from './components/Reveal';
import Mascot from './components/Mascot';

const SUPABASE_URL =
  'https://xndrmmqkoxntgabpsyld.supabase.co/storage/v1/object/public/site-images';

const stops = [
  {
    href: '/podcast',
    label: 'Podcast',
    tone: 'coral',
    img: `${SUPABASE_URL}/podcast-photo.png`,
    type: 'photo',
  },
  {
    href: '/videos',
    label: 'Videos',
    tone: 'blue',
    img: `${SUPABASE_URL}/videos-photo.png`,
    type: 'photo',
  },
  {
    href: '/webinars',
    label: 'Webinars',
    tone: 'yellow',
    img: `${SUPABASE_URL}/webinars-sticker.png`,
    type: 'illustration',
  },
  {
  href: '/challenges',
  label: 'Challenges',
  tone: 'green',
 img: `${SUPABASE_URL}/challenges-sticker.png`,
  type: 'illustration',
},
  
];

const marqueeWords = [
  'MAKE FRIENDS',
  'BUILD CONFIDENCE',
  'FIND YOUR PEOPLE',
  'SHOW UP FOR REAL',
];

export default function Home() {
  return (
    <>
      <section className="hero-full">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Hey!</h1>

            <p className="hero-sub">
              Making friends shouldn't feel like a mission. Operation Reconnect
              is about finding the right people — not just any people — in a
              world that makes it weirdly hard to.
            </p>

            <p className="hand-note">↖ come say hi</p>
          </div>

          <div className="hero-mascot">
            <Mascot src={`${SUPABASE_URL}/hero-mascot.png`} />
          </div>
        </div>

        <svg
          className="cloud-divider"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,64 C240,120 480,0 720,48 C960,96 1200,32 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="marquee-item">
              {word}
              <span className="marquee-dot">●</span>
            </span>
          ))}
        </div>
      </div>

      <main>
        <section className="explore">
          <div className="stop-grid">
            {stops.map((stop, i) => (
              <Reveal key={stop.label} delay={i * 100}>
                <Link
                  href={stop.href}
                  className={`stop-sticker tone-${stop.tone} rot-${i}`}
                >
                  <span className={`stop-frame frame-${stop.type}`}>
                    <img className="stop-img" src={stop.img} alt="" />
                  </span>

                  <span className="stop-label">{stop.label}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

       <section className="about-hugh">
  <div className="about-photo">
    <img
      src={`${SUPABASE_URL}/website-photo.png`}
      alt="Hugh, creator of Operation Reconnect"
    />
  </div>

          <div className="about-content">
            <h2>Meet Hugh</h2>

            <p>
              I'm Hugh, a teenager who wondered why making friends and starting
              conversations can sometimes feel so difficult.
            </p>

            <p>
              I created Operation Reconnect to help people build confidence,
              understand each other better, and create stronger communities.
            </p>

            <p>
              Through podcasts, videos, challenges, and workshops, I'm exploring
              the skills behind real connection and sharing them with teenagers,
              teachers, and anyone who wants to feel more connected.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
