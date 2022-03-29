/// <reference types="google-apps-script" />
import { ScheduleTranslator } from '~/domains/schedule/schedule_translator';
import { ScheduleService } from '../domains/schedule/schedule_service';
import { ScheduleSearchResponder } from './schedule_search_responder';
export declare class ScheduleSearchAction {
    private reponder;
    private service;
    private translator;
    constructor(reponder: ScheduleSearchResponder, service: ScheduleService, translator: ScheduleTranslator);
    invoke(request: GoogleAppsScript.Events.DoGet): GoogleAppsScript.Content.TextOutput;
}
