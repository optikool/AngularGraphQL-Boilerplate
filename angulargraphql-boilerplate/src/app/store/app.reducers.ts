import { ActionReducerMap } from '@ngrx/store';
import * as fromGalleryReducer from './gallery/gallery.reducers';
import { InjectionToken } from '@angular/core';
import GalleryState from './gallery/gallery.state';

export const appFeatureKey = 'app';

export interface AppState {
    [fromGalleryReducer.featureKey]: GalleryState
}

export const reducers = new InjectionToken<ActionReducerMap<AppState>>(appFeatureKey, {
    factory: () => ({
      [fromGalleryReducer.featureKey]: fromGalleryReducer.GalleryReducer
    })
  });


