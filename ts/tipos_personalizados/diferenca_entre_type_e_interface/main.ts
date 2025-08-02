// Interface x Type

interface IBaseProduct {
  price: number;
}

interface IProduct extends IBaseProduct {
  id: number;
  name: string;
}

interface IProduct {
  quantity: number;
}

type TBaseProduct = {
  price: number;
};

type TProduct = IBaseProduct & {
  id: number;
  name: string;
};

// type TProduct = {}; não permite duplicar.

// Quando possui interfaces com mesmo nome o ts adiciona as propriedades.
let iProduct: IProduct = { id: 1, name: "Product x", price: 500, quantity: 1 };
let tProduct: TProduct = { id: 2, name: "Product y", price: 550 };

type TypeString = string;
type TypeNumber = number;

// type X extends string; não permite.
