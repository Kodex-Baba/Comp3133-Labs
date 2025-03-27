import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})

export class PostListComponent{
  public posts: any[] = [];

  isClassAvailable = true

  constructor(private apiClientService: ApiClientService) { }

  ngOnInit(){
    //get the posts after component is created
    this.getPosts();
  }

  getPosts(){
    this.apiClientService.getPosts().subscribe(
      {
        next: (response: any) => {
          //response should be available
          //take necessaru steps to use the response
          console.log('Response:', response);
          this.posts = response;
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        },
      }
    )
  }



  getPostById(id: number) {
    this.apiClientService.getPostByID(id).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  createPost(post: any) {
    this.apiClientService.createPost(post).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  updatePost(id: number, post: any) {
    this.apiClientService.updatePost(id, post).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  deletePost(id: number) {
    this.apiClientService.deletePost(id).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
