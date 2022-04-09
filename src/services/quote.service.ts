import { Injectable } from "@angular/core";
import { HttpClient } from  "@angular/common/http";
import { url } from "inspector";

@Injectable()
export class QuoteService{
    constructor(public http: HttpClient){
        
    }
    public getRandomQuote(){
        return this.http.get();
    }
}