type Product = {
  id: number;
  name: string;
};

function newProduct({ product }: { product: Product }): string {
  return `New product - ${product.id} - ${product.name}`;
}

const product: Product = { id: Date.now(), name: "Mouse" };

type SelectResponse = Product[] | null;

function selectProducts(): SelectResponse {
  return null;
}
