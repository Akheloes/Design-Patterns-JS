/**
 - An abstract factory class/interface implements declares the methods;
 - A concrete factory extends the abstract factory;
 - The concrete factory overrides the delcared methods;
 - A concrete factory produces a product
 - Products can be abstracted
 */

 interface AbstractFactory {
     createProductA(): ProductA;
     createProductB(): ProductB;
 }

 interface AbstractProductA {}
 interface AbstractProductB {}

 class ProductA implements AbstractProductA {
    public constructionStamp: string;
    constructor(productType: string) {
        this.constructionStamp = 'A' + productType + '-' +constructionStampGenerator();
    }
 }
 class ProductB implements AbstractProductB {
    public constructionStamp: string;
    constructor(productType: string) {
        this.constructionStamp = 'B' + productType + '-' +constructionStampGenerator();
    }
 }

 class ConcreteFactory1 implements AbstractFactory {
     private productType: string = '1';
     createProductA(): ProductA {
         return new ProductA(this.productType);
     }
     createProductB(): ProductB {
         return new ProductB(this.productType);
     }
 }

 class ConcreteFactory2 implements AbstractFactory {
    private productType: string = '2';
    createProductA(): ProductA {
        return new ProductA(this.productType);
    }
    createProductB(): ProductB {
        return new ProductB(this.productType);
    }
}

 class Client {
     public concreteFactory1: ConcreteFactory1 = new ConcreteFactory1();
     public concreteFactory2: ConcreteFactory2 = new ConcreteFactory2();
 }

  //---      Showcasing      ---//

 let client: Client = new Client();
 let pA = client.concreteFactory1.createProductA();
 let pB = client.concreteFactory2.createProductB();
 console.log(classOf(pA));
 console.log(pA.constructionStamp);
 console.log(classOf(pB));
 console.log(pB.constructionStamp);

 //---      Helper methods      ---//

 function classOf(instance): string {
     return instance.constructor.toString().match(/\w+/g)[1];
 }

 function constructionStampGenerator() {
     return Math.floor(Math.random() * 100);
 }


