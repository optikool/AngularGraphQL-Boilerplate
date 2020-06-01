import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { externalLinks } from '../../../constants/externalLinks.constants'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  links: Array<string>;
  link: string;

  constructor(@Inject(DOCUMENT) private document: Document) { 
    this.links = [
      'facebook',
      'linkedin',
      'twitter',
      'youtube',
      'eyenet'
    ];
  }

  public goToSocial(name: string): void {
    const link: string = this.getSocialLink(name);

    if (link) {
      this.document.open(link, null, 'target=_blank');
    }
  }

  private getSocialLink(name: string): string {
    let url: string;

    switch(name) {
      case 'facebook':
        url = externalLinks.socialLinks.facebook;
        break;
      case 'linkedin':
        url = externalLinks.socialLinks.linkedin;
        break;
      case 'twitter':
        url = externalLinks.socialLinks.twitter;
        break;
      case 'youtube':
        url = externalLinks.socialLinks.youtube;
        break;
      case 'eyenet':
        url = externalLinks.socialLinks.eyenet;
        break;
    }

    return url;
  }
}
