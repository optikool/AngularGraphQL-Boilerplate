import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCollectionsComponent } from './gallery-collections.component';

describe('GalleryCollectionsComponent', () => {
  let component: GalleryCollectionsComponent;
  let fixture: ComponentFixture<GalleryCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create GalleryCollectionsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should get getThumbnail url', () => {
    const urlPath = '/uploads/7b24b43801a1476fa54fb0231003d610.jpg';
    const url = 'http://localhost:1337';
    const result = component.getThumbnail(urlPath);
    expect(result).toEqual(url + urlPath);
  });
});
