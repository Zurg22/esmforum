# Padrões de Projeto Existentes

## 1. Introdução

O projeto ESM Forum possui uma organização que apresenta algumas estruturas relacionadas a padrões de projeto e práticas de desenvolvimento orientado a objetos.

Nesta análise foram considerados principalmente os arquivos existentes no backend, incluindo a implementação realizada na Iteração 1.

Os principais padrões e práticas identificados foram:

- Repository
- Service Layer
- Dependency Injection

É importante observar que Dependency Injection é uma técnica de projeto e gerenciamento de dependências, e não um padrão GoF.

## 2. Repository

### Onde aparece

O padrão Repository aparece no arquivo:

repositories/pergunta_repository.js

A classe PerguntaRepository é responsável pelo acesso aos dados relacionados às perguntas.

### Como funciona

O Repository concentra operações de acesso aos dados.

No caso do ESM Forum, o método buscarPorPalavra() executa a consulta SQL necessária para localizar perguntas que contenham determinada palavra-chave.

Dessa forma, a camada responsável pela regra de negócio não precisa conhecer diretamente os detalhes da consulta SQL.

### Benefício

A separação facilita a manutenção e permite substituir ou modificar a tecnologia de persistência com menor impacto sobre as regras de negócio.

## 3. Service Layer

### Onde aparece

A estrutura de Service Layer aparece no arquivo:

services/busca_perguntas_service.js

A classe BuscaPerguntasService concentra a lógica relacionada à busca de perguntas.

### Como funciona

O Service recebe a palavra-chave, realiza a validação básica e solicita ao Repository a busca dos dados.

A camada HTTP não precisa conhecer os detalhes dessa regra.

O fluxo utilizado é:

Cliente
|
v
server.js
|
v
BuscaPerguntasService
|
v
PerguntaRepository
|
v
Banco de dados

### Benefício

A separação entre comunicação HTTP, regras de negócio e acesso aos dados facilita testes, manutenção e evolução da aplicação.

## 4. Dependency Injection

### Onde aparece

A técnica de Dependency Injection aparece principalmente na classe:

BuscaPerguntasService

A dependência PerguntaRepository é recebida pelo construtor.

A criação das dependências ocorre no server.js.

### Como funciona

O Service não cria diretamente uma instância de PerguntaRepository.

A dependência é criada externamente e fornecida ao Service.

Isso reduz o acoplamento entre as classes e facilita a substituição da implementação durante testes ou futuras alterações da aplicação.

### Benefício

A Dependency Injection facilita testes unitários, manutenção e substituição de implementações.

Por exemplo, durante um teste, pode ser utilizado um Repository falso ou simulado sem alterar a implementação do Service.

## 5. Relação entre as estruturas

As três estruturas identificadas trabalham juntas na funcionalidade de busca de perguntas.

O server.js realiza a composição das dependências.

O BuscaPerguntasService concentra a regra da funcionalidade.

O PerguntaRepository concentra o acesso aos dados.

## 6. Conclusão

A implementação atual do ESM Forum apresenta uma separação entre comunicação HTTP, regras de negócio e acesso aos dados.

O Repository e o Service Layer organizam responsabilidades distintas da aplicação.

A Dependency Injection complementa essa organização ao permitir que as dependências sejam fornecidas externamente.

Essas estruturas contribuem para um código mais modular e facilitam a evolução e os testes do sistema.