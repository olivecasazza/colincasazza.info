import { generateUUID } from "three/src/math/MathUtils";
import type { ICoordinates } from "./utils";

export enum IQuestionDirectionEnum {
  ACROSS = "ACROSS",
  DOWN = "DOWN",
}

export interface IQuestion {
  number: number;
  question: string;
  answer: string;
  root: ICoordinates;
  direction: IQuestionDirectionEnum;
}
export interface IQuestionDbo extends IQuestion {
  id: string;
}

export class Question implements IQuestion {
  id: string = generateUUID();
  question: string;
  number: number;
  direction: IQuestionDirectionEnum;
  answerMap: Map<ICoordinates, string>;

  static getCordAtAnswerIndex(q: IQuestion, index: number): ICoordinates {
    const cord = q.root;
    q.direction == IQuestionDirectionEnum.ACROSS
      ? (cord.x += index)
      : (cord.y += index);
    return cord;
  }

  get answer(): string {
    return [...this.answerMap.values()].join("");
  }

  get root(): ICoordinates {
    return this.answerMap.keys().next()?.value;
  }

  constructor(props: IQuestion) {
    this.answerMap = new Map<ICoordinates, string>();
    props.answer.split("").forEach((character, index) => {
      let { x, y } = props.root;
      props.direction == IQuestionDirectionEnum.ACROSS
        ? (x += index)
        : (y += index);
      this.answerMap.set({ x, y }, character);
    });
    this.question = props.question;
    this.number = props.number;
    this.direction = props.direction;
  }

  static ToDbo(question: Question): IQuestionDbo {
    return {
      id: question.id,
      question: question.question,
      number: question.number,
      answer: question.answer,
      direction: question.direction,
      root: question.root,
    };
  }
}
