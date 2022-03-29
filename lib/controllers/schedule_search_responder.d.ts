/// <reference types="google-apps-script" />
import { Schedule } from '../domains/schedule/Schedule';
export interface ScheduleSearchResponder {
    invoke(result: Schedule[]): GoogleAppsScript.Content.TextOutput;
}
export declare class ScheduleSearchResponderImpl implements ScheduleSearchResponder {
    invoke(result: Schedule[]): GoogleAppsScript.Content.TextOutput;
}
