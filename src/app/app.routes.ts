import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { TodoComponent } from './todo/todo/todo.component';
import { CvPage } from './cv/cv-page/cv-page';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { Color } from './components/color/color';
import { Second } from './components/second/second';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404 } from './composants/nf404/nf404';
import { Login } from './auth/login/login';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guard/auth-guard';

export const routes: Routes = [
  // Ici qu'on va définir nos routes
  {path: '', component: First},
  {path: 'todo', component: TodoComponent},
  {path: 'cv', component: CvPage},
  {path: 'cv/add', component: AddCvComponent, canActivate: [authGuard]},
  {path: 'cv/:id', component: DetailsCvComponent},
  {path: 'word', component: MiniWordComponent},
  {path: 'login', component: Login},
  {path: 'color', component: Color},
  {path: 'hello/:name/:firstname', component: Second},
  {path: '**', component: NF404},
];
