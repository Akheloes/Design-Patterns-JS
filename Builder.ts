
class PartA {
    public a_property = '';
    constructor(v_a: string) {
        this.a_property = v_a;
    }
}

class PartB {
    public b_property = '';
    constructor(v_b: string) {
        this.b_property = v_b;
    }
}

class Complex {
    public partA: PartA;
    public partB: PartB;
    constructor(pa: PartA, pb: PartB) {
        this.partA = pa;
        this.partB = pb;
    }
}

interface IBuilder {
    buildPartA(a: string);
    buildPartB(b: string);
}

class Builder implements IBuilder {
    buildPartA(v_a: string): PartA {
        return new PartA(v_a);
    }
    buildPartB(v_b: string): PartB {
        return new PartB(v_b);
    }
}

class Director1 { // makes a particular assembly using the builder
    private builder: Builder = new Builder();
    public assemble(): Complex {
        let partA: PartA = this.builder.buildPartA('director1_a');
        let partB: PartB = this.builder.buildPartB('director1_B');
        let complex: Complex = new Complex(partA, partB);
        return complex;
    }
}

class Director2 {
    private builder: Builder = new Builder();
    public assemble(): Complex {
        let partA: PartA = this.builder.buildPartA('director2_a');
        let partB: PartB = this.builder.buildPartB('director2_b');
        let complex: Complex = new Complex(partA, partB);
        return complex;
    }
}

/**
 * Example of use
 */
let director1: Director1 = new Director1();
let complex1: Complex = director1.assemble();

let director2: Director2 = new Director2();
let complex2: Complex = director1.assemble();

console.log(complex1.partA.a_property);
console.log(complex2.partB.b_property);
