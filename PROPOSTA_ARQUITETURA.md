# Proposta de Arquitetura do ESM Forum

## 1. Introdução

A arquitetura atual do ESM Forum funciona para as funcionalidades existentes, porém algumas responsabilidades ainda estão concentradas em arquivos como `server.js` e `modelo.js`.

Como proposta de evolução, será adotada uma arquitetura em camadas, com separação entre apresentação, regras de negócio, acesso aos dados e infraestrutura.

Também será utilizado o padrão MVC nas funcionalidades que possuem interação direta com o usuário.

A proposta busca melhorar:

- organização do código;
- separação de responsabilidades;
- manutenção;
- testabilidade;
- reutilização;
- possibilidade de evolução do sistema.

## 2. Arquitetura em camadas proposta

A arquitetura proposta será organizada nas seguintes camadas:

```text
+---------------------------+
|       Apresentação        |
| Controllers / Views       |
+-------------+-------------+
              |
              v
+---------------------------+
|        Services           |
|       Regras de negócio   |
+-------------+-------------+
              |
              v
+---------------------------+
|       Repositories        |
|      Acesso aos dados     |
+-------------+-------------+
              |
              v
+---------------------------+
|       Infraestrutura      |
| SQLite / better-sqlite3   |
+---------------------------+