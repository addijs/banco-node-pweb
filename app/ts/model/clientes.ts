class Clientes {
  private clientes: Array<Cliente>;

  constructor() {
    this.clientes = new Array<Cliente>();
  }

  inserir(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  remover(cpf: string): void {
    const cliente = this.pesquisar(cpf);
    if (cliente) {
      const index = this.clientes.indexOf(cliente);
      if (index > -1) {
        this.clientes.splice(index, 1);
      }
    }
  }

  pesquisar(cpf: string): Cliente {
    return this.clientes.find(cliente => cliente.cpf === cpf) || null;
  }

  listar(): Array<Cliente> {
    return this.clientes;
  }
}
