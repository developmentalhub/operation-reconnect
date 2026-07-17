"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const challenges = [
  {
    id: 1,
    title: "The First Hello",
    description: "Say hello to someone you normally wouldn't talk to.",
    points: 10,
    difficulty: "Easy",
    tone: "green",
  },
  {
    id: 2,
    title: "The Curiosity Challenge",
    description: "Ask someone a question you've never asked before.",
    points: 15,
    difficulty: "Medium",
    tone: "yellow",
  },
  {
    id: 3,
    title: "The Compliment Challenge",
    description: "Give someone a genuine compliment today.",
    points: 10,
    difficulty: "Easy",
    tone: "green",
  },
  {
    id: 4,
    title: "The Phone Down Challenge",
    description: "Have a conversation without checking your phone.",
    points: 20,
    difficulty: "Hard",
    tone: "coral",
  },
  {
    id: 5,
    title: "Remember Their Name",
    description: "Learn someone's name and use it in conversation.",
    points: 15,
    difficulty: "Medium",
    tone: "blue",
  },
  {
    id: 6,
    title: "The Listen Challenge",
    description: "Focus on listening more than talking.",
    points: 20,
    difficulty: "Medium",
    tone: "yellow",
  },
  {
    id: 7,
    title: "The Invite Challenge",
    description: "Invite someone to join you in an activity.",
    points: 25,
    difficulty: "Hard",
    tone: "coral",
  },
  {
    id: 8,
    title: "Find A Similarity",
    description: "Find something you have in common with someone new.",
    points: 15,
    difficulty: "Easy",
    tone: "green",
  },
  {
    id: 9,
    title: "The Brave Question",
    description: "Ask a question that helps you understand someone better.",
    points: 25,
    difficulty: "Hard",
    tone: "coral",
  },
  {
    id: 10,
    title: "The Small Wave",
    description: "Wave or smile at someone you normally walk past.",
    points: 10,
    difficulty: "Easy",
    tone: "green",
  },
  {
    id: 11,
    title: "The Story Swap",
    description: "Share a story and ask someone to share one back.",
    points: 20,
    difficulty: "Medium",
    tone: "blue",
  },
  {
    id: 12,
    title: "The Group Challenge",
    description: "Start a conversation when you are in a group.",
    points: 30,
    difficulty: "Hard",
    tone: "coral",
  },
  {
    id: 13,
    title: "The Thank You Challenge",
    description: "Thank someone and explain why you appreciate them.",
    points: 15,
    difficulty: "Easy",
    tone: "yellow",
  },
  {
    id: 14,
    title: "The Connector Challenge",
    description: "Introduce two people who could become friends.",
    points: 40,
    difficulty: "Expert",
    tone: "blue",
  },
];

function getLevel(points) {
  if (points >= 1000) {
    return { level: 5, name: "Reconnect Leader", next: null };
  }

  if (points >= 500) {
    return { level: 4, name: "Community Creator", next: 1000 };
  }

  if (points >= 250) {
    return { level: 3, name: "Confidence Builder", next: 500 };
  }

  if (points >= 100) {
    return { level: 2, name: "Conversation Starter", next: 250 };
  }

  return {
    level: 1,
    name: "New Connector",
    next: 100,
  };
}

export default function ChallengesPage() {
  const [points, setPoints] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [newLevel, setNewLevel] = useState(null);

  useEffect(() => {
    const savedPoints = localStorage.getItem("reconnectPoints");
    const savedCompleted = localStorage.getItem("reconnectCompleted");

    if (savedPoints) {
      setPoints(Number(savedPoints));
    }

    if (savedCompleted) {
      setCompleted(JSON.parse(savedCompleted));
    }
  }, []);

  const currentLevel = getLevel(points);

  function completeChallenge(challenge) {
    if (completed.includes(challenge.id)) return;

    const oldLevel = getLevel(points).level;

    const newPoints = points + challenge.points;
    const newCompleted = [...completed, challenge.id];

    setPoints(newPoints);
    setCompleted(newCompleted);

    localStorage.setItem("reconnectPoints", newPoints);
    localStorage.setItem(
      "reconnectCompleted",
      JSON.stringify(newCompleted)
    );

    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });

    const updatedLevel = getLevel(newPoints);

    if (updatedLevel.level > oldLevel) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setTimeout(() => {
        setNewLevel(updatedLevel);
        setShowLevelUp(true);

        confetti({
          particleCount: 350,
          spread: 180,
          origin: { y: 0.3 },
        });
      }, 500);
    }
  }

  function resetProgress() {
    setPoints(0);
    setCompleted([]);

    localStorage.removeItem("reconnectPoints");
    localStorage.removeItem("reconnectCompleted");
  }
 return (
  <>
    {showLevelUp && newLevel && (
      <div className="levelup-overlay">
        <div className="levelup-card">

          <div className="levelup-small">
            ⭐ LEVEL UP!
          </div>

          <h1>
            Level {newLevel.level}
          </h1>

          <h2>
            {newLevel.name}
          </h2>

          <p>
            You've unlocked a new Reconnect level!
            <br />
            Keep completing challenges to become an even better connector.
          </p>

          <button
            className="levelup-button"
            onClick={() => setShowLevelUp(false)}
          >
            Awesome!
          </button>

        </div>
      </div>
    )}

    <main>

      <section className="challenge-hero">

        <h1>Reconnect Challenges</h1>

        <p>
          Small actions. Bigger connections.
        </p>

        <div className="challenge-score">

          <h2>{points} XP</h2>

          <p>
            Level {currentLevel.level}: {currentLevel.name}
          </p>

          <div className="xp-bar">
            <span
              style={{
                width: `${
                  currentLevel.next
                    ? Math.min(
                        (points / currentLevel.next) * 100,
                        100
                      )
                    : 100
                }%`,
              }}
            />
          </div>

          {currentLevel.next && (
            <small>
              {currentLevel.next - points} XP until next level
            </small>
          )}

          <button
            className="reset-button"
            onClick={resetProgress}
          >
            Restart Journey
          </button>

        </div>

      </section>

      <section className="challenge-grid">

        {challenges.map((challenge) => (

          <div
            key={challenge.id}
            className={`challenge-card tone-${challenge.tone}`}
          >

            <span className="difficulty">
              {challenge.difficulty}
            </span>

            <h2>{challenge.title}</h2>

            <p>{challenge.description}</p>

            <strong>
              +{challenge.points} XP
            </strong>

            <button
              onClick={() => completeChallenge(challenge)}
              disabled={completed.includes(challenge.id)}
            >
              {completed.includes(challenge.id)
                ? "Completed"
                : "Complete Challenge"}
            </button>

          </div>

        ))}

             </section>


        <section className="how-it-works">

          <div className="how-header">
            <h2>
              How Operation Reconnect Works
            </h2>

            <p>
              Small steps that help you build confidence,
              start conversations, and create real connections.
            </p>
          </div>


          <div className="how-grid">


            <div className="how-card tone-coral">

              <span>
                01
              </span>

              <h3>
                Pick A Mission
              </h3>

              <p>
                Choose a challenge, watch a video, or listen to a podcast that helps you connect.
              </p>

            </div>



            <div className="how-card tone-yellow">

              <span>
                02
              </span>

              <h3>
                Take Action
              </h3>

              <p>
                Use what you learn in real life and start building stronger relationships.
              </p>

            </div>



            <div className="how-card tone-green">

              <span>
                03
              </span>

              <h3>
                Reconnect
              </h3>

              <p>
                Build confidence, find your people, and help create better communities.
              </p>

            </div>


          </div>


           </section>


        <section className="how-it-works">

          <div className="how-header">
            <h2>
              How Operation Reconnect Works
            </h2>

            <p>
              Small steps that help you build confidence,
              start conversations, and create real connections.
            </p>
          </div>


          <div className="how-grid">


            <div className="how-card tone-coral">

              <span>
                01
              </span>

              <h3>
                Pick A Mission
              </h3>

              <p>
                Choose a challenge, watch a video, or listen to a podcast that helps you connect.
              </p>

            </div>



            <div className="how-card tone-yellow">

              <span>
                02
              </span>

              <h3>
                Take Action
              </h3>

              <p>
                Use what you learn in real life and start building stronger relationships.
              </p>

            </div>



            <div className="how-card tone-green">

              <span>
                03
              </span>

              <h3>
                Reconnect
              </h3>

              <p>
                Build confidence, find your people, and help create better communities.
              </p>

            </div>


          </div>


        </section>

      </main>
    </>
  );
}    

