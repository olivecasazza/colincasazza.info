import { generateUUID } from 'three/src/math/MathUtils';
import type { ICoordinates } from '../utils';

export enum QuestionDirection {
  ACROSS = 'ACROSS',
  DOWN = 'DOWN',
}

export interface IQuestion {
  number: number;
  question: string;
  answer: string;
  root: ICoordinates;
  direction: QuestionDirection;
}
export interface IQuestionDbo extends IQuestion {
  id: string;
}

export class Question implements IQuestion {
  id: string = generateUUID();
  question: string;
  number: number;
  direction: QuestionDirection;
  answerMap: Map<ICoordinates, string>;

  static getCordAtAnswerIndex(q: IQuestion, index: number): ICoordinates {
    const cord = q.root;
    q.direction == QuestionDirection.ACROSS
      ? (cord.x += index)
      : (cord.y += index);
    return cord;
  }

  get answer(): string {
    return [...this.answerMap.values()].join('');
  }

  get root(): ICoordinates {
    return this.answerMap.keys().next()?.value;
  }

  constructor(props: IQuestion) {
    this.answerMap = new Map<ICoordinates, string>();
    props.answer.split('').forEach((character, index) => {
      let { x, y } = props.root;
      props.direction == QuestionDirection.ACROSS ? (x += index) : (y += index);
      this.answerMap.set({ x, y }, character);
    });
    this.question = props.question;
    this.number = props.number;
    this.direction = props.direction;
  }

  containsCoordinates(coordinates: ICoordinates): boolean {
    return [...this.answerMap.keys()].some((c) => c.x === coordinates.x && c.y === coordinates.y );
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
