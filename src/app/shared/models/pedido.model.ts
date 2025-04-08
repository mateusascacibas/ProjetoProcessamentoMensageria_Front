export interface Item {
  nome: string;
  quantidade: number;
}

export interface Pedido {
  cliente: string;
  itens: Item[];
}
