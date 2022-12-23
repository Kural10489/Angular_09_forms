import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';
import { passwordValidator } from '../customvalidations/password.validator';
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {

constructor(private fb:FormBuilder){}
registrationForm=this.fb.group({
  username:['',Validators.required,Validators.minLength(5)],
  password:[''],
  confirmPassword:[''],
  address:this.fb.group({
    city:[''],
    state:[''],
    pincode:['']
  })
},{Validator:passwordValidator});
// registrationForm=new FormGroup({
// username: new FormControl('kural'),
// password:new FormControl(''),
// confirmPassword:new FormControl(''),
// address: new FormGroup({
//   city: new FormControl(''),
//   state: new FormControl(''),
//   Pincode: new FormControl(''),
// })
// });
}
