import { GameFactory } from './gameFactory';
import { QuestionDirection } from './question';

export const mockGame = new GameFactory()
  .addQuestion({
    direction: QuestionDirection.ACROSS,
    root: { x: 1, y: 0 },
    answer: 'LEFT',
    number: 1,
    question: "It's just not right.",
  })
  .addQuestion({
    direction: QuestionDirection.ACROSS,
    root: { x: 1, y: 1 },
    answer: 'YALE',
    number: 5,
    question: "School parodied on 'Kale' sweatshirts.",
  })
  .addQuestion({
    direction: QuestionDirection.ACROSS,
    root: { x: 0, y: 2 },
    answer: 'ARGON',
    number: 6,
    question: 'Element #18, a noble gas.',
  })
  .addQuestion({
    direction: QuestionDirection.ACROSS,
    root: { x: 0, y: 3 },
    answer: 'VILE',
    number: 7,
    question: "Apt anagram of 'evil.'",
  })
  .addQuestion({
    direction: QuestionDirection.ACROSS,
    root: { x: 0, y: 4 },
    answer: 'ACES',
    number: 8,
    question: 'They top kings.',
  })
  // DOWN QUESTIONS
  .addQuestion({
    direction: QuestionDirection.DOWN,
    root: { x: 1, y: 0 },
    answer: 'LYRIC',
    number: 1,
    question: 'Line from a song.',
  })
  .addQuestion({
    direction: QuestionDirection.DOWN,
    root: { x: 2, y: 0 },
    answer: 'EAGLE',
    number: 2,
    question: 'Highest rank in Scouting.',
  })
  .addQuestion({
    direction: QuestionDirection.DOWN,
    root: { x: 3, y: 0 },
    answer: 'FLOES',
    number: 3,
    question: 'Chunks of ice.',
  })
  .addQuestion({
    direction: QuestionDirection.DOWN,
    root: { x: 4, y: 0 },
    answer: 'TEN',
    number: 4,
    question: 'Height, in feet, of an N.B.A. hoop.',
  })
  .addQuestion({
    direction: QuestionDirection.DOWN,
    root: { x: 0, y: 2 },
    answer: 'AVA',
    number: 6,
    question: "Hannah Einbinder's role on 'Hacks.'",
  })
  .getGame();
