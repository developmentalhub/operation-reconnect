'use client';

const GOOGLE_FORM_URL = 'https://forms.gle/UoXBKBu11jhjkEh37';
const WORKSHOP_FORM_URL = 'https://forms.gle/ZRZhHSguBLriKHaKA';

const events = [
  { date: '2026-08-27', label: 'Thu 27 Aug', title: 'How to Start a Conversation With Anyone' },
  { date: '2026-09-05', label: 'Sat 5 Sep', title: 'How to Keep a Conversation Going Past "Hi"' },
  { date: '2026-09-12', label: 'Sat 12 Sep', title: 'Building Confidence Without Faking It' },
  { date: '2026-09-17', label: 'Thu 17 Sep', title: 'How to Be Interesting (By Being Interested)' },
  { date: '2026-09-25', label: 'Fri 25 Sep', title: 'The Power of Connection', type: 'workshop' },
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

        if (event.type === 'workshop') {
          return (
            <div key={event.date} className={`event-card event-workshop ${isPast ? 'event-past' : ''}`}>
              <span className="workshop-tag">🔥 FEATURED WORKSHOP</span>
              <span className="event-day">{dayLabel} 25 September</span>
              <span className="event-date-num">25</span>
              <span className="event-month">September</span>
              <p className="event-title">The Power of Connection</p>
              <div className="workshop-info">
                <strong>10:00 AM–2:00 PM</strong>
                <strong>$37 — pay at the door</strong>
                <span>7 Meadowgate Drive</span>
              </div>
              {isPast ? (
                <span className="event-status">Past</span>
              ) : (
                <a href={WORKSHOP_FORM_URL} target="_blank" rel="noopener noreferrer" className="event-rsvp workshop-rsvp">Reserve Your Spot →</a>
              )}
            </div>
          );
        }

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