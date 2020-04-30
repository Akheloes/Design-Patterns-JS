abstract class Abstraction {
    private impl: Implementor;
    constructor(impl: Implementor) {
        this.impl = impl;
    }
    public func() {
        this.impl.implementation();
    }
}

interface Implementor {
    implementation();
}

class RefinedAbstraction extends Abstraction {
    constructor();
    constructor(concreteImplementor?: Implementor);
    constructor(concreteImplementor?: Implementor) {
        // super(new ConcreteImplementor());
        if(!concreteImplementor) {
            super(new ConcreteImplementor());
        } else {
            super(concreteImplementor);
        }
    }
    public refinedFunc() {
        console.log('RefinedAbstraction');
        this.func();
    }
}

class ConcreteImplementor implements Implementor {
    private materialization = 'ConcreteImplementor';
    constructor();
    constructor(materialization?: string);
    constructor(materialization?: string) {
        this.materialization = materialization === undefined ? this.materialization : materialization;
    }
    implementation() {
        console.log(this.materialization);
    }
}

/**
 * Example use
 */

 let concreteImplementor = new ConcreteImplementor('runtime reification of implementor');
 let refinedAbstraction = new RefinedAbstraction(concreteImplementor);
 refinedAbstraction.refinedFunc();