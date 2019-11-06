import { Injectable } from '@angular/core';
import { Feedback } from '../model/Feedback';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CafeDetails } from '../model/CafeDetails';

@Injectable({
  providedIn: 'root'
})
export class CapCafeService {

    feedback:Feedback[]=[];

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    constructor(public http:HttpClient) { }
    listCafe():Observable<CafeDetails[]> {
      return this.http.get<CafeDetails[]>("http://localhost:8880/cafe/all");
    }
    saveItemRating(userId:number,itemName:String,feedbackType:String,rating:number) {
      return this.http.post<Feedback>("http://feedback/addItemRating/"+userId+ "/" +itemName+ "/" + feedbackType+ "/" + rating,null).pipe(retry(1), catchError(this.errorHandler));
    }

    saveCafeRating(userId:number,cafeLocation:String,feedbackType:String,rating:number): Observable<Feedback> {
      console.log(userId);
      console.log(cafeLocation);
      console.log(feedbackType);
      console.log(rating);
      return this.http.post<Feedback>("http://localhost:8880/feedback/addCafeRating/"+userId+"/"+cafeLocation+"/"+feedbackType+"/"+rating,null);
    }

    saveItemReview(userId:number,itemName:String,feedbackType:String,review:String) {
      return this.http.post<boolean>("http://feedback/addItemReview/",+userId+ "/" +itemName+ "/" + feedbackType+ "/" + review,null).pipe(retry(1), catchError(this.errorHandler));
    }
    saveCafeReview(userId:number,cafeName:String,feedbackType:String,review:String): Observable<Feedback>{
      return this.http.post<Feedback>("http://localhost:8880/feedback/addCafeReview/"+userId+ "/" +cafeName+ "/" + feedbackType+ "/" + review,null);
    }
    searchCafeRating(location:String):Observable<Feedback> {
      return this.http.get<Feedback>("http://localhost:8880/getCafeAverageRating/" + location).pipe(retry(1), catchError(this.errorHandler));
    }
    searchItemRating(itemName:String):Observable<Feedback> {
      return this.http.get<Feedback>("http://localhost:8880/getItemAverageRating/" + itemName).pipe(retry(1), catchError(this.errorHandler));
    }
    listFeedbackByItemName(itemName:String):Observable<Feedback[]> {
      return this.http.get<Feedback[]>("http://localhost:8880/feedback/getFeedbackByItemName/"+itemName).pipe(retry(1), catchError(this.errorHandler));
    }
  
    listFeedbackByCafeLocation(cafeLocation:String):Observable<Feedback[]> {
      return this.http.get<Feedback[]>("http://localhost:8880/feedback/getFeedbackByCafeLocation/"+cafeLocation).pipe(retry(1), catchError(this.errorHandler));
    }
    deleteFeedbackByRatingId(ratingId:number):Observable<boolean> {
      return this.http.delete<boolean>("http://localhost:8880/feedback/deleteFeedback/" + ratingId);
    }
  
    errorHandler(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) { //client side error
        errorMessage = `Error: ${error.error.message}`;
      }
      else { //server side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.error}`;
      }
      window.alert(errorMessage);
      return throwError(error.error)
    }
 
}
