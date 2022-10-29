import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }

  name=this.activeRoute.snapshot.paramMap.get('name');
  price=this.activeRoute.snapshot.paramMap.get('orderPrice');

  ngOnInit(): void {
  }

}
