import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
value:number
validar(){
  if(this.value == 10){
    alert("Bien hecho!")
  }else{
    alert("Intenta de nuevo")
  }
}

}
