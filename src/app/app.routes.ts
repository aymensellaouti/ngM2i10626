import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { TodoComponent } from './todo/todo/todo.component';
import { CvPage } from './cv/cv-page/cv-page';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { Color } from './components/color/color';
import { Second } from './components/second/second';

export const routes: Routes = [
  // Ici qu'on va définir nos routes
  {path: '', component: First},
  {path: 'todo', component: TodoComponent},
  {path: 'cv', component: CvPage},
  {path: 'word', component: MiniWordComponent},
  {path: 'color', component: Color},
  {path: 'hello/:name/:firstname', component: Second},
];
