
class PartA {
    private _a_property: string = '';
    get a_property(): string {
        return this._a_property;
    }
    set a_property(value: string) {
        this._a_property = value;
    }
}

class PartB {
    private _b_property = '';
    get b_property(): string {
        return this._b_property;
    }
    set b_property(value: string) {
        this._b_property = value;
    }
}

/**
 * Complex made of parts A and B of some flavor 
 * (One could go deeper by making classes PartX subclasses of some mother abstract class Part and polymorphize _partX with that generic type)
 */
class Complex {
    private _partA: PartA;
    private _partB: PartB;
    constructor(pa: PartA, pb: PartB) {
        this._partA = pa;
        this._partB = pb;
    }
    get partA(): PartA {
        return this._partA;
    }
    get partB(): PartB {
        return this._partB;
    }
}

interface IBuilder {
    buildPartA(a: string);
    buildPartB(b: string);
}

/**
 * A concrete builder produces concrete parts
 */
class Builder implements IBuilder {
    buildPartA(v_a: string): PartA {
        let partA: PartA = new PartA();
        partA.a_property = v_a;
        return partA;
    }
    buildPartB(v_b: string): PartB {
        let partB: PartB = new PartB();
        partB.b_property = v_b;
        return partB;
    }
}

/**
 * A director uses a builder to assemble parts into a complex in some specific way.
 */
class Director1 { // makes a particular assembly using the builder
    private builder: Builder = new Builder();
    public assemble(): Complex {
        let partA: PartA = this.builder.buildPartA('director1_a');
        let partB: PartB = this.builder.buildPartB('director1_b');
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
let complex2: Complex = director2.assemble();

console.log(complex1.partA.a_property); // director1_a
console.log(complex2.partB.b_property); // director2_b
