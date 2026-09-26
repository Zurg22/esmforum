# Arquitetura Atual do ESM Forum

## 1. Introdução

O ESM Forum atualmente utiliza uma arquitetura simples baseada em Node.js, Express e SQLite.

A aplicação possui uma separação básica entre:

- servidor e rotas HTTP;
- regras de negócio;
- acesso ao banco de dados;
- persistência dos dados;
- testes automatizados.

A estrutura atual atende às funcionalidades básicas do sistema e permite a evolução gradual da aplicação.

## 2. Tecnologias utilizadas

As principais tecnologias utilizadas no backend são:

- Node.js;
- Express;
- SQLite;
- better-sqlite3;
- Jest para testes automatizados.

O frontend do projeto utiliza React.

## 3. Estrutura atual do backend

A estrutura principal do backend pode ser representada da seguinte forma:

```text
esmforum/
|
+-- server.js
|
+-- modelo.js
|
+-- bd/
|   +-- bd_utils.js
|   +-- schema.sql
|   +-- esmforum.db
|
+-- repositories/
|   +-- pergunta_repository.js
|
+-- services/
|   +-- busca_perguntas_service.js
|
+-- testes/
|   +-- modelo.test.js
|   +-- listar_perguntas.test.js
|   +-- busca_perguntas.test.js
|   +-- e2e/
|
+-- public/
+-- docs/