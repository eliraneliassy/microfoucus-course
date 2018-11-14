import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')]),
      'friends': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.form);
    this.form.controls['name'].setValue('Eliran');
  }

  addFriend() {
    (this.form.controls['friends'] as FormArray).push(
      new FormControl(null, Validators.required)
    );
  }

}
