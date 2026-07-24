import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Member } from './pages/member/member';

import { Pagenotfound } from './pages/pagenotfound/pagenotfound';

import { List } from './pages/member/list/list';
import { Profile } from './pages/member/profile/profile';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'member', component: Member, children: [
    { path: 'list', component: List },
    { path: 'profile', component: Profile }
  ]},
   { path: '**', component: Pagenotfound },
];