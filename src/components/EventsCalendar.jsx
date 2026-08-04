import { useState } from "react";

const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Builds a Monday-first grid of day cells for the given month, including
// the trailing/leading days from the previous and next month (grayed out)
// so every week row has 7 columns.
function buildMonthGrid(year, month) {
  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // getDay() is Sunday-first (0-6); shift so Monday is 0.
  const firstWeekday = (firstOfMonth.getDay() + 6) % 7;

  const daysInPreviousMonth = new Date(year, month, 0).getDate();

  const cells = [];

  for (let i = firstWeekday - 1; i >= 0; i--) {
    cells.push({ day: daysInPreviousMonth - i, isCurrentMonth: false });
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push({ day, isCurrentMonth: true });
  }
  while (cells.length % 7 !== 0) {
    cells.push({ day: cells.length - daysInMonth - firstWeekday + 1, isCurrentMonth: false });
  }

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

export default function EventsCalendar() {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const weeks = buildMonthGrid(viewDate.getFullYear(), viewDate.getMonth());

  const isToday = (day, isCurrentMonth) =>
    isCurrentMonth &&
    day === today.getDate() &&
    viewDate.getMonth() === today.getMonth() &&
    viewDate.getFullYear() === today.getFullYear();

  const goToPreviousMonth = () =>
    setViewDate((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1));

  const goToNextMonth = () =>
    setViewDate((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1));

  return (
    <section className="events-calendar">
      <div className="calendar-nav">
        <button onClick={goToPreviousMonth} aria-label="Previous month">&lsaquo;</button>
        <h2>{monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}</h2>
        <button onClick={goToNextMonth} aria-label="Next month">&rsaquo;</button>
      </div>

      <table className="calendar-table">
        <thead>
          <tr>
            {dayNames.map((name) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={[
                    !cell.isCurrentMonth ? "calendar-day-muted" : "",
                    isToday(cell.day, cell.isCurrentMonth) ? "calendar-day-today" : "",
                  ].join(" ").trim()}
                >
                  {isToday(cell.day, cell.isCurrentMonth) && (
                    <span className="calendar-today-label">Today</span>
                  )}
                  {cell.day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}