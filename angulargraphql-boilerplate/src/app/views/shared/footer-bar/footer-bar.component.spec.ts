import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FooterBarComponent } from './footer-bar.component';
import { MaterialsModule } from 'src/app/helpers/materials/materials.module';
import { Router } from '@angular/router';

describe('FooterBarComponent', () => {
  let component: FooterBarComponent;
  let fixture: ComponentFixture<FooterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBarComponent ],
      imports: [
        RouterTestingModule,
        MaterialsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to page', () => {
    spyOn(component, 'navigateToPage');
    component.navigateToPage('/gallery');
    expect(component.navigateToPage).toHaveBeenCalledWith('/gallery');
  });
});
