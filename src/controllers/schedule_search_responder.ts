import { Schedule } from '../domains/schedule/schedule';

export interface ScheduleSearchResponder {
  invoke(result: Schedule[]): GoogleAppsScript.Content.TextOutput;
}

export class ScheduleSearchResponderImpl implements ScheduleSearchResponder {
  invoke(result: Schedule[]): GoogleAppsScript.Content.TextOutput {
    const out = ContentService.createTextOutput();
    out.setMimeType(ContentService.MimeType.JSON);
    out.setContent(JSON.stringify(result));

    return out;
  }
}
