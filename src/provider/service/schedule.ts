import { ScheduleTranslator, ScheduleTranslatorImpl } from "~/domains/schedule/schedule_translator";
import { ScheduleServiceImpl, ScheduleService } from "../../domains/schedule/schedule_service";

export const scheduleTranslator: ScheduleTranslator = new ScheduleTranslatorImpl();

export const scheduleService: ScheduleService = new ScheduleServiceImpl(scheduleTranslator);