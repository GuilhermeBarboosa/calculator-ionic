import { Component } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  value = '0';
  oldValue = '0';
  lastOperator = '';

  newInput = true;
  numbersGroup = [[7, 8, 9, 'x'], [4, 5, 6, '-'], [1, 2, 3, '+'], [0, 'c', '%', '=']];

  onButtonPress(num) {

    console.log(num);

    if (typeof (num) === 'number') {

      if (this.newInput) {
        this.value = '' + num;
      } else {
        this.value += '' + num;
      }
      this.newInput = false;
    } else if (num == 'c') {
      this.value = '0';
      this.newInput = true;
    } else if (num == '=') {
      if (this.lastOperator == 'x') {
        this.value = '' + (parseInt(this.oldValue) * parseInt(this.value));
      } else if (this.lastOperator == '-') {
        this.value = '' + (parseInt(this.oldValue) - parseInt(this.value));
      } else if (this.lastOperator == '+') {
        this.value = '' + (parseInt(this.oldValue) + parseInt(this.value));
      } else if (this.lastOperator == '%') {
        this.value = '' + (parseInt(this.oldValue) / parseInt(this.value));
      } else if (this.lastOperator == '/') {
        this.value = '' + (parseInt(this.oldValue) / parseInt(this.value));
      }
    }
    else {
      this.newInput = true;
      this.oldValue = this.value;
      this.lastOperator = num;
      this.value = '0';
    }

  }

}
