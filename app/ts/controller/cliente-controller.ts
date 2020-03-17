class ClienteController {
  private inputNome: HTMLInputElement;
  private inputCPF: HTMLInputElement;
  private inputNumero: HTMLInputElement;
  private inputSaldo: HTMLInputElement;
  private btn: HTMLButtonElement;
  private divShow: HTMLDivElement;
  private clientes: Clientes;

  constructor() {
    this.inputNome = document.querySelector('#nome');
    this.inputCPF = document.querySelector('#cpf');
    this.inputNumero = document.querySelector('#numero');
    this.inputSaldo = document.querySelector('#saldo');
    this.divShow = document.querySelector('div.show');
    this.btn = document.querySelector('button');
    this.clientes = new Clientes();
  }

  listarClientes() {
    this.divShow.innerHTML = this.clientes
      .listar()
      .map(
        cliente =>
          `<p>${cliente.nome} - Numero: ${cliente.conta.numero} - Saldo: ${cliente.conta.saldo}<p/>`
      )
      .join('');
  }

  cadastrarCliente() {
    const nome = this.inputNome.value;
    const cpf = this.inputCPF.value;
    const num = this.inputNumero.value;
    const saldo = this.inputSaldo.value;
    const conta = new Conta(num, Number(saldo));

    const cliente = new Cliente(nome, cpf, conta);

    this.clientes.inserir(cliente);
    this.listarClientes();
    console.log(this.clientes.listar().length);
  }
}
