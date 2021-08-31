import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalService } from '../../modal/modal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeRoute = '/';

  constructor(
    private router: Router,
    private modalService: ModalService,
    private location: Location
  ) { }

  showAddModal(): void {
    this.modalService.openModalWithData('add-data-modal', {type: 'stack'});
    this.location.go('/add');
    this.activeRoute = '/add';
  }

  ngOnInit(): void {
    this.location.subscribe(val => {
      if (val.type === 'popstate') {
        if (val.url!.length === 0) {
          this.activeRoute = '/';
        } else {
          this.activeRoute = val.url!;
        }
      }
    })
    this.router.events
      .subscribe((val) => {
        if (val instanceof NavigationEnd) {
          this.activeRoute = this.router.url;
        }
    });
  }

}
