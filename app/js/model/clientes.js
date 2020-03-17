class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const cliente = this.pesquisar(cpf);
        if (cliente) {
            const index = this.clientes.indexOf(cliente);
            if (index > -1) {
                this.clientes.splice(index, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf) || null;
    }
    listar() {
        return this.clientes;
    }
}
