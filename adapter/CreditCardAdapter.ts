import {Payment} from './Payment'; //unified interface
import {CreditCard} from './CreditCard'; //class to be adapted

//adapter by heritance
export class CreditCardAdapter extends CreditCard implements Payment {
    execute = (): void => {
        this.creditCardMethod();
    }
}

