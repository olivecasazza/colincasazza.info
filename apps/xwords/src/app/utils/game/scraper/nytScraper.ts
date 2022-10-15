import { db } from '@app/services/firebase';
import { GameFactory } from '../gameFactory';
import { QuestionDirection } from '../question';

interface NYTTemplate {
  body: {
    cells: {
      answer: string;
      clues: number[];
      label: string;
      type: number;
    }[];
    clueLists: { clues: number[]; name: string }[];
    clues: {
      cells: number[];
      direction: 'Across' | 'Down';
      label: string;
      text: {
        plain: string;
      }[];
    }[];
    dimensions: { height: number; width: number };
  }[];
}

export async function NYTToGameTemplate(nytTemplate: NYTTemplate) {
  const gameFactory = new GameFactory();
  const template = nytTemplate.body[0];
  console.log(nytTemplate);
  template.clues.forEach((clue) => {
    gameFactory.addQuestion({
      direction:
        clue.direction === 'Across'
          ? QuestionDirection.ACROSS
          : QuestionDirection.DOWN,
      answer: template.cells
        .filter((cell, index) => clue.cells.includes(index))
        .map((cell) => cell.answer)
        .join(''),
      number: Number.parseInt(clue.label),
      question: clue.text.pop()?.plain || '',
      root: {
        x: clue.cells[0] % template.dimensions.width,
        y: Math.trunc(clue.cells[0] / template.dimensions.height),
      },
    });
  });
  return await gameFactory.saveToFirestore(db);
}
