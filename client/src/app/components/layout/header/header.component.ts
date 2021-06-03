import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeRoute = '/';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .subscribe((val) => {
        if (val instanceof NavigationEnd) {
          this.activeRoute = this.router.url;
        }
    });
  }

}
