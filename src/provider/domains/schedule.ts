import { ScheduleTranslator, ScheduleTranslatorImpl } from "~/domains/schedule/schedule_translator";
import { ScheduleServiceImpl, ScheduleService } from "~/domains/schedule/schedule_service";
import { ScheduleRepository, ScheduleRepositoryImpl } from "~/domains/schedule/schedule_repository";

export const scheduleTranslator: ScheduleTranslator = new ScheduleTranslatorImpl();
const scheduleRepository: ScheduleRepository = new ScheduleRepositoryImpl(scheduleTranslator);

export const scheduleService: ScheduleService = new ScheduleServiceImpl(scheduleTranslator, scheduleRepository);