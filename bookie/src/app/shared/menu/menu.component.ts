import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  imageSrc = "assets/images/book2.png"
  imageSrc2 = "assets/images/cart.png"

  constructor() { }

  ngOnInit(): void {
  }
}
