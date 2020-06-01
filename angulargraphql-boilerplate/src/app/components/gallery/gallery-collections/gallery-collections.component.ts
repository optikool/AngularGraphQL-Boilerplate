import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { 
  fancyCaptionLoadTrigger, 
  fancyCaptionBottomLoadTrigger, 
  fancyCaptionTopLoadTrigger  
} from '../../../animations/fancy-caption.animation';

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
  galleries: Observable<any[]>;

  constructor(
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.galleries = this.getGalleryCollections();
  }

  handleIsActive(event: {state: string}, data: any) {
    console.log('handleIsActive event.state: ', event.state);
    console.log('handleIsActive data.isActive: ', data.isActive);
    data.isActive = event.state;
  }

  getThumbnail(thumbnail: string) {
    return 'http://localhost:1337' + thumbnail;
  }

  handleTrackBy(index, item) {
    return index;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  private getGalleryCollections() {
    const galleryCollections = gql`
      query collections($limit: Int) {
        collections(limit: $limit) {
          name
          description
          created_date
          thumbnail {
            name
            url
            id
            hash
            ext
          }
          cagetory {
            name
            description
            thumbnail {
              name
              url
              id
              hash
              ext
            }
          }
          gallery {
            name
            url
            id
            hash
            ext
          }
          id
        }
      }
    `;

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
        console.log('result: ', result);
        return result.data.collections
          .slice(0, this.limit)
          .map((collection) => {
            return {
              ...collection,
              isActive: false
            };
          });
      })
    );
  }
}
