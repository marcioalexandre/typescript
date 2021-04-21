import {Payment} from './Payment'; //unified interface
import {DebitCard} from './DebitCard'; //class to be adapted

export class DebitCardAdapter extends DebitCard implements Payment {
    execute = (): void => {
        this.debitCardMethod();
    }
}

