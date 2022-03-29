import { scheduleSearchAction } from './provider/controller/index';

declare const global: any;

global.doGet = (request: GoogleAppsScript.Events.DoGet): GoogleAppsScript.Content.TextOutput => {
  return scheduleSearchAction.invoke(request);
}