interface Product {
  description: string,
  price: number,
}

const phone: Product = {
  description: 'Nokia',
  price: 435
}

const table: Product = {
  description: "iPhone",
  price: 56
}


interface TaxcCalculationOptions {
  tax: number,
  products: Product[]
}


// const taxcCalculation = ({ tax, products }: TaxcCalculationOptions): [number, number] => {
const taxcCalculation = (options: TaxcCalculationOptions): [number, number] => {
  let total = 0;
  const { tax, products } = options;

  products.forEach(({ price }) => total += price);

  return [total, total * tax]
}


const shoppingCard = [phone, table];
const tax = 0.15;

const [total, totalIva] = taxcCalculation({
  products: shoppingCard,
  tax: tax,
})

console.log('total', total);
console.log('tax', totalIva);



