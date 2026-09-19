'use client';

const GOOGLE_FORM_URL = 'https://forms.gle/UoXBKBu11jhjkEh37';

const events = [
  { date: '2026-10-01', label: 'Thu 1 Oct', title: "Why Texting Isn't the Same as Real Connection" },
  { date: '2026-10-10', label: 'Sat 10 Oct', title: 'From Acquaintance to Actual Friend' },
  { date: '2026-10-15', label: 'Thu 15 Oct', title: 'Why Connection Is Important' },
  { date: '2026-10-22', label: 'Thu 22 Oct', title: 'Social Skills 101' },
  { date: '2026-11-07', label: 'Sat 7 Nov', title: 'Social Confidence' },
];

export default function EventCalendar() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="event-carousel">
      {events.map((event) => {
        const eventDate = new Date(event.date);
        const isPast = eventDate < today;
        const [dayLabel, dayNum, monthLabel] = event.label.split(' ');

        return (
          <div key={event.date} className={`event-card ${isPast ? 'event-past' : ''}`}>
            <span className="event-day">{dayLabel}</span>
            <span className="event-date-num">{dayNum}</span>
            <span className="event-month">{monthLabel}</span>
            <p className="event-title">{event.title}</p>
            {isPast ? (
              <span className="event-status">Past</span>
            ) : (
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="event-rsvp">RSVP</a>
            )}
          </div>
        );
      })}
    </div>
  );
}