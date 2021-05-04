import {Customer} from './Customer';
import {Iterator} from './Iterator';
import {CustomerIterator} from './CustomerIterator';

class Main {
    public execute = (): void => {
        
        let customers: Array<Customer> = new Array();

        customers.push(new Customer(1, "Ronaldo", "ron@email.com"));
        customers.push(new Customer(2, "Neymar", "ney@email.com"));

        let iterator: Iterator  = new CustomerIterator(customers);

        while (iterator.hasNext()){
            let customer : Customer = iterator.next();
            console.log(customer.toString());
        }
    }
}

let main: Main = new Main();
main.execute();

