import Reveal from "../components/Reveal";

const registrationLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSda-3B0JM14IaHojgZpRm00UeWMJ2sJQ8-kCY8nsHGNgOQbOQ/viewform";

const contactEmail = "operationreconnecthp@gmail.com";

const webinarDetails = [
  {
    label: "Date",
    value: "Thursday 6 August 2026",
  },
  {
    label: "Time",
    value: "5:30pm to 6:30pm AEST",
  },
  {
    label: "Cost",
    value: "Free",
  },
  {
    label: "Where",
    value: "Live online webinar",
  },
];

const learningPoints = [
  "Introduce team-building activities without immediately getting eye rolls.",
  "Engage teenagers who are reluctant or worried about looking silly.",
  "Encourage conversation without forcing students to share personal information.",
  "Include quieter students while respecting their comfort and choice.",
  "Run interactive activities with a class of 25 to 30 students.",
  "Use shared interests to strengthen classroom connection.",
];

const toolFeatures = [
  "Create five or six student teams",
  "Run timed whole-class connection activities",
  "Facilitate Two Truths and a Dream",
  "Complete short six-minute interest-circle challenges",
  "Record team points and class progress",
  "Finish with a guided class reflection",
];

export default function WebinarsPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#17212b]">
      <section className="bg-[#17375f] px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.14em]">
            Free live teacher webinar
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Team Building for Teens Without the Eye Rolls
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            A practical live session for teachers who want to help teenagers
            communicate, participate and connect without making team-building
            feel childish, awkward or forced.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#f0b44d] px-7 py-4 text-lg font-bold text-[#17212b] transition hover:bg-[#f4c66d]"
            >
              Reserve your free spot
            </a>

            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-white px-7 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-[#17375f]"
            >
              Ask us a question
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-3xl border border-[#d7e0e8] bg-white p-6 shadow-sm md:p-10">
              <div className="text-sm font-bold uppercase tracking-[0.14em] text-[#28559a]">
                Upcoming live session
              </div>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Team Building for Teens
              </h2>

              <p className="mt-5 max-w-4xl text-lg leading-8 text-[#4b5965]">
                Team-building activities can quickly feel awkward or forced for
                teenagers. During this webinar, the Operation Reconnect team
                will demonstrate activities that feel age-appropriate,
                purposeful and genuinely engaging.
              </p>

              <p className="mt-4 max-w-4xl text-lg leading-8 text-[#4b5965]">
                You will see how to explain the activities, organise a full
                class, support reluctant students and keep everyone involved
                without placing unnecessary pressure on individuals.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {webinarDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-2xl bg-[#eef3f8] p-5"
                  >
                    <div className="text-sm font-bold uppercase tracking-wide text-[#5b6874]">
                      {detail.label}
                    </div>

                    <div className="mt-2 text-lg font-black text-[#17375f]">
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#28559a] px-7 py-4 text-lg font-bold text-white transition hover:bg-[#1f477f]"
                >
                  Reserve your free spot
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.14em] text-[#4f8b52]">
                During the webinar
              </div>

              <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                Learn how to run activities teenagers will actually join
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4b5965]">
                This is a practical teacher session. We will walk through the
                activities step by step and show you how to use them with a
                class of 25 to 30 students.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {learningPoints.map((point, index) => (
              <Reveal key={point} delay={index * 70}>
                <div className="flex h-full gap-4 rounded-2xl border border-[#dfe5e8] bg-[#fafafa] p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#17375f] font-black text-white">
                    {index + 1}
                  </div>

                  <p className="text-lg leading-7 text-[#34414c]">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-3xl bg-[#e8f1e7] p-6 md:p-10">
              <div className="text-sm font-bold uppercase tracking-[0.14em] text-[#3e7442]">
                Included for everyone who signs up
              </div>

              <div className="mt-4 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                <div>
                  <h2 className="text-3xl font-black leading-tight md:text-4xl">
                    Interactive Team-Building Classroom Tool
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-[#425249]">
                    Everyone who signs up will receive access to our interactive
                    Netlify classroom tool during the live webinar.
                  </p>

                  <p className="mt-4 text-lg leading-8 text-[#425249]">
                    The tool can be projected onto the classroom screen and
                    guides the teacher through each activity.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6">
                  <h3 className="text-xl font-black text-[#17375f]">
                    The tool includes:
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {toolFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-base leading-7 text-[#34414c]"
                      >
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4f8b52]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#4f8b52] px-7 py-4 text-lg font-bold text-white transition hover:bg-[#3e7442]"
                >
                  Sign up and receive the classroom tool
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-[#dfe5e8] p-6 md:p-8">
              <div className="text-sm font-bold uppercase tracking-[0.14em] text-[#28559a]">
                Who this is for
              </div>

              <h2 className="mt-3 text-2xl font-black md:text-3xl">
                Teachers working with teenagers
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4b5965]">
                This webinar is suitable for secondary teachers, specialist
                teachers, wellbeing staff, learning support teachers and other
                educators supporting teenage students.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#4b5965]">
                You do not need previous team-building experience. Everything
                will be explained and demonstrated clearly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-[#dfe5e8] p-6 md:p-8">
              <div className="text-sm font-bold uppercase tracking-[0.14em] text-[#4f8b52]">
                More topics coming soon
              </div>

              <h2 className="mt-3 text-2xl font-black md:text-3xl">
                More practical teacher webinars are coming
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4b5965]">
                This is the first webinar in our Operation Reconnect teacher
                series.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#4b5965]">
                Future sessions will focus on teenage confidence,
                communication, participation and meaningful connection.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#17375f] px-6 py-14 text-white md:py-20">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-sm font-bold uppercase tracking-[0.14em] text-[#f0b44d]">
              Free registration
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Reserve your place for Thursday 6 August
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Join us live from 5:30pm to 6:30pm AEST and leave with practical
              activities you can use with teenagers in your classroom.
            </p>

            <div className="mt-8">
              <a
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#f0b44d] px-8 py-4 text-lg font-bold text-[#17212b] transition hover:bg-[#f4c66d]"
              >
                Reserve your free spot
              </a>
            </div>

            <p className="mt-6 text-base text-white/85">
              Need help registering?{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-bold text-white underline underline-offset-4"
              >
                {contactEmail}
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}