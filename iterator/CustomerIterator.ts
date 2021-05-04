import {Iterator} from './Iterator'; //interface
import {Customer} from './Customer'; //class

export class CustomerIterator implements Iterator {
    
    private customers: Array<Customer>;
    private i: number = 0;

    constructor (values: Array<Customer>) {
        this.customers = values;
    }
    
    public hasNext = (): boolean => {
        if (this.i >= this.customers.length || !this.customers[this.i]) {
            return false
        }
        return true;
    }
    public next = (): Customer => {
        let customer: Customer = this.customers[this.i];
        this.i ++;
        return customer;
    }

}




