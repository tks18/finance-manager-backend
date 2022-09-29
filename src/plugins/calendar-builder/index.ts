import { DateTime } from 'luxon';

interface ICalendarRow {
  date: DateTime;
  day_id: number;
  day_name: string;
  day_name_short: string;
  day_type: string;
  week_id: number;
  start_of_week: DateTime;
  end_of_week: DateTime;
  week_name: string;
  month_id: number;
  fy_month_id: number;
  start_of_month: DateTime;
  day_of_month: number;
  end_of_month: DateTime;
  month_name: string;
  month_name_short: string;
  quarter_id: number;
  fy_quarter_id: number;
  start_of_quarter: DateTime;
  day_of_quarter: number;
  end_of_quarter: DateTime;
  quarter_name: string;
  fy_quarter_name: string;
  year_id: number;
  start_of_year: DateTime;
  day_of_year: number;
  end_of_year: DateTime;
  financial_year: string;
  assesment_year: string;
}

/**
 * Builds a Calendar Table for the Calendar master With start and end Date Parameters
 *
 * @param {string} start - Start Date (YYYY-MM-DD) format
 * @param {string} end - End Data (YYYY-MM-DD) format
 * @returns {ICalendarRow[]} - Calendar Array
 */
export function buildCalendarTable(start: string, end: string): ICalendarRow[] {
  const startDateObj = DateTime.fromFormat(start, 'yyyy-LL-dd');
  const endDateObj = DateTime.fromFormat(end, 'yyyy-LL-dd');
  const duration = endDateObj.diff(startDateObj, 'days');
  let currentDate = startDateObj;
  const calendarRows: ICalendarRow[] = [];
  for (let i = 0; i <= duration.days; i++) {
    const weekId = currentDate.weekNumber;
    const monthId = currentDate.month;
    const startofMonth = currentDate.startOf('month');
    const quarterId = currentDate.quarter;
    const fyQuarterId = quarterId === 1 ? 4 : quarterId - 1;
    const startofQuarter = currentDate.startOf('quarter');
    const yearId = currentDate.year;
    const startofYear = currentDate.startOf('year');
    const calendarRow: ICalendarRow = {
      date: currentDate,
      day_id: currentDate.weekday,
      day_name: currentDate.weekdayLong,
      day_name_short: currentDate.weekdayShort,
      day_type: [6, 7].includes(currentDate.weekday) ? 'Weekend' : 'Weekday',
      week_id: weekId,
      start_of_week: currentDate.startOf('week'),
      end_of_week: currentDate.endOf('week'),
      week_name: `Week-${weekId}`,
      month_id: monthId,
      fy_month_id: [1, 2, 3].includes(monthId) ? monthId + 9 : monthId - 3,
      start_of_month: startofMonth,
      day_of_month: currentDate.diff(startofMonth, 'days').days + 1,
      end_of_month: currentDate.endOf('month'),
      month_name: currentDate.monthLong,
      month_name_short: currentDate.monthShort,
      quarter_id: quarterId,
      fy_quarter_id: fyQuarterId,
      start_of_quarter: startofQuarter,
      day_of_quarter: currentDate.diff(startofQuarter, 'days').days + 1,
      end_of_quarter: currentDate.endOf('quarter'),
      quarter_name: `Q${quarterId}`,
      fy_quarter_name: `Q${fyQuarterId}`,
      year_id: yearId,
      start_of_year: startofYear,
      day_of_year: currentDate.diff(startofYear, 'days').days + 1,
      end_of_year: currentDate.endOf('year'),
      financial_year:
        monthId > 3 ? `${yearId}-${yearId + 1}` : `${yearId - 1}-${yearId}`,
      assesment_year:
        monthId > 3 ? `${yearId + 1}-${yearId + 2}` : `${yearId}-${yearId + 1}`,
    };
    calendarRows.push(calendarRow);
    currentDate = currentDate.plus({ days: 1 });
  }
  return calendarRows;
}
