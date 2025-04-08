import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Pedido, Item } from '../../shared/models/pedido.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pedidos.component.html',
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  novoPedido: Pedido = { cliente: '', itens: [] };
  novoItem: Item = { nome: '', quantidade: 1 };

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.pedidoService.listar().subscribe((p) => (this.pedidos = p));
  }

  adicionarItem() {
    this.novoPedido.itens.push({ ...this.novoItem });
    this.novoItem = { nome: '', quantidade: 1 };
  }

  criarPedido() {
    this.pedidoService.criar(this.novoPedido).subscribe(() => {
      this.pedidoService.listar().subscribe((p) => (this.pedidos = p));
      this.novoPedido = { cliente: '', itens: [] };
    });
  }
}
