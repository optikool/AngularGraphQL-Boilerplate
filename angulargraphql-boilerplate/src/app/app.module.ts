import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';

import { MaterialsModule } from './helpers/materials/materials.module';
import { ViewsModule } from './views/views.module';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
// import { ResolversModule } from './resolvers/resolvers.module';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { HomeResolver } from './resolvers/home.resolver';
import { GalleryModule } from './views/gallery/gallery.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ViewsModule,
    ComponentsModule,
    DirectivesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({}, {}),
    NgbModule,
    GalleryModule,
    EffectsModule.forRoot([])
  ],
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [{
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache({
            addTypename: false
          }),
          link: httpLink.create({
            uri: 'http://localhost:1337/graphql'
          }),
          defaultOptions: {
            watchQuery: {
              errorPolicy: 'all'
            }
          }
        }
      },
      deps: [HttpLink]
    },
    HomeResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
