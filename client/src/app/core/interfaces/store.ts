export interface Store<Type> {
  getAll(): Type[];

  add(data: Type): void;

  update(id: number, data: Type): void;

  remove(id: number): void;
}
