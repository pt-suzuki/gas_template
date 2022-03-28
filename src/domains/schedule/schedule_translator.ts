import { Schedule } from "./Schedule";
import { ScheduleCriteria } from "./schedule_criteria";

export interface ScheduleTranslator {
  translateRequestToCriteria(request: GoogleAppsScript.Events.DoGet): ScheduleCriteria;
  translateResultToResultList(): Schedule[];
}

export class ScheduleTranslatorImpl implements ScheduleTranslator {
  translateRequestToCriteria(request: GoogleAppsScript.Events.DoGet): ScheduleCriteria {
    return {
      team: request && request.parameter ? request.parameter.team : ''
    };
  }

  translateResultToResultList(): Schedule[] {
    return [];
  }
}