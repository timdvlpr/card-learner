import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stack } from './stack.model';
import { StackService } from './stack.service';

@Injectable({
  providedIn: 'root'
})
export class StackStoreService {

  private readonly _stackSource = new BehaviorSubject<Stack[]>([]);
  readonly stacks$ = this._stackSource.asObservable();

  private readonly _selectedStackSource = new BehaviorSubject<number>(-1);
  readonly selectedStack$ = this._selectedStackSource.asObservable();

  constructor(private stackService: StackService) {
    this._loadInitialData();
  }

  private _setStacks(stacks: Stack[]): void {
    this._stackSource.next(stacks);
  }

  private _loadInitialData() {
    this.stackService.getStacks()
      .then((stacks: Stack[]) => {
        this._setStacks(stacks);
        if (stacks.length > 0) {
          this.updateSelectedStack(stacks[0].id);
        }
      });
  }

  getStacks(): Stack[] {
    return this._stackSource.getValue();
  }

  async addStack(stack: Stack): Promise<void> {
    const data = await this.stackService.createStack(stack);

    const stacks = [...this.getStacks(), data];
    this._setStacks(stacks);
  }

  async updateStack(id: number, stack: Stack): Promise<void> {
    const data = await this.stackService.updateStack(id, stack);

    const stacks = this.getStacks().map(s =>
      s.id === stack.id ? new Stack(data.id, data.name, data.slug, data.inGroup) : s
    );
    this._setStacks(stacks);
  }

  async removeStack(id: number): Promise<void> {
    await this.stackService.deleteStack(id);

    const stacks = this.getStacks().filter(s => s.id !== id);
    this._setStacks(stacks);
  }

  updateSelectedStack(id: number) {
    this._selectedStackSource.next(id);
  }

}
