import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../model/Feedback';
import { ActivatedRoute } from '@angular/router';
import { CapCafeService } from '../cap-cafe/cap-cafe.service';
import { CafeDetails } from '../model/CafeDetails';
@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  sub;
  userId:number;
  cafeId : number;
  cafeLocation:string;
  cafe : CafeDetails;
  feedbackType: string;
  cafeRating:number;
  feedback:Feedback;
  cafeReview:string;
  constructor(private route : ActivatedRoute, private service : CapCafeService) { }
  
  ngOnInit() {
  }
  addCafeRating(){
    this.service.saveCafeRating(this.userId,this.cafeLocation,this.feedbackType,this.cafeRating).subscribe(data => this.feedback=data);
    this.cafe=new CafeDetails();
  }
  addCafeReview(){
    this.service.saveCafeReview(this.userId,this.cafeLocation,this.feedbackType,this.cafeReview).subscribe(data => this.feedback=data);
    this.cafe=new CafeDetails();
  }
}
