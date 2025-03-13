import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  {CommonModule} from '@angular/common';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userName = "Akorede";
  title = 'week10_angular_intro by Akorede';

  message = "Hello from appComponent";

  buttonClick(): void {
    alert("hello angular")
}

someImage = "https://miro.medium.com/v2/resize:fit:1200/1*TQusJA0dGM2IA7H_VrqOsw.jpeg"

  today : Date = new Date(2025, 3, 14)
  now = new Date();

  stud = {
    id: 101,
    firstName: "John",
    lastName: "Doe",
    course: "Angular"
  }
}


