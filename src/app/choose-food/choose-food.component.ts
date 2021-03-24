import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-food',
  templateUrl: './choose-food.component.html',
  styleUrls: ['./choose-food.component.scss']
})
export class ChooseFoodComponent implements OnInit {

  isLoading = false;
  isResults = false;

  cusineArray = [
    'algerian', 'american', 
    'belgian', 'brazilian', 'british',
    'cajun', 'canadian', 'chinese', 'cuban',
    'egyptian', 
    'french', 
    'german', 'greek',
    'haitian', 'hawaiian',
    'indian', 'irish', 'italian',
    'japanese', 'jewish',
    'kenyan', 'korean',
    'latvian', 'libyan',
    'mexican', 'mormon',
    'nigerian',
    'peruvian', 'polish', 'portuguese',
    'russian',
    'salvadorian', 'scottish', 'spanish', 'swedish',
    'tahitian', 'thai', 'tibetan', 'turkish',
    'welsh'
  ];
  chosenCuisine = "";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick() {
    // alert("Button was clicked!");
    this.isLoading = true;
    this.isResults = false;
    this.randomise();
  }

  async randomise() {
    let maxNum = this.cusineArray.length;
    let chosenCuisineNum = Math.floor(Math.random() * maxNum);
    this.chosenCuisine = this.cusineArray[chosenCuisineNum];

    await this.delay(1500);
    this.isLoading = false;
    this.isResults = true;
  }  

  delay(ms: number) {
    return new Promise ( resolve => 
      setTimeout(resolve, ms)
    );
  } 

}
