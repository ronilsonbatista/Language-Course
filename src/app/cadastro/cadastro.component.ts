import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--found',
  template: `
    <br>
    <br>

    <div class="container">    
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
        <form role="form">
          <h2>Dados para o envio</h2>
                <hr/>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6">
              <div class="form-group">
                            <input type="text" name="first_name" id="first_name" class="form-control input-lg" (keyup)="onNomeKeyUp($event)" placeholder="Nome" tabindex="1">
              </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6">
              <div class="form-group">
                <input type="text" name="last_name" id="last_name" class="form-control input-lg" (keyup)="onSobreNomeKeyUp($event)" placeholder="Sobrenome" tabindex="2">
              </div>
            </div>
          </div>
          <div class="form-group">
            <input type="text" name="phone_number" id="phone_number" class="form-control input-lg" (keyup)="onCelularKeyUp($event)" placeholder="Celular" tabindex="3">
          </div>
          <div class="form-group">
            <input type="email" name="email" id="email" class="form-control input-lg" (keyup)="onEmailKeyUp($event)"  placeholder="Email" tabindex="4">
          </div>


          <h3>Escolha o curso:</h3>
          <label class="radio-inline"><input type="radio" name="optradio">Curso de Francês</label>
<label class="radio-inline"><input type="radio" name="optradio">Curso de Espanhol</label>
<label class="radio-inline"><input type="radio" name="optradio">Curso de Inglês</label>

                <hr/>


                
  
          <div class="row7">
          <a routerLink="/app-resultado" routerLinkActive="active" (click)="saveLocalStorage()">Salvar</a>

        <router-outlet></router-outlet>
          </div>
          
        </form>
      </div>
    </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br> 
    `,
  styles: []
})
export class CadastroComponent implements OnInit {

  name: string = '';
  sobrenome: string = '';
  celular: string = '';
  email: string = '';

  constructor() { }

  onNomeKeyUp(event: any) {
    this.name = event.target.value;
    console.log(this.name);
  }
  onSobreNomeKeyUp(event: any) {
    this.sobrenome = event.target.value;
    console.log(this.sobrenome);
  }

  onCelularKeyUp(event: any) {
    this.celular = event.target.value;
    console.log(this.celular);
  }
  onEmailKeyUp(event: any) {
    this.email = event.target.value;
    console.log(this.email);
  }

  saveLocalStorage() {
    localStorage.setItem("name", this.name)
    localStorage.setItem("sobrenome", this.sobrenome)
    localStorage.setItem("celular", this.celular)
    localStorage.setItem("email", this.email)
  }

  ngOnInit() {

  }

}

