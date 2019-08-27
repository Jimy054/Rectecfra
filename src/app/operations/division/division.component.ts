import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-division",
  templateUrl: "./division.component.html",
  styleUrls: ["./division.component.css"]
})
export class DivisionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  value: number;

  validar() {
    if (this.value == 4) {
      alert("Bien hecho");
    } else {
      alert("Vuelve a intentarlo");
    }
  }
}
