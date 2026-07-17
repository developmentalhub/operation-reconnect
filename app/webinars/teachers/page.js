import Reveal from '../../components/Reveal';

const topics = [
  "Building A Connected Classroom",
  "Helping Students Find Their People",
  "Communication Skills Every Student Needs",
];

const perks = [
  {
    title: "Practical Ideas",
    text: "Activities and strategies you can use with students straight away.",
    tone: "coral",
  },
  {
    title: "Better Connections",
    text: "Learn how to create stronger classroom communities.",
    tone: "blue",
  },
  {
    title: "Real Solutions",
    text: "Simple tools for improving communication and belonging.",
    tone: "yellow",
  },
];

export default function TeacherWebinarPage() {
  return (
    <main>

      <section className="webinar-hero">

        <div className="webinar-badge">
          TEACHER RECONNECT LIVE
        </div>

        <h1>
          Build Stronger
          Classroom Connections.
        </h1>

        <p className="webinar-subtitle">
          A weekly 30-minute workshop helping teachers
          create more connected classrooms and stronger
          student relationships.
        </p>

        <div className="weekly-schedule">
          <div>Every Tuesday</div>
          <div>5:00–5:30 PM (AEST)</div>
          <div>Free to attend</div>
        </div>

      </section>


      <Reveal>

        <section className="booking-section">

          <div className="register-card">

            <h2>
              Join Teacher Reconnect Live
            </h2>

            <p>
              Discover practical activities, communication
              strategies, and ideas that help students feel
              included, confident, and connected.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSda-3B0JM14IaHojgZpRm00UeWMJ2sJQ8-kCY8nsHGNgOQbOQ/viewform?usp=sharing&ouid=112800969583636718113"
              target="_blank"
              rel="noopener noreferrer"
              className="register-button"
            >
              Reserve Your Spot
            </a>

          </div>

        </section>

      </Reveal>


      <section className="perks-section">

        <h2>
          What You'll Experience
        </h2>


        <div className="perk-row">

          {perks.map((perk, i) => (

            <Reveal key={perk.title} delay={i * 100}>

              <div className={`perk-badge tone-${perk.tone}`}>

                <h3>
                  {perk.title}
                </h3>

                <p>
                  {perk.text}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </section>


      <section className="topic-section">

        <h2>
          Upcoming Topics
        </h2>

        <div className="topic-list">

          {topics.map((topic) => (

            <div className="topic-card" key={topic}>
              {topic}
            </div>

          ))}

        </div>

      </section>


    </main>
  );
}