import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('templateForm') templateForm!: NgForm
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.templateForm.form.value)
  }
}
