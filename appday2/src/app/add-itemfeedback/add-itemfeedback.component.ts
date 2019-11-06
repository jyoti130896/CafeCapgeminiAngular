import { Component, OnInit } from '@angular/core';
import { CafeMenu } from '../model/CafeMenu';
import { Feedback } from '../model/Feedback';
import { ActivatedRoute } from '@angular/router';
import { CapCafeService } from '../cap-cafe/cap-cafe.service';

@Component({
  selector: 'app-add-itemfeedback',
  templateUrl: './add-itemfeedback.component.html',
  styleUrls: ['./add-itemfeedback.component.css']
})
export class AddItemfeedbackComponent implements OnInit {
  sub;
  userId:number;
  itemId : number;
  itemName:string;
  item : CafeMenu;
  feedbackType: string;
  itemRating:number;
  itemReview:string;
  feedback:Feedback;
  constructor(private route : ActivatedRoute, private service : CapCafeService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.itemName = params['itemName'];
    });
    console.log(this.itemName);
  }
  addItemRating(){
    this.service.saveItemRating(this.userId,this.itemName,this.feedbackType,this.itemRating).subscribe(data => this.feedback=data);
    this.item=new CafeMenu();
  }
  addItemReview(){
    this.service.saveItemReview(this.userId,this.itemName,this.feedbackType,this.itemReview).subscribe(data => this.feedback=data);
    this.item=new CafeMenu();
  }
}
