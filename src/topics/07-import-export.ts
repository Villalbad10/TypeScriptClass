import { Product, taxcCalculation } from "./06-function-destructuring";


const shoppingCard: Product[] = [
  {
    description: 'Xioami',
    price: 876
  },
  {
    description: 'lenovo',
    price: 4
  }
];
// console.log(shoppingCard);

const [total, totalIva] = taxcCalculation({ tax: 0.15, products: shoppingCard });

console.log('total 07', total);
console.log('tax 07', totalIva);