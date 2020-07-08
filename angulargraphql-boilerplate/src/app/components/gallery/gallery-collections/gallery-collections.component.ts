import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';

import {
  galleryCollections
} from './graphql/get-response';
import { 
  fancyCaptionLoadTrigger, 
  fancyCaptionBottomLoadTrigger, 
  fancyCaptionTopLoadTrigger  
} from '../../../animations/fancy-caption.animation';
import { 
  Collection 
} from '../../../interfaces/collection';

@Component({
  selector: 'app-gallery-collections',
  templateUrl: './gallery-collections.component.html',
  styleUrls: ['./gallery-collections.component.scss'],
  animations: [
    fancyCaptionLoadTrigger,
    fancyCaptionBottomLoadTrigger,
    fancyCaptionTopLoadTrigger
  ]
})
export class GalleryCollectionsComponent implements OnInit, OnDestroy {
  @Input() public heading: string;
  @Input() public limit: number;
  @Input() public columns: number;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  galleries: Observable<[Collection]>;

  constructor(
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.galleries = this.getGalleryCollections();
  }

  handleIsActive(event: {state: string}, data: any): void {
    data.isActive = event.state;
  }

  getThumbnail(thumbnail: string): string {
    return 'http://localhost:1337' + thumbnail;
  }

  handleTrackBy(index): number {
    return index;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  private getGalleryCollections(): Observable<[Collection]> {
    return this.apollo.watchQuery<any>({
      query: galleryCollections,
      variables: {
        limit: this.limit,
      }
    })
    .valueChanges
    .pipe(takeUntil(this.destroyed$))
    .pipe(
      map(result => {
        return result.data.collections
          .slice(0, this.limit)
          .map((collection) => {
            return {
              ...collection,
              isActive: 'inactive'
            };
          });
      })
    );
  }
}
