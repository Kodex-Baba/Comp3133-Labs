import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week12_http_nav_forms';
}
