import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Pedido, Item } from '../../shared/models/pedido.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private pedidoService: PedidoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.atualizarPedidos();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  adicionarItem() {
    this.novoPedido.itens.push({ ...this.novoItem });
    this.novoItem = { nome: '', quantidade: 1 };
  }

  atualizarPedidos() {
    this.pedidoService.listar().subscribe((p) => (this.pedidos = p));
  }

  criarPedido() {
    // Se nenhum item foi adicionado, usa o novoItem se estiver preenchido
    if (
      this.novoPedido.itens.length === 0 &&
      this.novoItem.nome.trim() !== ''
    ) {
      this.novoPedido.itens = [{ ...this.novoItem }];
    }

    // Verifica se o pedido tem cliente e pelo menos 1 item com nome
    const temItensValidos = this.novoPedido.itens.some(
      (item) => item.nome.trim() !== ''
    );

    if (!this.novoPedido.cliente.trim() || !temItensValidos) {
      alert('⚠️ Preencha o nome do cliente e pelo menos 1 item válido.');
      return;
    }

    this.pedidoService.criar(this.novoPedido).subscribe({
      next: () => {
        alert('📤 Pedido criado com sucesso!');
        this.atualizarPedidos();
        this.novoPedido = { cliente: '', itens: [] };
        this.novoItem = { nome: '', quantidade: 1 };
      },
      error: (err) => {
        console.error(err);
        alert('❌ Erro ao criar pedido');
      },
    });
  }
}
