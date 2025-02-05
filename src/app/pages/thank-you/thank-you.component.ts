import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.css'
})
export class ThankYouComponent {

  firstName: string = '';

  orderNumber: number = 0;

  ngOnInit() {
    this.orderNumber = this.generateRandomNumber();
  }

  generateRandomNumber():number{
     
    let num = "";

    for(let i=0; i<10; i++){
      const ranNum = Math.floor(Math.random() * 10)

      num += ranNum;
    }

    return Number(num)
  }
}
