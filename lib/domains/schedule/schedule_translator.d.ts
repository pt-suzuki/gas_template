/// <reference types="google-apps-script" />
import { Schedule } from "./Schedule";
import { ScheduleCriteria } from "./schedule_criteria";
export interface ScheduleTranslator {
    translateRequestToCriteria(request: GoogleAppsScript.Events.DoGet): ScheduleCriteria;
    translateResultToResultList(): Schedule[];
}
export declare class ScheduleTranslatorImpl implements ScheduleTranslator {
    translateRequestToCriteria(request: GoogleAppsScript.Events.DoGet): ScheduleCriteria;
    translateResultToResultList(): Schedule[];
}
