import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCollectionComponent } from './gallery/gallery-collection/gallery-collection.component';
import { GalleryCollectionsComponent } from './gallery/gallery-collections/gallery-collections.component';
import { GalleryFceComponent } from './gallery/gallery-fce/gallery-fce.component';
import { VideoCollectionComponent } from './video/video-collection/video-collection.component';
import { VideoCollectionsComponent } from './video/video-collections/video-collections.component';
import { VideoFceComponent } from './video/video-fce/video-fce.component';
import { MaterialsModule } from '../helpers/materials/materials.module';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [
    GalleryCollectionComponent,
    GalleryCollectionsComponent,
    GalleryFceComponent,
    VideoCollectionComponent,
    VideoCollectionsComponent,
    VideoFceComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    DirectivesModule
  ],
  exports: [
    GalleryCollectionComponent,
    GalleryCollectionsComponent,
    GalleryFceComponent,
    VideoCollectionComponent,
    VideoCollectionsComponent,
    VideoFceComponent
  ]
})
export class ComponentsModule { }
