import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { ErrorStateMatcher } from '@angular/material/core';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }

// }

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
  constructor(
   private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  
  contactform = new FormGroup({
    name: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
     ]),
     link: new FormControl(''),
     message: new FormControl('')
   });
   
  //matcher = new MyErrorStateMatcher();
  
  submit() {
    console.log('Form Submitted', this.contactform.value);
    this.http.post('http://localhost:5000', this.contactform.value).subscribe(
       (res) => console.log(res),
       (error) => console.log(error)
    );
  }

}

