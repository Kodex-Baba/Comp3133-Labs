import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'postlist', component: PostListComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: '**', component: PageNotFoundComponent } // Wildcard route for 404
];

