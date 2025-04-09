import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../shared/models/pedido.model';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private url = 'http://localhost:8080/pedidos';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Pedido[]>(this.url);
  }

  criar(pedido: Pedido) {
    return this.http.post(this.url, pedido, { responseType: 'text' });
  }
}
