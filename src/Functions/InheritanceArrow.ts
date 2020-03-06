class Adder {
    constructor(public a: number){}
    // this function is now safe to pass around 
    add = (b: number):number => {
        return this.a + b;
    }
}

class ExtendedAdder extends Adder {
    private superAdd = this.add; // Criando a copia do seu parente antes de cria o seu proprio.
    // Override
    add = (b: number):number => {
        return this.superAdd(b);
    }
}
