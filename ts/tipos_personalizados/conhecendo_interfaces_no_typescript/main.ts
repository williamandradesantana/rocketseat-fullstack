interface Product {
  id: number;
  name: string;
}

function newProduct({ product }: { product: Product }): string {
  return `New product ${product.name} - ${product.id}`;
}

const product: Product = { id: Date.now(), name: "Mouse" };

console.log(newProduct({ product: product }));
