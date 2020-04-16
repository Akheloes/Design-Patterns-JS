class Adaptee { // Class of objects to adapt
    public operation() {
        console.log('AdapteeOperation');
    }
}

class Target { // Class of objects to target
    public operation() {
        console.log('TargetOperation');
    }
}

class Adapter { // Adapter class which replaces use of adaptee.operations by target.operations
    private target: Target = new Target();
    public adapteeToTarget(adaptee: Adaptee) {
        adaptee.operation();
        this.target.operation();
    }
}

class Client {
    public adaptee: Adaptee = new Adaptee();
}

/**
 * Example of use
 */

let client: Client = new Client();
client.adaptee.operation();
let adapter: Adapter = new Adapter();
adapter.adapteeToTarget(client.adaptee);