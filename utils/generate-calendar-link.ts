type CalendarLinkParams = {
  title: string;
  date: string; // e.g., "15 лютого"
  time: string; // e.g., "10:00 - 14:00"
  details?: string;
  location?: string;
};

const MONTH_NAMES: Record<string, string> = {
  січня: '01',
  лютого: '02',
  березня: '03',
  квітня: '04',
  травня: '05',
  червня: '06',
  липня: '07',
  серпня: '08',
  вересня: '09',
  жовтня: '10',
  листопада: '11',
  грудня: '12',
};

export function generateGoogleCalendarLink(params: CalendarLinkParams): string {
  const { title, date, time, details = '', location = '' } = params;

  const [startTime, endTime] = time.split(' - ');

  const dateParts = date.split(' ');
  const day = dateParts[0].padStart(2, '0');
  const monthName = dateParts[1];
  const month = MONTH_NAMES[monthName] || '01';
  const year = new Date().getFullYear().toString();

  const formatTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':');
    return `${hours.padStart(2, '0')}${minutes}00`;
  };

  const startDateTime = `${year}${month}${day}T${formatTime(startTime)}`;
  const endDateTime = `${year}${month}${day}T${formatTime(endTime)}`;

  const encodedTitle = encodeURIComponent(title);
  const encodedDetails = encodeURIComponent(details);
  const encodedLocation = encodeURIComponent(location);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${startDateTime}/${endDateTime}&details=${encodedDetails}&location=${encodedLocation}`;
}

