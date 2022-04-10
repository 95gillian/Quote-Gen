import { Injectable } from "@angular/core";
import { HttpClient } from  "@angular/common/http";

@Injectable()
export class QuoteService{
    constructor(public http: HttpClient){
        
    }
    public getRandomQuote(){
        return this.http.get("https://type.fit/api/quotes");
    }
}