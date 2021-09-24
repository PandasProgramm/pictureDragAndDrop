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
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TagsComponent } from './tools/tags/tags.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddPictureComponent } from './tools/add-picture/add-picture.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgxDropzoneModule} from 'ngx-dropzone';


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
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
