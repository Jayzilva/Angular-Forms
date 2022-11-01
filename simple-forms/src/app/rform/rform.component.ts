import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  submitData(){
    console.log(this.loginForm.value);
  }

}
