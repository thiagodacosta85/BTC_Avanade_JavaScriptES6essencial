//1-object.js
let user = {
	name: 'Thiago'
};

console.log(user);
//alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';
console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);

//criando uma propriedade
user.lastName = 'da Costa';
console.log(user);

//deletando uma propriedade
delete user.name;
console.log(user);