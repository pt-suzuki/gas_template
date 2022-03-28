import { ScheduleTranslator } from '~/domains/schedule/schedule_translator';
import { ScheduleService } from '../domains/schedule/schedule_service';
import { ScheduleSearchResponder } from './schedule_search_responder';

export class ScheduleSearchAction {
  private reponder: ScheduleSearchResponder;
  private service: ScheduleService;
  private translator: ScheduleTranslator;

  constructor(
    reponder: ScheduleSearchResponder,
    service: ScheduleService,
    translator: ScheduleTranslator
  ) {
    this.reponder = reponder;
    this.service = service;
    this.translator = translator;
  }

  invoke(
    request: GoogleAppsScript.Events.DoGet
  ): GoogleAppsScript.Content.TextOutput {
    return this.reponder.invoke(
      this.service.search(this.translator.translateRequestToCriteria(request))
    );
  }
}
