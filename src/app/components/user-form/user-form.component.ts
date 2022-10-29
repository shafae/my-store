import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  name:string;
  address:string;
  cardNumber:string;
  @Output() userName= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  submit():void{
    this.userName.emit(this.name);
  }

}
