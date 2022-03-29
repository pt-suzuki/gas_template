import { Schedule } from "./Schedule";
import { ScheduleCriteria } from "./schedule_criteria";
import { ScheduleTranslator } from "./schedule_translator";
export interface ScheduleService {
    search(criteria: ScheduleCriteria): Schedule[];
}
export declare class ScheduleServiceImpl implements ScheduleService {
    private translator;
    constructor(translator: ScheduleTranslator);
    search(criteria: ScheduleCriteria): Schedule[];
}
