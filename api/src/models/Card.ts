export class Card {
    id: number;
    question: string;
    answer: string;
    inStack: number;

    constructor(id: number, question: string, answer: string, inStack: number) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.inStack = inStack;
    }
}
