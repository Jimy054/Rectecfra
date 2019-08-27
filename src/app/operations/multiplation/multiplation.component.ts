import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-multiplation",
  templateUrl: "./multiplation.component.html",
  styleUrls: ["./multiplation.component.css"]
})
export class MultiplationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  value: number;

  validar() {
    if (this.value == 50) {
      alert("Bien hecho!");
    } else {
      alert("Sigue intentando :(");
    }
  }
}
