import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname: String = "Rodrigo";
  age: number = 36;
  dataAtual = new Date;

  person = {
    firstname: "Rodrigo",
    lastname: "Pereira de Moraes",
    age: 50,
    address: "Route 100"
  }

  constructor() { }

  ngOnInit() {
  }

}
