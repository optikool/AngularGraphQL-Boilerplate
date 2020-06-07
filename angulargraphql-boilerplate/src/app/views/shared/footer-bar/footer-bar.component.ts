import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent {

  constructor(private router: Router) { }

  navigateToPage(page) {
    console.log('navigating to page: ', page);
    this.router.navigate(page);
  }
}
