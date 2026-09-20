"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import ChallengeGroupJoin from "../components/ChallengeGroupJoin";

const challenges = [
  {
    id: 1,
    title: "The First Hello",
    description:
      "Say hello to someone you normally wouldn't talk to.",
    points: 10,
    difficulty: "Easy",
    tone: "yellow",
  },
  {
    id: 2,
    title: "The Curiosity Challenge",
    description:
      "Ask someone a question you've never asked before.",
    points: 15,
    difficulty: "Easy",
    tone: "green",
  },
  {
    id: 3,
    title: "The Compliment Challenge",
    description:
      "Give someone a genuine compliment and mean it.",
    points: 10,
    difficulty: "Easy",
    tone: "coral",
  },
  {
    id: 4,
    title: "The Phone Down Challenge",
    description:
      "Have a conversation without checking your phone.",
    points: 20,
    difficulty: "Medium",
    tone: "blue",
  },
  {
    id: 5,
    title: "Remember Their Name",
    description:
      "Learn someone's name and use it in conversation.",
    points: 15,
    difficulty: "Easy",
    tone: "yellow",
  },
  {
    id: 6,
    title: "The Listen Challenge",
    description:
      "Focus on listening more than talking during one conversation.",
    points: 20,
    difficulty: "Medium",
    tone: "green",
  },
  {
    id: 7,
    title: "The Invite Challenge",
    description:
      "Invite someone to join you in an activity, lunch, walk or conversation.",
    points: 25,
    difficulty: "Medium",
    tone: "coral",
  },
  {
    id: 8,
    title: "Find A Similarity",
    description:
      "Find something you have in common with someone you are talking to.",
    points: 15,
    difficulty: "Easy",
    tone: "blue",
  },
  {
    id: 9,
    title: "The Brave Question",
    description:
      "Ask a question that helps you understand someone a little better.",
    points: 25,
    difficulty: "Medium",
    tone: "yellow",
  },
  {
    id: 10,
    title: "The Small Wave",
    description:
      "Wave or smile at someone you normally walk past.",
    points: 10,
    difficulty: "Easy",
    tone: "green",
  },
  {
    id: 11,
    title: "The Story Swap",
    description:
      "Share a story and ask someone to share one of theirs.",
    points: 25,
    difficulty: "Medium",
    tone: "coral",
  },
  {
    id: 12,
    title: "The Group Challenge",
    description:
      "Start a conversation when you are in a group instead of waiting for someone else.",
    points: 30,
    difficulty: "Hard",
    tone: "blue",
  },
  {
    id: 13,
    title: "The Thank You Challenge",
    description:
      "Thank someone and explain why you appreciate what they did.",
    points: 20,
    difficulty: "Medium",
    tone: "yellow",
  },
];

const levels = [
  {
    level: 1,
    name: "Getting Started",
    minXP: 0,
  },
  {
    level: 2,
    name: "Conversation Starter",
    minXP: 50,
  },
  {
    level: 3,
    name: "Connection Builder",
    minXP: 120,
  },
  {
    level: 4,
    name: "Community Connector",
    minXP: 220,
  },
];

function getLevel(xp) {
  let current = levels[0];

  for (const level of levels) {
    if (xp >= level.minXP) {
      current = level;
    }
  }

  return current;
}

function getNextLevel(xp) {
  return levels.find((level) => level.minXP > xp);
}

export default function ChallengesPage() {
  const [completed, setCompleted] = useState([]);
  const [xp, setXp] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [levelUp, setLevelUp] = useState(null);

  useEffect(() => {
    try {
      const savedCompleted = JSON.parse(
        localStorage.getItem(
          "operation-reconnect-challenges"
        ) || "[]"
      );

      const savedXP = Number(
        localStorage.getItem(
          "operation-reconnect-xp"
        ) || 0
      );

      setCompleted(
        Array.isArray(savedCompleted)
          ? savedCompleted
          : []
      );

      setXp(
        Number.isFinite(savedXP)
          ? savedXP
          : 0
      );
    } catch (error) {
      console.error(
        "Could not load challenge progress:",
        error
      );
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "operation-reconnect-challenges",
      JSON.stringify(completed)
    );

    localStorage.setItem(
      "operation-reconnect-xp",
      String(xp)
    );
  }, [completed, xp, loaded]);

  async function completeChallenge(challenge) {
    if (completed.includes(challenge.id)) {
      return;
    }

    const firstName = localStorage.getItem(
      "operation-reconnect-first-name"
    );

    if (!firstName) {
      alert(
        "Please join the challenge group first so we know which first name to show in the community activity."
      );

      return;
    }

    const oldLevel = getLevel(xp);

    const newXP =
      xp + challenge.points;

    const newLevel =
      getLevel(newXP);

    setCompleted((current) => [
      ...current,
      challenge.id,
    ]);

    setXp(newXP);

    try {
      const response = await fetch(
        "/api/challenge-activity",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            firstName,
            challengeTitle:
              challenge.title,
          }),
        }
      );

      if (!response.ok) {
        const data =
          await response.json();

        console.error(
          "Could not save challenge activity:",
          data
        );
      }
    } catch (error) {
      console.error(
        "Could not save challenge activity:",
        error
      );
    }

    confetti({
      particleCount: 80,
      spread: 70,
      origin: {
        y: 0.7,
      },
    });

    if (
      newLevel.level >
      oldLevel.level
    ) {
      setTimeout(() => {
        setLevelUp(newLevel);

        confetti({
          particleCount: 150,
          spread: 100,
          origin: {
            y: 0.6,
          },
        });
      }, 350);
    }
  }

  function resetChallenges() {
    const confirmed =
      window.confirm(
        "Reset all of your challenge progress?"
      );

    if (!confirmed) return;

    setCompleted([]);
    setXp(0);
    setLevelUp(null);

    localStorage.removeItem(
      "operation-reconnect-challenges"
    );

    localStorage.removeItem(
      "operation-reconnect-xp"
    );
  }

  const currentLevel =
    getLevel(xp);

  const nextLevel =
    getNextLevel(xp);

  let progress = 100;

  if (nextLevel) {
    const currentStart =
      currentLevel.minXP;

    const levelSize =
      nextLevel.minXP -
      currentStart;

    progress =
      ((xp - currentStart) /
        levelSize) *
      100;

    progress = Math.max(
      0,
      Math.min(progress, 100)
    );
  }

  return (
    <main>
      <section className="challenge-hero">
        <h1>
          The Connection Challenge
        </h1>

        <p>
          Connection is a skill.
          The more reps you do,
          the easier it becomes.
        </p>

        <div className="challenge-score">
          <h2>
            {xp} XP
          </h2>

          <p>
            Level{" "}
            {currentLevel.level} ·{" "}
            {currentLevel.name}
          </p>

          <div className="xp-bar">
            <span
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {nextLevel ? (
            <small>
              {nextLevel.minXP -
                xp}{" "}
              XP until{" "}
              {nextLevel.name}
            </small>
          ) : (
            <small>
              Highest level reached
            </small>
          )}

          <button
            type="button"
            className="reset-button"
            onClick={
              resetChallenges
            }
          >
            Reset progress
          </button>
        </div>
      </section>

      <ChallengeGroupJoin />

      <section className="challenge-grid">
        {challenges.map(
          (challenge) => {
            const isCompleted =
              completed.includes(
                challenge.id
              );

            return (
              <div
                key={
                  challenge.id
                }
                className={`challenge-card tone-${challenge.tone}`}
              >
                <span className="difficulty">
                  {
                    challenge.difficulty
                  }
                </span>

                <h2>
                  {
                    challenge.title
                  }
                </h2>

                <p>
                  {
                    challenge.description
                  }
                </p>

                <strong>
                  +
                  {
                    challenge.points
                  }{" "}
                  XP
                </strong>

                <button
                  type="button"
                  disabled={
                    isCompleted
                  }
                  onClick={() =>
                    completeChallenge(
                      challenge
                    )
                  }
                >
                  {isCompleted
                    ? "Challenge Complete ✓"
                    : "I Did This"}
                </button>
              </div>
            );
          }
        )}
      </section>

      <section className="how-it-works">
        <div className="how-header">
          <h2>
            How the Challenge Works
          </h2>

          <p>
            Small social reps build
            confidence. You do not
            have to complete
            everything at once.
          </p>
        </div>

        <div className="how-grid">
          <div className="how-card tone-yellow">
            <span>01</span>

            <h3>
              Pick One
            </h3>

            <p>
              Choose a challenge
              that feels slightly
              uncomfortable but
              achievable.
            </p>
          </div>

          <div className="how-card tone-green">
            <span>02</span>

            <h3>
              Do the Rep
            </h3>

            <p>
              Try it in real life.
              It does not need to
              go perfectly for it
              to count.
            </p>
          </div>

          <div className="how-card tone-coral">
            <span>03</span>

            <h3>
              Keep Going
            </h3>

            <p>
              Confidence usually
              comes after the
              practice, not before
              it.
            </p>
          </div>
        </div>
      </section>

      <section className="connection-why-section">
        <p className="small-heading">
          PRIVACY FIRST
        </p>

        <h2>
          Be Part of the Community
          Without Giving Up Your
          Identity.
        </h2>

        <p>
          We only display first
          names in the Operation
          Reconnect challenge
          community.
        </p>

        <div className="connection-message">
          <p>
            No surnames.
          </p>

          <p>
            No public emails.
          </p>

          <p>
            No public account
            details.
          </p>

          <strong>
            Your identity stays
            protected.
          </strong>
        </div>
      </section>

      {levelUp && (
        <div className="levelup-overlay">
          <div className="levelup-card">
            <p className="levelup-small">
              LEVEL UP
            </p>

            <h1>
              Level{" "}
              {levelUp.level}
            </h1>

            <h2>
              {levelUp.name}
            </h2>

            <p>
              You have been putting
              in the reps. Keep
              going.
            </p>

            <button
              type="button"
              className="levelup-button"
              onClick={() =>
                setLevelUp(null)
              }
            >
              Keep Going
            </button>
          </div>
        </div>
      )}
    </main>
  );
}