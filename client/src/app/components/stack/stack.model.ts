export class Stack {
  id: number;
  name: string;
  slug: string;
  inGroup: number;

  constructor(id: number, name: string, slug: string, inGroup: number) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.inGroup = inGroup;
  }
}
