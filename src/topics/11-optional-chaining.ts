interface Passenger {
  name: string,
  children?: string[]
}


const passenger1: Passenger = {
  name: 'Diego',
}
const passenger2: Passenger = {
  name: 'pedro',
  children: ['Alex', 'Dora']
}


const printChildern = (paseger: Passenger) => {

  const howmanyChildren = paseger.children?.length || 0;
  console.log(paseger.name, howmanyChildren);

}

printChildern(passenger1);