// let contaController = new ContaController();

// contaController.listar();

// const c1 = new Conta('1', 100);
// const p1 = new Poupanca('2', 100);
// const cb1 = new ContaBonificada('3', 0);

// console.log('Conta: ' + c1.saldo);

// p1.atualizarSaldoAniversario();
// console.log('Poupanca: ' + p1.saldo);

// cb1.creditar(100);
// console.log('Conta Bonificada: ' + cb1.saldo);

const clienteController = new ClienteController();

const db = new Clientes();
console.log(`Iniciando banco...\nClientes registrados: 0`);

const c1 = new Conta('1', 100);
const cl1 = new Cliente('Fulano', '123456789123', c1);

const c2 = new Conta('2', 200);
const cl2 = new Cliente('Cicrano', '321987654321', c2);

db.inserir(cl1);
db.inserir(cl2);

console.log(`\nClientes registrados: ${db.listar().length}\n
Listando clientes registrados - ${db.listar().map(cl => cl.nome)}`);

const cpf = '321987654321';

console.log(`\nPesquisando cpf ${cpf} (...)\n
${db.pesquisar(cpf)?.nome || 'Nenhum cliente encontrado'}`);

db.remover(cpf);
console.log(`\nDeletando cliente de cpf ${cpf} (...)\n
Listando clientes registrados - ${db.listar().map(cl => cl.nome)}`);
