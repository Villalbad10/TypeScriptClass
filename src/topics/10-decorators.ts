function classDecoration(constructor: any) {
  return class extends constructor {
    newProperty = 'New Property';
    hello = 'override'
  }
}

@classDecoration
export class SuperClass {
  public property: string = 'sdgf12';

  print() {
    console.log('mundo');

  }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);


