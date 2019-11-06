import { Component, OnInit } from '@angular/core';
import { CapCafeService } from '../cap-cafe/cap-cafe.service';
import { Router } from '@angular/router';
import { UserDetails } from '../model/User';
import { CafeDetails } from '../model/CafeDetails';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

cafes:CafeDetails[];
selectedCafe:number;
result:number;
selectedLocation:String;

  constructor(private service:CapCafeService, private router:Router)
  { 
  }

  ngOnInit() {
    this.service.listCafe().subscribe(data => this.cafes=data);
  }
  onSelect(c : CafeDetails){
    this.selectedCafe = c.cafeId;
    this.selectedLocation=c.cafeLocation;
    this.router.navigate(['addfeedback',this.selectedCafe,this.selectedLocation]);
  }
  searchCafeRating(name:String){
    this.service.searchCafeAverageRating(name).subscribe(data =>{
      this.result=data;
      console.log(this.result);
      return this.result;
    });
}
}
