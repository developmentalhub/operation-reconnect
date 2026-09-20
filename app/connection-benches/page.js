import ConnectionCounter from '../components/ConnectionCounter';
import BenchRequestForm from '../components/BenchRequestForm';

export const metadata = {
  title: 'Connection Benches — Operation Reconnect',
  description:
    'Connection Benches create simple places for people to sit, talk and meet someone new.',
};

export default function ConnectionBenchesPage() {
  return (
    <main>
      <section className="connection-bench-hero">
        <p className="small-heading">
          OPERATION RECONNECT
        </p>

        <h1>
          Sit Down.
          <br />
          Say Hello.
          <br />
          See What Happens.
        </h1>

        <p className="connection-bench-lead">
          Connection Benches are places where it is okay to talk to
          someone you do not know yet.
        </p>

        <p className="connection-bench-intro">
          Sit here if you are open to a conversation, or join someone
          already sitting there. You do not need the perfect opening
          line. A simple hello is enough.
        </p>
      </section>

      <ConnectionCounter />

      <section className="connection-how-section">
        <div className="connection-section-heading">
          <p className="small-heading">
            HOW IT WORKS
          </p>

          <h2>
            One Small Conversation at a Time
          </h2>
        </div>

        <div className="connection-steps">
          <div className="connection-step">
            <span>01</span>

            <h3>Sit</h3>

            <p>
              Take a seat on a Connection Bench.
            </p>
          </div>

          <div className="connection-step">
            <span>02</span>

            <h3>Say Hello</h3>

            <p>
              Start with something simple.
            </p>
          </div>

          <div className="connection-step">
            <span>03</span>

            <h3>Talk</h3>

            <p>
              Have a real conversation with another person.
            </p>
          </div>

          <div className="connection-step">
            <span>04</span>

            <h3>Count It</h3>

            <p>
              Add your connection to the community tally.
            </p>
          </div>
        </div>
      </section>

      <section className="conversation-starters-section">
        <p className="small-heading">
          NOT SURE WHAT TO SAY?
        </p>

        <h2>
          Try One of These
        </h2>

        <div className="conversation-starters">
          <div className="conversation-starter tone-yellow">
            What's been the best part of your week?
          </div>

          <div className="conversation-starter tone-green">
            What are you looking forward to?
          </div>

          <div className="conversation-starter tone-blue">
            What music are you listening to lately?
          </div>

          <div className="conversation-starter tone-coral">
            What's something you've always wanted to try?
          </div>
        </div>
      </section>

      <section className="connection-why-section">
        <p className="small-heading">
          WHY CONNECTION BENCHES?
        </p>

        <h2>
          We Spend a Lot of Time Around People Without Actually
          Talking to Them.
        </h2>

        <p>
          The Connection Bench creates a tiny invitation to change
          that.
        </p>

        <div className="connection-message">
          <p>No app.</p>
          <p>No profile.</p>
          <p>No followers.</p>

          <strong>
            Just another person.
          </strong>
        </div>
      </section>

      <section className="connection-final-cta">
        <h2>
          Want a Connection Bench at Your School or Community?
        </h2>

        <p>
          Help us create more places where starting a conversation
          feels a little easier.
        </p>

        <p className="bench-cost-intro">
          $20 covers the cost of the Connection Bench plaque and
          delivery anywhere in Australia.
        </p>

        <BenchRequestForm />
      </section>
    </main>
  );
}