import { Component } from '@angular/core';
import { StackService } from '../../components/stack/stack.service';
import { ModalService } from '../../components/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public stackService: StackService,
    public modalService: ModalService
  ) { }

}
