import { quote } from "../models/quote.class";
import { Component } from "@angular/core";
import { QuoteService } from "src/services/quote.service";


@Component({
    selector: 'quote-box',
    templateUrl: './quote-box.component.html',
    styleUrls: ['./quote-box.component.scss']

})
export class QuoteBoxComponent{
    public quote = new quote('','');

    constructor(public quoteService: QuoteService){
        this.getQuote();

    }

    public getQuote(): void{
                this.quoteService.getRandomQuote().subscribe((data:any)=> {

             this.quote = new quote(data.quote, data.author)
            console.log(this.getQuote);

          
        
    });
}

}ng serve -o
