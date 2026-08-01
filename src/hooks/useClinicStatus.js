import { useEffect, useState } from "react";

// [startHour, startMinute, endHour, endMinute]
const SCHEDULE = {
  0: [], // Sunday — closed
  1: [[10, 0, 13, 0], [17, 0, 21, 0]], // Monday
  2: [[10, 0, 13, 0], [17, 0, 21, 0]], // Tuesday
  3: [[10, 0, 13, 0], [17, 0, 21, 0]], // Wednesday
  4: [[10, 0, 13, 0], [17, 0, 21, 0]], // Thursday
  5: [[10, 0, 13, 0], [17, 0, 21, 0]], // Friday
  6: [[10, 0, 13, 0], [17, 0, 21, 0]], // Saturday
};

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function formatTime(hour, minute) {
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return minute === 0
    ? `${hour12}:00 ${period}`
    : `${hour12}:${String(minute).padStart(2, "0")} ${period}`;
}

function computeStatus(now) {
  const day = now.getDay();
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const windows = SCHEDULE[day];

  for (const [sh, sm, eh, em] of windows) {
    const start = sh * 60 + sm;
    const end = eh * 60 + em;
    if (minutesNow >= start && minutesNow < end) {
      return { isOpen: true, message: `Open Now · Closes ${formatTime(eh, em)}` };
    }
  }

  if (windows.length === 2) {
    const lunchStart = windows[0][2] * 60 + windows[0][3];
    const lunchEnd = windows[1][0] * 60 + windows[1][1];
    if (minutesNow >= lunchStart && minutesNow < lunchEnd) {
      return {
        isOpen: false,
        message: `Closed for Lunch · Opens ${formatTime(windows[1][0], windows[1][1])}`,
      };
    }
  }

  if (windows.length && minutesNow < windows[0][0] * 60 + windows[0][1]) {
    return {
      isOpen: false,
      message: `Closed Now · Opens ${formatTime(windows[0][0], windows[0][1])}`,
    };
  }

  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7;
    const nextWindows = SCHEDULE[nextDay];
    if (nextWindows.length) {
      const [sh, sm] = nextWindows[0];
      const label = i === 1 ? "Tomorrow" : DAY_NAMES[nextDay];
      return { isOpen: false, message: `Closed · Opens ${label} at ${formatTime(sh, sm)}` };
    }
  }

  return { isOpen: false, message: "Closed" };
}

// Live open/closed status for the clinic, recomputed every 30s so it stays
// accurate (e.g. flips from "closes at 1:00 pm" to "closed for lunch") while
// the page stays open.
export function useClinicStatus() {
  const [status, setStatus] = useState(() => computeStatus(new Date()));

  useEffect(() => {
    const tick = () => setStatus(computeStatus(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return status;
}
