import styles from '../webinars.module.css';
import Reveal from '../../components/Reveal';
import EventCalendar from '../../components/EventCalendar';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSda-3B0JM14IaHojgZpRm00UeWMJ2sJQ8-kCY8nsHGNgOQbOQ/viewform?usp=sharing&ouid=112800969583636718113';

export default function TeacherWebinarPage() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Teacher Reconnect Live</span>
            <h1>Build Stronger Classroom Connections.</h1>
            <p className={styles.heroLead}>
              A free weekly webinar for teachers, straight from a teen who's actually inside the problem you're trying to solve.
            </p>
            <p className={styles.heroText}>
              30 minutes, once a week. Practical ideas you can use in your classroom the very next day — not another theory-heavy PD session.
            </p>
            <div className={styles.heroActions}>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                Reserve Your Spot
              </a>
              <a href="#dates" className={styles.secondaryButton}>
                See Upcoming Dates
              </a>
            </div>
          </div>

          <div className={styles.dateCard}>
            <span className={styles.dateSticker}>Next Session</span>
            <p className={styles.dateDay}>Thursday</p>
            <p className={styles.dateNumber}>27</p>
            <p className={styles.dateMonth}>August</p>
            <div className={styles.dateRule}></div>
            <p className={styles.dateTime}>5:00–5:30 PM (AEST)</p>
            <p className={styles.dateMeta}>Live, online, 30 minutes</p>
            <span className={styles.freeSticker}>Free</span>
          </div>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div className={styles.detailsGrid}>
          <div className={`${styles.detailCard} ${styles.detailYellow}`}>
            <span className={styles.detailLabel}>When</span>
            <span className={styles.detailValue}>Every Tuesday</span>
          </div>
          <div className={`${styles.detailCard} ${styles.detailGreen}`}>
            <span className={styles.detailLabel}>Time</span>
            <span className={styles.detailValue}>5:00–5:30 PM AEST</span>
          </div>
          <div className={`${styles.detailCard} ${styles.detailCoral}`}>
            <span className={styles.detailLabel}>Cost</span>
            <span className={styles.detailValue}>Free to attend</span>
          </div>
          <div className={`${styles.detailCard} ${styles.detailBlue}`}>
            <span className={styles.detailLabel}>Format</span>
            <span className={styles.detailValue}>Live, online</span>
          </div>
        </div>
      </section>

      <Reveal>
        <section className={styles.introSection}>
          <div className={styles.introHeading}>
            <span className={`${styles.sticker} ${styles.yellowSticker}`}>By a teen, for teachers</span>
            <h2>Why Teacher Reconnect Live?</h2>
          </div>
          <div className={styles.introCopy}>
            <p>
              Operation Reconnect exists because making friends has gotten harder for students — and teachers are on the front line of that shift without always having the tools to address it.
            </p>
            <p>
              Teacher Reconnect Live is a short weekly session built from that same perspective — practical, straightforward, and grounded in what students actually experience day to day.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.realClassroomsSection}>
          <div className={styles.realClassroomsInner}>
            <div className={styles.realClassroomsCopy}>
              <span className={styles.sticker}>Built for real classrooms</span>
              <h2>Fits Inside a Single Class Period</h2>
              <p>
                No lengthy modules or homework. Each session is designed to be short enough to attend between classes and useful enough to apply immediately.
              </p>
            </div>
            <div className={styles.classSizeCard}>
              <span>30</span>
              <strong>Minutes</strong>
              <small>Start to finish, live and interactive.</small>
            </div>
          </div>
        </section>
      </Reveal>

      <section className={styles.learningSection}>
        <div className={styles.sectionHeading}>
          <h2>What Teachers Walk Away With</h2>
          <p>Every session is built around one clear, usable takeaway — not a long list of theory.</p>
        </div>
        <div className={styles.learningGrid}>
          <div className={`${styles.learningCard} ${styles.learningYellow}`}>
            <span className={styles.learningNumber}>01</span>
            <h3>Practical Ideas</h3>
            <p>Activities and strategies you can use with students straight away.</p>
          </div>
          <div className={`${styles.learningCard} ${styles.learningGreen}`}>
            <span className={styles.learningNumber}>02</span>
            <h3>Better Connections</h3>
            <p>Learn how to create stronger classroom communities.</p>
          </div>
          <div className={`${styles.learningCard} ${styles.learningCoral}`}>
            <span className={styles.learningNumber}>03</span>
            <h3>Real Solutions</h3>
            <p>Simple tools for improving communication and belonging.</p>
          </div>
        </div>
      </section>

      <Reveal>
        <section className={styles.toolSection}>
          <div className={styles.toolCard}>
            <div className={styles.toolCopy}>
              <span className={`${styles.sticker} ${styles.yellowSticker}`}>What's covered</span>
              <h2>A New Topic Every Week</h2>
              <p>
                Each session tackles one specific, real challenge — from starting conversations to building genuine confidence in students who struggle to connect.
              </p>
            </div>
            <div className={styles.toolList}>
              <h3>Recent & upcoming topics</h3>
              <ul>
                <li><span>1</span><p>How to Start a Conversation With Anyone</p></li>
                <li><span>2</span><p>Building Confidence Without Faking It</p></li>
                <li><span>3</span><p>Why Texting Isn't the Same as Real Connection</p></li>
                <li><span>4</span><p>From Acquaintance to Actual Friend</p></li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <section className={styles.audienceSection}>
        <div className={styles.audienceGrid}>
          <div className={`${styles.audienceCard} ${styles.audienceBlue}`}>
            <h2>For Classroom Teachers</h2>
            <p>Practical, low-prep ideas you can weave into everyday teaching to help students connect with each other.</p>
          </div>
          <div className={`${styles.audienceCard} ${styles.audienceGreen}`}>
            <h2>For Wellbeing & Pastoral Staff</h2>
            <p>A deeper look at the social challenges students face, from someone who understands the student side of it firsthand.</p>
          </div>
        </div>
      </section>

      <Reveal>
        <section id="dates" className={styles.detailsSection}>
          <div className={styles.sectionHeading}>
            <h2>Upcoming Dates</h2>
          </div>
          <EventCalendar />
        </section>
      </Reveal>

      <section className={styles.finalSection}>
        <div className={styles.finalCard}>
          <h2>Ready to Bring This Into Your Staffroom?</h2>
          <p>Reserve your spot for the next session — it's free, live, and built for teachers who want real tools, not more theory.</p>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.darkButton}>
            Reserve Your Spot
          </a>
          <p className={styles.contact}>
            Questions? <a href="mailto:operationreconnecthp@gmail.com">Get in touch</a>
          </p>
        </div>
      </section>

    </div>
  );
}