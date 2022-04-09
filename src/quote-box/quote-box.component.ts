import { quote } from "../models/quote.class";
import { Component } from "@angular/core";
import { QuoteService } from "src/services/quote.service";
import { Quote } from "@angular/compiler";

@Component({
    selector: 'quote-box',
    templateUrl: './quote-box.component.html',
    styleUrls: ['./quote-box.component.scss']

})
export class QuoteBoxComponent{
    public quote = new quote('','');

    constructor(public quoteService: QuoteService){

    }

    public getQuote(){
        this.quoteService.getRandomQuote().subscribe((data: quote) => {
            this.quote = new quote(data.quote, data.author);
            console.log(this.quote);
        });
    }

}