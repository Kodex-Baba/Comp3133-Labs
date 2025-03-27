import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, FormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})

export class ReactiveFormComponent {
  userForm: any;

  constructor(private formBuilder : FormBuilder) {
  }


  ngOnInit() : void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      numTickets: ['', [Validators.required, Validators.minLength(2)]],
    });
  }


  submitForm(): void {
    if (this.userForm?.valid) {
      alert(`Form data: ${JSON.stringify(this.userForm.value)}`);
    }
  }
}
