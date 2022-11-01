import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {

  onSubmit(data: string){
    console.log(data);
  }

  userData={
    uid:'001'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
