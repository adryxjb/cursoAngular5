import { Component, OnInit } from "@angular/core";

@Component({
  selector: "departamentosComponent",
  templateUrl: "./departamentos.component.html"
})
export class DepartamentosComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = "Departamentos";
  }

  ngOnInit() {}
}
