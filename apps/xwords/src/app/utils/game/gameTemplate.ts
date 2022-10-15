import { IQuestionDbo } from "./question";

export interface IGameTemplateDbo {
    id: string;
    questions: IQuestionDbo[];
}