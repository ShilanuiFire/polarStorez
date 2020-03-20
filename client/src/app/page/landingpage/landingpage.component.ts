import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  @Input() user: any;
  @Input() loggedIn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
