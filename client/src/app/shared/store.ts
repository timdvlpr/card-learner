export interface Store<Type> {

  getAll(): Type[]

  add(data: Type): Promise<void>

  update(id: number, data: Type): Promise<void>

  remove(id: number): Promise<void>

}
