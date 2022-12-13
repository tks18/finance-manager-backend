import { NotAllowed } from './../errors/not-allowed';
import { DateTime } from 'luxon';
import { Settings } from '@models';
import { InternalServerError } from '@plugins/errors';

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

const calendarObjBuilder = (currentDate: DateTime): ICalendarRow => {
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
  return calendarRow;
};

/**
 * Builds a Calendar Table for the Calendar master With start and end Date Parameters
 *
 * @param {string} end - End Date (YYYY-MM-DD) format
 * @returns {ICalendarRow[]} - Calendar Array
 */
export async function buildCalendarTable(end: string): Promise<ICalendarRow[]> {
  const defaultStartDate = process.env['CALENDARSTARTDATE'];
  if (defaultStartDate) {
    const [startCalendarDate] = await Settings.findOrCreate({
      where: {
        name: 'start_calendar_date',
        type: 'date',
      },
      defaults: {
        name: 'start_calendar_date',
        type: 'date',
        value: defaultStartDate,
      },
    });
    const startDateObj = DateTime.fromFormat(
      startCalendarDate.value,
      'yyyy-LL-dd',
    );
    const endDateObj = DateTime.fromFormat(end, 'yyyy-LL-dd');
    const endCalendarDate = await Settings.findOne({
      where: { name: 'end_calendar_date', type: 'date' },
    });
    const calendarRows: ICalendarRow[] = [];
    if (endCalendarDate) {
      const endCalendarObj = DateTime.fromFormat(
        endCalendarDate.value,
        'yyyy-LL-dd',
      );
      if (endDateObj.toUnixInteger() > endCalendarObj.toUnixInteger()) {
        await Settings.findOrCreate({
          where: {
            name: 'end_calendar_date',
            type: 'date',
          },
          defaults: {
            name: 'end_calendar_date',
            type: 'date',
            value: endDateObj.toFormat('yyyy-LL-dd'),
          },
        });
        const duration = endDateObj.diff(endCalendarObj, 'days');
        let currentDate = endCalendarObj.plus({ days: 1 });
        for (let i = 0; i < duration.days; i++) {
          const calendarRow = calendarObjBuilder(currentDate);
          calendarRows.push(calendarRow);
          currentDate = currentDate.plus({ days: 1 });
        }
      } else {
        throw new NotAllowed(
          `Calendar Table already Built Up to ${endCalendarObj.toISODate()}.`,
        );
      }
    } else {
      await Settings.findOrCreate({
        where: {
          name: 'end_calendar_date',
          type: 'date',
        },
        defaults: {
          name: 'end_calendar_date',
          type: 'date',
          value: endDateObj.toFormat('yyyy-LL-dd'),
        },
      });
      const duration = endDateObj.diff(startDateObj, 'days');
      let currentDate = startDateObj;
      for (let i = 0; i <= duration.days; i++) {
        const calendarRow = calendarObjBuilder(currentDate);
        calendarRows.push(calendarRow);
        currentDate = currentDate.plus({ days: 1 });
      }
    }
    return calendarRows;
  } else {
    throw new InternalServerError(
      'Please Set CALENDARSTARTDATE Variable to Environment',
      'ENV Variable not Found',
    );
  }
}
