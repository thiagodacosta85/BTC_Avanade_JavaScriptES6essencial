//funcoes.js
function getName() {
	return 'Thiago da Costa';
}
function logFn(fn) {
	console.log(fn());
}
//atribuição a uma variável
const logFnResult = logFn;
//atribuição a uma estrutura de dados
const obj = {
	logFn: logFn
}
//função passada por argumentos
logFnResult(getName);