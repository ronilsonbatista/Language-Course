import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  template: `
    <br>
    <br>

    <img src="https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-512.png" class="img-responsive img-center2">

    <h3>Dados Salvos</h3>
    <h3>Olá, {{name}}!.</h3>
    <h3>As informação sobre o curso do foi enviado para seu {{email}}.</h3>
    
    <br>
    <br>
    <br>
    <br>
  `,
  styles: []
})
export class ResultadoComponent implements OnInit {

    name: string = '';
    sobrenome: string = '';
    celular: string = '';
    email: string = '';

  constructor() { 
    this.getLocal()
  }

  getLocal() {
    let nameDB = localStorage.getItem("name")
    this.name = nameDB
    let sobrenomeDB = localStorage.getItem("sobrenome")
    this.sobrenome = sobrenomeDB
    let celularDB = localStorage.getItem("celular")
    this.celular = celularDB
    let emailDB = localStorage.getItem("email")
    this.email = emailDB
  }
  ngOnInit() {
  }
}
