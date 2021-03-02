import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.scss']
})
export class NavbarLinkComponent implements OnInit {

  @Input() path:string;
  @Input() pathName:string;


  constructor() { }

  ngOnInit(): void {
  }

}
