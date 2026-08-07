import { Routes } from '@angular/router';

import { DataBinding } from './pages/data-binding/data-binding';
import { ShowData } from './pages/show-data/show-data';
import { Landmarks } from './pages/HW2/landmarks';
import { Showmovie } from './pages/HW1/showmovie';

export const routes: Routes = [
    {path: '', component: Landmarks},
    {path: 'data-binding', component: DataBinding},
    {path: 'show-data', component: ShowData},
    {path: 'HW1', component: Landmarks},
    {path: 'HW2', component: Showmovie},
];