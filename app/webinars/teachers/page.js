import Reveal from '../../components/Reveal';
import WebinarSignupForm from '../../components/WebinarSignupForm';

export const metadata = {
  title: 'Teacher Reconnect Live — Operation Reconnect',
  description:
    'Free 30-minute live sessions for teachers with practical ideas to help students build friendships, confidence and real-world connection.',
};

export default function TeacherWebinarPage() {
  return (
    <main>
      {/* HERO */}
      <section className="webinar-hero">
        <div className="webinar-badge">
          TEACHER RECONNECT LIVE
        </div>

        <h1>
          Help Students Build Real Connection,
          One Conversation at a Time.
        </h1>

        <p className="webinar-subtitle">
          Free 30-minute live sessions giving teachers practical ways
          to help students start conversations, build friendships and
          feel more confident connecting face-to-face.
        </p>

        <div className="weekly-schedule">
          <div>30 minutes</div>
          <div>Live online</div>
          <div>Free for teachers</div>
        </div>
      </section>

      {/* QUICK VALUE */}
      <Reveal>
        <section className="teacher-value-section">
          <div className="teacher-value-grid">

            <div className="teacher-value-card tone-coral">
              <span className="teacher-value-number">01</span>
              <h3>Use It Tomorrow</h3>
              <p>
                Leave with a practical conversation or connection
                activity you can use with students straight away.
              </p>
            </div>

            <div className="teacher-value-card tone-blue">
              <span className="teacher-value-number">02</span>
              <h3>The Student Side</h3>
              <p>
                Explore what awkward conversations, friendship and
                connection can actually feel like from a young
                person's perspective.
              </p>
            </div>

            <div className="teacher-value-card tone-yellow">
              <span className="teacher-value-number">03</span>
              <h3>Short and Useful</h3>
              <p>
                Thirty focused minutes without another long training
                session taking over your week.
              </p>
            </div>

          </div>
        </section>
      </Reveal>

      {/* REGISTRATION */}
      <Reveal>
        <section className="webinar-signup-section">
          <div className="webinar-signup-intro">
            <p className="small-heading">NEXT LIVE SESSIONS</p>

            <h2>Choose a Session and You're In</h2>

            <p>
              Pick the time that works for you, enter your details,
              and we'll email your booking confirmation directly to
              you.
            </p>
          </div>

          <WebinarSignupForm />
        </section>
      </Reveal>

      {/* WHY */}
      <Reveal>
        <section className="mission-section">
          <h2>Why Teacher Reconnect Exists</h2>

          <p>
            Making friends can feel harder for young people than it
            used to. Not because they do not want connection, but
            because so much communication can now happen without
            having to practise the uncomfortable parts of connecting
            face-to-face.
          </p>

          <p>
            Teachers often see those moments first. The student who
            sits alone at lunch. The teenager who can be confident
            online but struggles to start a conversation in person.
            The group of students standing beside each other while
            everyone looks at their phones.
          </p>

          <p>
            Teacher Reconnect Live gives educators simple ways to
            create more opportunities for conversation, confidence
            and connection during an ordinary school day.
          </p>
        </section>
      </Reveal>

      {/* WHAT SESSIONS COVER */}
      <Reveal>
        <section className="topic-section">
          <h2>What We Talk About</h2>

          <div className="topic-list">
            <div className="topic-card">
              Starting a conversation when you do not know what to say
            </div>

            <div className="topic-card">
              Helping students move from acquaintances to friendships
            </div>

            <div className="topic-card">
              Building confidence through small social challenges
            </div>

            <div className="topic-card">
              Making face-to-face conversation feel less awkward
            </div>

            <div className="topic-card">
              Creating simple connection opportunities in classrooms
            </div>
          </div>
        </section>
      </Reveal>

      {/* FINAL CTA */}
      <Reveal>
        <section className="teacher-bottom-cta">
          <h2>Connection Gets Better With Practice.</h2>

          <p>
            Give students more chances to practise it.
          </p>

          <a href="#teacher-signup" className="register-button">
            Choose a Free Session
          </a>
        </section>
      </Reveal>
    </main>
  );
}