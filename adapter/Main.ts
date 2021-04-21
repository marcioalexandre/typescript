import {Payment} from './Payment'; //unified inteface
import { CreditCardAdapter } from "./CreditCardAdapter";
import {DebitCardAdapter} from './DebitCardAdapter';

export class Main {
    execute = (): void => {
        let payment: Payment = new DebitCardAdapter();
        payment.execute();
    }
}

let main: Main = new Main();
main.execute();