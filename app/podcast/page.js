'use client';

import { useState } from 'react';
import Reveal from '../components/Reveal';
import styles from './podcast.module.css';

const EPISODES = [
  { id: '6x1uJsqaue9rTdeuPkfY4w', title: 'Finding YOUR People', desc: 'Sometimes all you need is a friend. But where do you find them, and who are they? That is what we are uncovering today.' },
  { id: '7DLAHOvksPc2gOjRA1Q3Xv', title: 'How to Improve Teenagers Social Skills', desc: 'The practical stuff nobody actually teaches you about talking to people and reading a room.' },
  { id: '3dmVQla0QktiDCqvewFIMl', title: 'The Happiness Research Project', desc: 'What the research actually says about helping teenagers be happier, broken down without the lecture.' },
  { id: '4YrsOdNTBYmB2GVCldWuYi', title: 'Small Talk', desc: 'How to start a conversation from nothing, and why small talk is not as pointless as it feels.' },
];

const GOAL = 100;
const SHOW_URL = 'https://open.spotify.com/show/033K1hckY5wwnvKZNW7nVC';
const NOTE_COLORS = ['#ffd23f', '#00d9a3', '#ff2d55', '#2d5bff'];
const EMBED_BASE = 'https://open.spotify.com/embed/episode/';

export default function PodcastPage() {
  const [playing, setPlaying] = useState(0);

  const count = EPISODES.length;
  const percent = Math.max(2, Math.round((count / GOAL) * 100));
  const current = EPISODES[playing];
  const remaining = GOAL - count;
  const embedSrc = EMBED_BASE + current.id + '?utm_source=generator&theme=0';

  function epNumber(i) {
    return String(count - i).padStart(2, '0');
  }

  function cardClass(i) {
    let cls = styles.card;
    if (playing === i) cls = cls + ' ' + styles.isPlaying;
    cls = cls + ' ' + (i % 2 === 0 ? styles.tiltL : styles.tiltR);
    return cls;
  }

  return (
    <main className={styles.pod}>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Operation Reconnect</p>
          <h1 className={styles.h1}>The <span className={styles.hl}>Podcast</span></h1>
          <p className={styles.sub}>A podcast for teenagers, by a teenager. Social skills, connecting with friends and family, building the confidence to talk to people, and learning to believe in yourself.</p>
          <p className={styles.note}>honest chats, zero cringe</p>
        </div>
      </section>

      <div className={styles.layout}>

        <aside className={styles.sidebar}>
          <div className={styles.tracker}>
            <p className={styles.trackerLabel}>The 100 Episode Mission</p>
            <div className={styles.trackerCount}>
              <span className={styles.big}>{count}</span>
              <span className={styles.slash}>/{GOAL}</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.fill} style={{ width: percent + '%' }}></div>
            </div>
            <p className={styles.trackerNote}>just getting started</p>
            <div className={styles.trackerDivider}></div>
            <p className={styles.trackerSub}>{remaining} to go. Subscribe so you never miss one.</p>
            <a className={styles.trackerBtn} href="/subscribe">Get the newsletter</a>
            <a className={styles.trackerLink} href={SHOW_URL} target="_blank" rel="noopener noreferrer">Follow on Spotify</a>
          </div>
        </aside>

        <div className={styles.episodes}>

          <Reveal>
            <section className={styles.player}>
              <div className={styles.playerHead}>
                <div className={styles.waveform} aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div>
                  <p className={styles.playerLabel}>Now playing</p>
                  <h2 className={styles.playerTitle}>{current.title}</h2>
                </div>
              </div>
              <div className={styles.embed}>
                <iframe key={current.id} title={current.title} src={embedSrc} width="100%" height="232" frameBorder="0" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
            </section>
          </Reveal>

          <h2 className={styles.gridHeading}>All episodes</h2>

          <div className={styles.grid}>
            {EPISODES.map(function (ep, i) {
              return (
                <Reveal key={ep.id}>
                  <article className={cardClass(i)}>
                    <div className={styles.stickyNote} style={{ background: NOTE_COLORS[i % NOTE_COLORS.length] }}>Ep. {epNumber(i)}</div>
                    <h3 className={styles.cardTitle}>{ep.title}</h3>
                    <p className={styles.cardDesc}>{ep.desc}</p>
                    <button className={styles.cardBtn} onClick={() => setPlaying(i)}>{playing === i ? 'Playing' : 'Play episode'}</button>
                  </article>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </main>
  );
}
