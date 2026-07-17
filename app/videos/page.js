"use client";

import { useState } from "react";

const videos = [
  {
    id: 1,
    title: "How To Start A Conversation (Even If You're Shy)",
    videoId: "mpwhmcDXvwQ",
    description:
      "Starting conversations doesn't have to be awkward. In this episode Hugh shares practical ways to build confidence and start talking to new people.",
    learn: [
      "Easy conversation starters",
      "How to overcome shyness",
      "Building confidence",
    ],
  },
  {
    id: 2,
    title: "What an 85-Year Study Says About Living a Happy Life",
    videoId: "wTlefqYvRnI",
    description:
      "Discover what one of the longest studies ever conducted found about happiness, relationships, and living a meaningful life.",
    learn: [
      "The biggest predictor of happiness",
      "Why relationships matter",
      "Simple ways to connect more",
    ],
  },
  {
    id: 3,
    title: "How to Be a Better Listener (Teen Communication Guide)",
    videoId: "1ZztanJAu88",
    description:
      "Listening is one of the most underrated social skills. Learn practical techniques to become someone people genuinely enjoy talking to.",
    learn: [
      "Active listening",
      "Making people feel heard",
      "Conversation habits to avoid",
    ],
  },
];

export default function VideosPage() {
  const [selected, setSelected] = useState(videos[0]);

  return (
    <main>
      <section className="page-header">
        <h1>Video Library</h1>
        <p>Full episodes and clips from the podcast, all in one place.</p>
      </section>

      <section className="video-carousel-section">
        <div className="video-carousel">
          {videos.map((v) => (
            <div
              className={`video-tile ${
                selected.id === v.id ? "active-video" : ""
              }`}
              key={v.id}
              onClick={() => setSelected(v)}
            >
              <div className="video-thumb-wrap">
                <img
                  className="video-thumb"
                  src={`https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`}
                  alt={v.title}
                />

                <div className="play-badge">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <polygon points="6,4 20,12 6,20" fill="white" />
                  </svg>
                </div>
              </div>

              <p className="video-tile-title">{v.title}</p>
            </div>
          ))}
        </div>

        <div className="video-details">
          <img
            className="video-details-thumb"
            src={`https://img.youtube.com/vi/${selected.videoId}/maxresdefault.jpg`}
            alt={selected.title}
          />

          <div className="video-details-content">
            <h2>{selected.title}</h2>

            <p>{selected.description}</p>

            <h3>You'll learn</h3>

            <ul>
              {selected.learn.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a
              href={`https://www.youtube.com/watch?v=${selected.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-button"
            >
              ▶ Watch on YouTube
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}