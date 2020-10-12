import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  keys: any[];

  constructor() { }
@Input() selectedCategories:any
rows = []
  ngOnInit(): void {
 this.rows = Object.keys(this.selectedCategories[0].value[0])
console.log('this.rows :>> ', this.rows);
}
}
