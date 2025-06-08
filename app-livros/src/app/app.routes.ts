import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { BookPageComponent } from './shared/pages/book-page/book-page.component';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent
    },
    {   path: 'book',
        component:BookPageComponent
    }
];
