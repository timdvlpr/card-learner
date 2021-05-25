export interface Card {
  id: number;
  question: string;
  answer: string;
  inStack: number;
  slug: string;
  name?: string;
}
