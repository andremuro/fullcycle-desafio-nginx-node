# fullcycle-desafio-nginx-node
Desafio do curso FullCycle, no módulo de DevOps, trabalhando com docker.

### Descrição do desafio
> A ideia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro no banco de dados mysql, cadastrando um nome na tabela people.

__O retorno da aplicação node.js para o nginx deverá ser:__
```html
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```

### Requisitos
1. Toda a aplicação deve estar disponível na porta 8080.

### Para rodar
```
git clone https://github.com/andremuro/fullcycle-desafio-nginx-node.git

Entrar na pasta do projeto:

cd fullcycle-desafio-nginx-node

Criar a pasta abaixo para o volume:

mkdir mysql

docker-compose up [-d]
```

###Para Acessar
> http://localhost:8080/
<br/>
<br/>
