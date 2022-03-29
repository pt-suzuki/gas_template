import { getDate } from "../../helper/date_helper";
import { Schedule } from "./schedule";
import { ScheduleCriteria } from "./schedule_criteria";
import { ScheduleRepository } from "./schedule_repository";
import { ScheduleTranslator } from "./schedule_translator";

export interface ScheduleService {
  search(criteria: ScheduleCriteria): Schedule[];
}

export class ScheduleServiceImpl implements ScheduleService {
  private translator: ScheduleTranslator;
  // private repository: ScheduleRepository;

  constructor(translator: ScheduleTranslator, _: ScheduleRepository) {
    this.translator = translator;
    // this.repository = repository;
  }

  search(criteria: ScheduleCriteria): Schedule[] {
    const d = new Date();
    const today = getDate(d);
    // Form作成
    const form = FormApp.create(`${criteria.team} 出社予定_${today}`);
    // 質問作成
    const question = form.addListItem();
    question
      .setTitle("本日の勤怠タイプ")
      .setChoices([
        question.createChoice("出社"),
        question.createChoice("在宅"),
        question.createChoice("休暇"),
      ])
      .setRequired(true);

    return this.translator.translateResultToResultList();
  }
}