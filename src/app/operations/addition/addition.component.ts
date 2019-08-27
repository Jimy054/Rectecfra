import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-addition",
  templateUrl: "./addition.component.html",
  styleUrls: ["./addition.component.css"]
})
export class AdditionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  value: number=0;

  validar() {
    if (this.value != 7) {
      alert("Intente de nuevo :(");
    } else {
      alert("Bien hecho!");
    }
  }
}
