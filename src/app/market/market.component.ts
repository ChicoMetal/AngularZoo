import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  private Title = "Market"
  
  constructor() { }

  ngOnInit() {
    $('.texto').hide();
    $('button').click(function(){
        $('.texto').slideToggle();
    });
  }

}
