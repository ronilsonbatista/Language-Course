import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nossos-cursos',
  template: `
   
  <br>
  <h3>NOSSOS CURSOS </h3>
  <br>
<div class="services">
    <div class="container">     
        <div class="row">

            <div class="col-md-3 services-section">
                <img src="http://www.wizardsjc.net.br/images/miniaturas/ingles.png"/>
                    <div class="services-paragraph">
                    <h3>Curso de Inglês</h3>
                    <p>O inglês é, atualmente, a língua mais falada no mundo por não nativos. </p>
                    </div>
            </div>

            <div class="col-md-3 services-section">
                <img src="http://www.falefrances.com.br/wp-content/uploads/2014/10/falefrances_logo1.png"/>
                    <div class="services-paragraph">
                    <h3>Curso de Francês</h3>
                    <p>Aprender francês é a oportunidade de se comunicar com mais de 200 milhões de pessoas ao redor do mundo. </p>
                </div>
            </div>

            <div class="col-md-3 services-section">
                <img src="https://www.cursoseprofissoes.com/wp-content/uploads/2015/09/curso-de-espanhol-pela-internet.png"/>
                    <div class="services-paragraph">
                    <h3>Curso de Espanhol </h3>
                    <p>Com uma metodologia baseada em avançadas técnicas, toda base e estímulos necessários são fornecidos.</p>
                </div>
            </div>

            <div class="col-md-3 services-section">
                <img src="https://clases-italiano.es/wp-content/uploads/2015/10/parlando-italiano.png"/>
                    <div class="services-paragraph">
                    <h3>Curso de Italiano </h3>
                    <p>A Itália é um dos países mais visitados da Europa, tanto por sua história quanto pela gastronomia e arquitetura.</p>
                    </div>
            </div>

        </div><!--/Row-->
    </div><!--/Container-->
    </div><!--/Services--> 
    <br>
    <br>
    <br>  

  `,
  styles: []
})
export class NossosCursosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
