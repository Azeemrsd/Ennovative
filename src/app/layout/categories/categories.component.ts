import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
categories = {
  Electronic:[{
    name:'AC',
    price:250,
    currency:'AED',
  },
  {
    name:'TV',
    price:150,
    currency:'AED',
  },
  {
    name:'Washing machine',
    price:350,
    currency:'AED',
  },{
    name:'Laptop',
    price:250,
    currency:'AED',
  }],
  General:[{
    name:'Sugar',
    price:10,
    currency:'AED',
  },
  {
    name:'Rice',
    price:25,
    currency:'AED',
  },
  {
    name:'Oil',
    price:50,
    currency:'AED',
  },{
    name:'Water',
    price:8,
    currency:'AED',
  }],
  Stationary:[{
    name:'Book',
    price:10,
    currency:'AED',
  },
  {
    name:'Pen',
    price:5,
    currency:'AED',
  },
  {
    name:'Pencil',
    price:5,
    currency:'AED',
  },{
    name:'Text book',
    price:250,
    currency:'AED',
  }],
}
allCategoriesSelected : boolean = false 
selectedCategories = []
  ngOnInit(): void {
  }
  selectedCategory(item){
    if(this.selectedCategories.length > 0){
      const selectedItemIndex:any = this.selectedCategories.map((category,i)=> category.key === item.key ? i : null)
      const indexToBeRemoved = selectedItemIndex.filter(e=> e!=null)
    if (indexToBeRemoved[0] !=null) {
      this.selectedCategories.splice(indexToBeRemoved[0],1);
    } else {
      this.selectedCategories.push(item)
    }
    }else{
      this.selectedCategories.push(item)
    }
  }
  isItemselected(item){
   return this.selectedCategories.find((category)=> item.key == category.key ? true : false)
  }
  AllCategoriesSelected(){
    this.allCategoriesSelected = true;
    console.log('this.selectedCategories :>> ', this.selectedCategories);
  }
}
