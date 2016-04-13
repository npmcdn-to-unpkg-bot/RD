import {Component} from 'angular2/core';

@Component({
  selector: 'debt-remedy-logo',
  styles: [`
    .titleText {
        font-family: Corbel,Arial,Helvetica;
        font-size: 28px;
        font-weight: normal;
        color: #8c6199;
        padding: 10px 16px 10px 16px!important;
        margin: 0 auto;
        margin-bottom: 20px;
    }
  `],
  template: `
    <div style="text-align: center">
        <img style="margin: auto" src="http://www.stepchange.org/portals/0/footer/images/logo-colophon.jpg">
    </div>
    <div style="text-align: center" class="titleText">
        Debt Remedy
    </div>
  `,
})

export class DebtRemedyLogo {
  constructor() {

  }
}
