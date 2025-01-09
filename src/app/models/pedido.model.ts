import { Plato } from './plato.model';

export class Pedido {
  constructor(
    public id: number,
    public cliente: string,
    public platos: Plato[] = []
  ) {}

  calculaTotal(): number {
    return this.platos.reduce((total, plato) => total + plato.precio, 0);
  }
}
