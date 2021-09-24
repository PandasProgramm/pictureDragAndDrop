import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../../features/home/home.component';
import {SettingsComponent} from '../../features/settings/settings.component';
import {GalleryComponent} from '../../features/gallery/gallery.component';
import {PageNotFoundComponent} from '../../features/page-not-found/page-not-found.component';
import {AddPictureComponent} from '../../tools/add-picture/add-picture.component';

const routes: Routes =
  [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    },
    {
      path: 'gallery',
      component: GalleryComponent,
      children: [
        {
          path: 'addPicture',
          component: AddPictureComponent
        }
      ]
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];

export const appRouting = RouterModule.forRoot(routes);
