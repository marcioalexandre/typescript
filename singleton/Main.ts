import {Singleton} from './Singleton';

export class Main {
    public execute () {

        let instance1: Singleton  = Singleton.getInstance();
        let instance2: Singleton  = Singleton.getInstance();
        let instance3: Singleton  = Singleton.getInstance();

        instance1.toString();
        instance2.toString();
        instance3.toString();
    }
}

let main: Main = new Main();
main.execute();