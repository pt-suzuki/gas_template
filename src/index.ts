import { scheduleSearchAction } from './provider/controller';

declare const global: any;

global.doGet = (request: GoogleAppsScript.Events.DoGet): GoogleAppsScript.Content.TextOutput => {
  return scheduleSearchAction.invoke(request);
}