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
    firstname: new FormControl('', [ Validators.required ]),
    lastname: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
     ]),
     link_of_files__if_any_: new FormControl(''),
     message: new FormControl(''),
     hutk: new FormControl('')
   });
   
  //matcher = new MyErrorStateMatcher();
  
  submit() {
    const formData = this.contactform.value;
    
     const data = {
       "fields": [
         { "name": "firstname", "value": formData.firstname },
         { "name": "lastname", "value": formData.lastname },
         { "name": "email", "value": formData.email },
         { "name": "link_of_files__if_any_", "value": formData.link_of_files__if_any_ },
         { "name": "message", "value": formData.message },
         { "name": "hutk", "value": formData.hutk }
       ]
     }

      //const formData = this.contactform.value;
      //console.log('Form Submitted', formData);
    if(formData.firstname != '' || formData.email != ''){
     this.http.post('https://api.hsforms.com/submissions/v3/integration/submit/25497460/8063fa3c-24c2-4cf3-bf5d-bdcbac497fdf', data).subscribe(
       (response) => alert(JSON.stringify(response)),
       (error) => console.log(error)
     );
    }
  }

}

