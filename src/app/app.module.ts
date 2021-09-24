import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './features/home/home.component';
import { SettingsComponent } from './features/settings/settings.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { AssetListComponent } from './tools/asset-list/asset-list.component';
import { AssetDetailComponent } from './tools/asset-detail/asset-detail.component';
import { HeaderComponent } from './features/header/header.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import {appRouting} from './shared/routing/routes';
import {materials} from './shared/materials/materials';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TagsComponent } from './tools/tags/tags.component';
import { AddPictureComponent } from './features/add-picture/add-picture.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {MatButtonModule} from '@angular/material/button';

import {environment} from '../environments/environment';
import {AngularFirestoreModule, SETTINGS} from '@angular/fire/compat/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAnalyticsModule} from '@angular/fire/compat/analytics';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    GalleryComponent,
    AssetListComponent,
    AssetDetailComponent,
    HeaderComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    TagsComponent,
    AddPictureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    appRouting,
    ...materials,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          deps: [HttpClient],
          useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json')
        }
      }
    ),
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxDropzoneModule,
    MatButtonModule
  ],
  providers: [{provide: SETTINGS, useValue: { }}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
