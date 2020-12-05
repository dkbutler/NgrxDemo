import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-different-page',
  templateUrl: './different-page.component.html',
  styleUrls: ['./different-page.component.css']
})
export class DifferentPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['/home-page']);
  }

}
