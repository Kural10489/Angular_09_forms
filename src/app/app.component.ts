import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Angularforms';
public shirts=['S','M','L']
userModel=new User('','','','',9080724529,true);

onSubmit(){
console.log(this.userModel);

}
}
