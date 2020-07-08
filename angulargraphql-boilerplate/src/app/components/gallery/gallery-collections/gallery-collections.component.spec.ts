import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCollectionsComponent } from './gallery-collections.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { HomeComponent } from 'src/app/views/home/home.component';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MaterialsModule } from 'src/app/helpers/materials/materials.module';

describe('GalleryCollectionsComponent', () => {
  let component: GalleryCollectionsComponent;
  let fixture: ComponentFixture<GalleryCollectionsComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ApolloTestingModule,
        MaterialsModule
      ],
      declarations: [ GalleryCollectionsComponent ],
      providers: [
        Apollo,
        HttpLink,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    expect(component).toBeTruthy();
  });

  it('should get getThumbnail url', () => {
    const urlPath = '/uploads/7b24b43801a1476fa54fb0231003d610.jpg';
    const url = 'http://localhost:1337';
    const result = component.getThumbnail(urlPath);
    expect(result).toEqual(url + urlPath);
  });

  it('should return index', () => {
    const index: number = 10;
    const result = component.handleTrackBy(index);
    expect(result).toEqual(index);
  });

  it('should set active collection', () => {
    const event: {state: string} = {state: 'active'};
    const data =  {
      id: '1',
      name: 'Wallpaper Collection One',
      description: 'This is my first collection',
      created_date: '2020-02-23T10:30:00.000Z',
      thumbnail: {
        name: '00ab9c0a555b0c0f765a8f08d1efbf96bb3ccf7a44aa995e77949afdf2356f5c.jpg',
        url: '/uploads/d436732f6fce449ea330e2a672d98d69.jpg',
        id: '3',
        hash: 'd436732f6fce449ea330e2a672d98d69',
        ext: '.jpg'
      },
      cagetory: {
        name: 'Wallpapers',
        description: 'These are some screenshots of wallpapers.',
        thumbnail: {
          name: '6bc9c46975d2bd0ad39999ca49b121eb2783a0f836fb3ffc7279ccb20ed904ce.jpg',
          url: '/uploads/01417d16c54e42adb7460b091b2cfc7e.jpg',
          id: '2',
          hash: '01417d16c54e42adb7460b091b2cfc7e',
          ext: '.jpg'
        }
      },
      gallery: [
        {
          name: '00ab9c0a555b0c0f765a8f08d1efbf96bb3ccf7a44aa995e77949afdf2356f5c.jpg',
          url: '/uploads/9b6118ad7aad4c7385f7243a0fe34cd6.jpg',
          id: '4',
          hash: '9b6118ad7aad4c7385f7243a0fe34cd6',
          ext: '.jpg'
        },
        {
          name: '0cb574baf587562cb66e1cb785c49eb3a6ed3c23eabb7dc5f7f04a95d0fb0faf.jpg',
          url: '/uploads/176e01eadc3f4782a4c14cfaf747014b.jpg',
          id: '5',
          hash: '176e01eadc3f4782a4c14cfaf747014b',
          ext: '.jpg'
        },
        {
          name: '0d3b447e9c9a3855ba4efde706903a4d712de3ca74a2b7503ec02a8156ce4388.jpg',
          url: '/uploads/903925ed2e7d4aedb3042d995955fd1b.jpg',
          id: '6',
          hash: '903925ed2e7d4aedb3042d995955fd1b',
          ext: '.jpg'
        },
        {
          name: '0e74d98b0c0a0ae8828ab71cbec97df8cc98cb148ec5a9182dc2c9f268ad9037.jpg',
          url: '/uploads/92a6fd0847eb4052ae9fb2624fb29a91.jpg',
          id: '8',
          hash: '92a6fd0847eb4052ae9fb2624fb29a91',
          ext: '.jpg'
        }
      ],
      isActive: 'inactive'
    };
    spyOn(component, 'handleIsActive').and.callThrough();
    component.handleIsActive(event, data);
    expect(component.handleIsActive).toHaveBeenCalledWith(event, data);
    expect(event.state).toEqual(data.isActive);
  });
});
