import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})



export class NotFoundComponent implements OnInit {
  index: number = 0;

  openNext() {
      this.index = (this.index === 2) ? 0 : this.index + 1;
  }
  
  openPrev() {
      this.index = (this.index === 0) ? 2 : this.index - 1;
  }
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}
