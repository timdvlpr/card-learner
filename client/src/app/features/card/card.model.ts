export class Card {
  id: number;
  question: string;
  answer: string;
  inStack: number;
  slug: string;
  name?: string;

  constructor(id: number, question: string, answer: string, inStack: number, slug: string) {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.inStack = inStack;
    this.slug = slug;
  }
}
