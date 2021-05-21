import { Component, OnInit } from '@angular/core';
import { StackService } from '../../components/stack/stack.service';
import { ModalService } from '../../components/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  errorMessage = '';

  constructor(
    public stackService: StackService,
    public modalService: ModalService
  ) { }

  showStackError(error: string): void {
    this.errorMessage = error;
  }

  async ngOnInit(): Promise<void> {
    try {
      await this.stackService.getAllStacks();
      this.errorMessage = '';
    } catch (e) {
      this.errorMessage = e;
    }
  }

}
