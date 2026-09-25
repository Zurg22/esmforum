# Análise SOLID — ESM Forum

## 1. Introdução

Esta análise avalia a aplicação dos princípios SOLID no código atual do backend do ESM Forum.

A versão atual do projeto possui os principais arquivos:

* `server.js`: configuração da API HTTP e definição das rotas.
* `modelo.js`: operações relacionadas a perguntas e respostas.
* `bd/bd_utils.js`: operações de acesso ao banco de dados SQLite.

A análise considera tanto os pontos positivos existentes quanto oportunidades de melhoria.

---

# 2. Pontos positivos

## 2.1 Separação do acesso ao banco de dados — SRP

### Trecho analisado

Arquivo: `bd/bd_utils.js`

```javascript
function query(query, params) {
  return bd.prepare(query).get(params);
}

function queryAll(query, params) {
  return bd.prepare(query).all(params);
}

function exec(statement, params) {
  return bd.prepare(statement).run(params);
}
```

### Princípio relacionado

**Single Responsibility Principle (SRP)**.

### Análise

O arquivo `bd_utils.js` concentra as operações de comunicação com o banco de dados.

As funções `query`, `queryAll` e `exec` possuem responsabilidades relacionadas ao acesso e execução de comandos no SQLite.

Isso evita que os detalhes da biblioteca `better-sqlite3` precisem ser repetidos em todos os pontos do sistema.

Dessa forma, existe uma separação entre as operações de negócio presentes no `modelo.js` e os detalhes técnicos de comunicação com o banco.

---

## 2.2 Possibilidade de substituir a dependência do banco — DIP

### Trecho analisado

Arquivo: `modelo.js`

```javascript
var bd = require('./bd/bd_utils.js');

function reconfig_bd(mock_bd) {
  bd = mock_bd;
}
```

### Princípio relacionado

**Dependency Inversion Principle (DIP)**.

### Análise

A função `reconfig_bd` permite substituir o módulo de banco utilizado pelo modelo.

Isso é utilizado principalmente pelos testes automatizados, permitindo que o `modelo.js` receba uma implementação alternativa em vez de depender obrigatoriamente do banco real.

Esse mecanismo funciona como uma forma simples de injeção de dependência.

Por exemplo, um teste pode fornecer um objeto com funções `query`, `queryAll` e `exec`, permitindo testar o modelo sem depender diretamente do banco de dados real.

Embora a implementação ainda possa ser melhorada, o mecanismo existente demonstra uma preocupação com a substituição da dependência.

---

## 2.3 Responsabilidades de negócio concentradas no modelo — SRP

### Trecho analisado

Arquivo: `modelo.js`

```javascript
function cadastrar_pergunta(texto) {
  const params = [texto, 1];
  const result = bd.exec(
    'INSERT INTO perguntas (texto, id_usuario) VALUES(?, ?) RETURNING id_pergunta',
    params
  );
  return result.lastInsertRowid;
}

function cadastrar_resposta(id_pergunta, texto) {
  const params = [id_pergunta, texto];
  const result = bd.exec(
    'INSERT INTO respostas (id_pergunta, texto) VALUES(?, ?) RETURNING id_resposta',
    params
  );
  return result.lastInsertRowid;
}
```

### Princípio relacionado

**Single Responsibility Principle (SRP)**.

### Análise

O `modelo.js` concentra as operações relacionadas às entidades e aos dados do fórum, como cadastrar perguntas, cadastrar respostas, consultar perguntas e consultar respostas.

As funções possuem responsabilidades relativamente específicas, como `cadastrar_pergunta`, `cadastrar_resposta`, `get_pergunta` e `get_respostas`.

Essa organização evita que a lógica de acesso aos dados fique diretamente espalhada pelas rotas do servidor.

Portanto, o modelo já apresenta uma separação inicial entre a camada HTTP e as operações relacionadas aos dados da aplicação.

---

# 3. Oportunidades de melhoria

## 3.1 Dependência direta do banco concreto — DIP

### Trecho analisado

Arquivo: `bd/bd_utils.js`

```javascript
const Database = require('better-sqlite3');

var bd = new Database('./bd/esmforum.db');
```

### Princípio violado

**Dependency Inversion Principle (DIP)**.

### Análise

O módulo `bd_utils.js` depende diretamente da implementação concreta `better-sqlite3`.

Além disso, o banco é criado diretamente dentro do módulo:

```javascript
var bd = new Database('./bd/esmforum.db');
```

Isso torna o código mais dependente da biblioteca e da forma específica de armazenamento utilizada atualmente.

Uma alternativa seria definir uma abstração para o acesso aos dados e fazer o restante da aplicação depender dessa abstração.

Por exemplo, poderia existir uma interface conceitual de repositório com operações como:

```javascript
query()
queryAll()
exec()
```

Uma implementação poderia utilizar SQLite, enquanto outra poderia utilizar um banco diferente.

### Possível melhoria

Uma estrutura possível seria:

```text
RepositorioBanco
      |
      +---- RepositorioSQLite
      |
      +---- RepositorioMock
```

O modelo receberia um repositório através de injeção de dependência, em vez de depender diretamente da implementação concreta.

---

## 3.2 Muitas responsabilidades no servidor HTTP — SRP

### Trecho analisado

Arquivo: `server.js`

```javascript
const express = require('express')
const modelo = require('./modelo.js');

const app = express()
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
```

O mesmo arquivo também contém as rotas:

```javascript
app.get('/', (req, res) => {
  const perguntas = modelo.listar_perguntas();
  res.send(perguntas);
});

app.post('/perguntas', (req, res) => {
  const id_pergunta = modelo.cadastrar_pergunta(req.body.pergunta);
  res.json({id_pergunta: id_pergunta});
});
```

E também inicia o servidor:

```javascript
const port = 5000;

app.listen(port, 'localhost', () => {
  console.log(`ESM Forum rodando em ${port}`)
});
```

### Princípio violado

**Single Responsibility Principle (SRP)**.

### Análise

O `server.js` possui várias responsabilidades diferentes:

1. Criação e configuração do Express.
2. Configuração de middleware e CORS.
3. Definição das rotas HTTP.
4. Tratamento de erros das requisições.
5. Comunicação das rotas com o modelo.
6. Inicialização do servidor.

Isso faz com que alterações em responsabilidades diferentes possam exigir modificações no mesmo arquivo.

### Possível melhoria

O backend poderia separar essas responsabilidades em módulos diferentes:

```text
server.js
routes/
    perguntas.js
    respostas.js
controllers/
    perguntasController.js
    respostasController.js
models/
    pergunta.js
    resposta.js
repositories/
    bancoRepository.js
```

Por exemplo:

* `server.js`: configuração e inicialização do servidor.
* `routes/`: definição das URLs e métodos HTTP.
* `controllers/`: controle das requisições e respostas.
* `models/`: representação e regras relacionadas aos dados.
* `repositories/`: acesso ao banco de dados.

Essa separação reduziria a quantidade de responsabilidades concentradas no `server.js`.

---

# 4. Resumo da análise

| Trecho                                           | Princípio | Situação                 | Justificativa                                             |
| ------------------------------------------------ | --------- | ------------------------ | --------------------------------------------------------- |
| `bd_utils.js` — `query`, `queryAll` e `exec`     | SRP       | Atende                   | Centraliza operações de acesso ao banco                   |
| `modelo.js` — `reconfig_bd`                      | DIP       | Atende parcialmente      | Permite substituir a dependência do banco nos testes      |
| `modelo.js` — operações de perguntas e respostas | SRP       | Atende                   | Concentra operações relacionadas aos dados do fórum       |
| `bd_utils.js` — `new Database(...)`              | DIP       | Oportunidade de melhoria | Depende diretamente do `better-sqlite3`                   |
| `server.js`                                      | SRP       | Oportunidade de melhoria | Concentra configuração, rotas, tratamento e inicialização |

---

# 5. Conclusão

O backend já apresenta algumas características alinhadas aos princípios SOLID, principalmente na separação inicial entre acesso ao banco e operações do modelo.

O mecanismo `reconfig_bd` também demonstra uma preocupação com a substituição de dependências durante os testes.

Por outro lado, existem oportunidades claras de melhoria. A dependência direta do `better-sqlite3` poderia ser substituída por uma abstração de acesso aos dados, aplicando de forma mais completa o princípio DIP.

Além disso, o `server.js` concentra diversas responsabilidades. A separação entre rotas, controladores, modelos e repositórios tornaria a estrutura mais organizada e facilitaria futuras alterações.

Essas melhorias serão consideradas na implementação da funcionalidade escolhida para a Tarefa 2.
