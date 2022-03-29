import { Schedule } from "./schedule";
import { ScheduleCriteria } from "./schedule_criteria";
import { ScheduleTranslator } from "./schedule_translator";

export interface ScheduleRepository {
  search(criteria: ScheduleCriteria): Schedule[];
}

export class ScheduleRepositoryImpl implements ScheduleRepository {
  // private translator: ScheduleTranslator;

  constructor(_: ScheduleTranslator) {
    // this.translator = translator;
  }

  search(_: ScheduleCriteria): Schedule[] {
    return [];
  }
}