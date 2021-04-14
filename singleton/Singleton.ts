export class Singleton {

    private static instance: Singleton;
    private static id: number = 0;

    private constructor () { }

    public static getInstance () : Singleton {
        if (!Singleton.instance){
            Singleton.instance = new Singleton();
            Singleton.id += 1;
        }
        return this.instance;
    }

    public toString() : void {
        console.log("Instance id: " + Singleton.id);
    }

}

