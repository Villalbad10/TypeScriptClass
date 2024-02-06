const skills: string[] = ['Bash', 'Counter', 'healing'];


interface Character {
  name: string,
  hp: number,
  skills: string[],
  hometown?: string
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['bash', 'count']
}

strider.hometown = 'River';

console.table(strider);


export { };