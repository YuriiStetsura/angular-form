import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "../validators/validators";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;
  get emailFormArray() {
    return this.reactiveForm.get('emails') as FormArray;
  }

  constructor() {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]),
      password: new FormControl(null, [
        Validators.required,
        MyValidators.onlyNumberAndWord
      ]),
      emails: new FormArray([])
    })
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.reactiveForm.get('emails')?.value)
  }

  addEmail() {
    const newEmail = new FormControl(null)
    this.emailFormArray.push(newEmail)
  }

  removeControl(idx: number) {
    this.emailFormArray.removeAt(idx)
  }
}
