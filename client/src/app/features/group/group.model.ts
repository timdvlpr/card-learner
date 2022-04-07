export class Group {
  id?: number;
  slug?: string;
  name: string;

  constructor(name: string, id?: number, slug?: string) {
    this.name = name;
    this.id = id;
    this.slug = slug;
  }
}
