import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import {
    galleryCollections
  } from '../components/gallery/gallery-collections/graphql/get-response';
import { Collection } from '../interfaces/collection';

@Injectable()
export class HomeResolver implements Resolve<Observable<any>> {
  private limit: number = 6;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private apollo: Apollo) {}
    
  resolve(): Observable<[Collection]> {
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