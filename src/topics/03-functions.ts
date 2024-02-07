const addNumbers = (a: number, b: number): number => {
  return a + b;

}

const res: number = addNumbers(4, 5);

console.log({ res });



const mulpiplay = (firstNumber: number, secondNuber?: number, base: number = 2) => {
  return firstNumber * base;
}

const mulRes: number = mulpiplay(4);

console.log(mulRes);

interface Character {
  name: string,
  hp: number,
  showHp: () => void
}


const heal = (character: Character, amount: number) => {
  character.hp += amount;
}

const strider: Character = {
  name: 'Straider',
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);

  }
}

heal(strider, 50)

strider.showHp();

export { }