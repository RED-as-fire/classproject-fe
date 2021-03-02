import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links:object[];
  constructor() { }

  ngOnInit(): void {
    this.links=[
      {
        label:"Home",
        path:"/home",
      },
      {
        label:"Studenti",
        path:"/students",
      },
      {
        label:"Corsi",
        path:"/courses",
      },
      {
        label:"Aule",
        path:"/classrooms",
      }
    ]
  }

}
