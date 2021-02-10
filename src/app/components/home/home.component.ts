import { Component, OnInit } from "@angular/core";

@Component({
  selector: "homeComponent",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = "Home";
  }

  ngOnInit() {
    //bloque de instrucciones
    console.log("Entro a ngOnInit");
    this.titulo = "Pagina de Inicio";
  }
}
