export class Person {
  // public name: string;
  // private address: string;

  constructor(public name: string, private address: string = 'MEdallo', public firstName: string) {
  }

}

// export class Hero extends Person {
//   constructor(public alterEgo: string, public age: number, public realName: string) {
//     super(realName, 'Boyaca')
//   }
// }
export class Hero {

  // public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person) {

    // this.person = new Person(realName);

  }
}


const persona = new Person('Alex', 'Cali', 'primer nombre');
const aironMan = new Hero('diego', 56, 'Villa', persona);

console.log(aironMan);
