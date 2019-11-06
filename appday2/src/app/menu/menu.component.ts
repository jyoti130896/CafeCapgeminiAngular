import { Component, OnInit } from '@angular/core';
import { CapCafeService } from '../cap-cafe/cap-cafe.service';
import { Router } from '@angular/router';
import { CafeMenu } from '../model/CafeMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  items:CafeMenu[];
  selectedItem:number;
  selectedName:String;
  result:number;
  constructor(private service:CapCafeService, private router:Router) { }

  ngOnInit() {
    this.service.listMenu().subscribe(data => this.items=data);
  }
  onSelect(c : CafeMenu){
    this.selectedItem = c.itemId;
    this.selectedName=c.itemName;
    this.router.navigate(['additemfeedback',this.selectedItem,this.selectedName]);
  }
  // onSelectName(c : CafeMenu){
  //   this.selectedName = c.itemName;
  //   this.router.navigate(['viewitemrating',this.selectedName]);
  // }
  searchItemRating(name:String){
    this.service.searchItemAverageRating(name).subscribe(data =>{
      this.result=data;
      console.log(this.result);
      return this.result;
    });

}
}
