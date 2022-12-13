// Initialization
import express from 'express';
import { CalendarMaster } from '@models';
import { buildCalendarTable } from '@plugins/calendar-builder';

// Response Handlers
import {
  createdResponse,
  errorResponseHandler,
} from '@plugins/server/responses';
import { BadRequest } from '@plugins/errors';

// Types
import type { RequestHandler } from 'express';

// Router
const router = express.Router();

router.post('/build-calendar', (async (req, res) => {
  try {
    const {
      options: { endDate },
    }: { options: { endDate: string | undefined } } = req.body;
    if (endDate) {
      const calendarRows = await buildCalendarTable(endDate);
      const calendarDbRows = await CalendarMaster.bulkCreate(calendarRows);
      createdResponse(res, {
        message: 'calendar table has been created',
        sampleCalendarRow: calendarDbRows[0].toJSON(),
      });
    } else {
      throw new BadRequest('options.endDate', 'Request Body');
    }
  } catch (e) {
    errorResponseHandler(res, e);
  }
}) as RequestHandler);

export default router;
