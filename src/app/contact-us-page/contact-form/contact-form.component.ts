import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      question: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(JSON.stringify(this.contactForm.value));
    } else {
      console.log("Formulár nie je správne vyplnený.");
    }
  }
}
