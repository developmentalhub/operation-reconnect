import Reveal from '../components/Reveal';
import EventCalendar from '../components/EventCalendar';

export default function TeacherWebinarPage() {
  return (
    <main>
      <section className="webinar-hero">
        <div className="webinar-badge">🎤 TEACHER RECONNECT LIVE</div>
        <h1>Your Students Want to Connect. Let's Help Them Get There.</h1>
        <p className="webinar-subtitle">
          Free live sessions for teachers, run by the founder of Operation Reconnect — a teen-led project helping students build real friendships and confidence.
        </p>
        <div className="weekly-schedule">
          <div>Thursdays · 5:00–5:30 PM AEST</div>
          <div>Saturdays · 10:00–10:30 AM AEST</div>
          <div>Free to attend</div>
        </div>
      </section>

      <Reveal>
        <section className="mission-section">
          <h2>Why This Exists</h2>
          <p>
            Operation Reconnect started because making friends has gotten harder for teens — not because they don't want connection, but because so much of modern life makes it awkward, easy to avoid, and easy to fake with a like or a text.
          </p>
          <p>
            You see it every day in your classroom: the student who eats lunch alone, the group project nobody wants to lead, the kid who's funny in a group chat but goes quiet in real life. Teachers are often the first to notice — but rarely handed the tools to actually do something about it.
          </p>
          <p>
            Teacher Reconnect Live is that tool. Thirty-minute live sessions built from the student's side of the problem — practical enough to use tomorrow, and grounded in what's actually going on for the kids in front of you.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="dates-section">
          <h2>Upcoming Dates</h2>
          <EventCalendar />
        </section>
      </Reveal>

      <Reveal>
        <section className="booking-section">
          <div className="register-card">
            <h2>Join Teacher Reconnect Live</h2>
            <p>
              Each session tackles one real, specific challenge — starting conversations, building confidence, turning acquaintances into actual friends — and leaves you with something you can try in class the very next day.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSda-3B0JM14IaHojgZpRm00UeWMJ2sJQ8-kCY8nsHGNgOQbOQ/viewform?usp=sharing&ouid=112800969583636718113" target="_blank" rel="noopener noreferrer" className="register-button">Reserve Your Spot</a>
          </div>
        </section>
      </Reveal>

      <section className="perks-section">
        <h2>What You'll Walk Away With</h2>
        <div className="perk-row">
          <Reveal>
            <div className="perk-badge tone-coral">
              <h3>Practical Ideas</h3>
              <p>Activities and strategies you can use with students straight away — no extra planning time required.</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="perk-badge tone-blue">
              <h3>Better Connections</h3>
              <p>Simple ways to build a classroom where students actually feel like they belong.</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="perk-badge tone-yellow">
              <h3>Real Solutions</h3>
              <p>Tools grounded in what students are actually experiencing, not outdated theory.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}