import { ScheduleSearchAction } from "~/controllers/schedule_search_action";
import { ScheduleSearchResponderImpl } from "~/controllers/schedule_search_responder";
import { scheduleService, scheduleTranslator } from '~/provider/service';

export const scheduleSearchAction: ScheduleSearchAction = new ScheduleSearchAction(new ScheduleSearchResponderImpl(), scheduleService, scheduleTranslator);