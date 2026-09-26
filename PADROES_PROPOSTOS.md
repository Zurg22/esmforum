# Padrões de Projeto Propostos

## 1. Introdução

Para a evolução do ESM Forum, foram selecionados três padrões de projeto que podem ser aplicados a funcionalidades futuras do sistema.

Os padrões escolhidos são:

* Observer
* Strategy
* Factory Method

As propostas foram elaboradas considerando funcionalidades previstas no planejamento do projeto, como notificações, busca e organização das informações.

## 2. Observer

### Problema

O ESM Forum poderá possuir uma funcionalidade de notificações para informar o autor de uma pergunta quando uma nova resposta for cadastrada.

Sem um padrão específico, a lógica responsável por cadastrar uma resposta poderia ficar diretamente responsável por localizar usuários e enviar notificações.

Isso aumentaria o acoplamento entre as funcionalidades.

### Solução proposta

O padrão Observer pode ser utilizado para permitir que objetos interessados sejam notificados quando ocorrer um determinado evento.

Quando uma nova resposta for cadastrada, um objeto responsável pelo evento poderá notificar os usuários interessados.

### Aplicação no ESM Forum

O objeto observado poderia representar uma pergunta.

Os observadores poderiam representar serviços responsáveis por notificações.

Quando uma nova resposta fosse cadastrada, a pergunta notificaria seus observadores.

### Benefícios

* Redução do acoplamento entre cadastro de respostas e notificações.
* Facilidade para adicionar novos tipos de notificações.
* Separação entre o evento e os objetos interessados nele.
* Facilidade de evolução da funcionalidade.

### Exemplo de funcionamento

```text
Nova resposta cadastrada
        |
        v
      Pergunta
        |
        | notifica
        v
+---------------------+
| Serviço de          |
| Notificação         |
+---------------------+
        |
        v
Autor da pergunta
```

## 3. Strategy

### Problema

A funcionalidade de busca de perguntas poderá evoluir para oferecer diferentes formas de pesquisa.

Por exemplo:

* busca por palavra-chave;
* busca por relevância;
* busca por data;
* busca por quantidade de respostas.

Colocar todas essas regras dentro de uma única classe poderia aumentar sua complexidade.

### Solução proposta

O padrão Strategy permite definir diferentes algoritmos para uma mesma operação e selecionar a estratégia utilizada durante a execução.

No ESM Forum, cada estratégia poderia implementar uma forma diferente de busca ou ordenação.

### Aplicação no ESM Forum

Poderiam existir estratégias como:

* BuscaPorPalavra
* BuscaPorRelevancia
* BuscaPorData
* BuscaPorQuantidadeDeRespostas

Uma classe responsável pela busca receberia a estratégia escolhida e executaria o algoritmo correspondente.

### Benefícios

* Permite adicionar novas formas de busca sem alterar as estratégias existentes.
* Reduz condicionais complexos.
* Facilita testes individuais de cada estratégia.
* Permite escolher o comportamento durante a execução.

### Exemplo de funcionamento

```text
              BuscaPerguntas
                    |
                    v
              Estratégia
                    |
        +-----------+-----------+
        |           |           |
        v           v           v
     Palavra     Data      Relevância
```

## 4. Factory Method

### Problema

O sistema poderá precisar criar diferentes tipos de notificações.

Por exemplo:

* notificação de nova resposta;
* notificação de menção;
* notificação de atualização;
* notificação relacionada a uma pergunta.

Criar diretamente cada tipo de objeto em vários pontos da aplicação poderia aumentar o acoplamento.

### Solução proposta

O Factory Method permite centralizar a criação de objetos relacionados a uma determinada operação.

No ESM Forum, uma fábrica poderia receber o tipo de notificação e criar o objeto correspondente.

### Aplicação no ESM Forum

Poderiam existir diferentes classes de notificação:

* NotificacaoNovaResposta
* NotificacaoMencao
* NotificacaoAtualizacao

Uma fábrica seria responsável por criar a implementação apropriada.

### Benefícios

* Centralização da criação de objetos.
* Redução do acoplamento com classes concretas.
* Facilidade para adicionar novos tipos de notificação.
* Código mais organizado e extensível.

### Exemplo de funcionamento

```text
        Tipo de notificação
                 |
                 v
       +-------------------+
       | NotificationFactory|
       +---------+---------+
                 |
       +---------+---------+
       |         |         |
       v         v         v
     Nova      Menção   Atualização
   Resposta
```

## 5. Comparação das propostas

| Padrão         | Funcionalidade                  | Principal objetivo             |
| -------------- | ------------------------------- | ------------------------------ |
| Observer       | Notificações de novas respostas | Notificar objetos interessados |
| Strategy       | Busca e ordenação               | Permitir diferentes algoritmos |
| Factory Method | Criação de notificações         | Centralizar criação de objetos |

## 6. Conclusão

Os três padrões propostos podem contribuir para a evolução do ESM Forum.

O Observer é adequado para eventos que precisam informar diferentes componentes interessados.

O Strategy permite organizar diferentes formas de busca ou ordenação.

O Factory Method pode organizar a criação de diferentes tipos de notificações.

As propostas são compatíveis com a estrutura atual do projeto e podem ser implementadas futuramente sem exigir uma alteração completa da arquitetura existente.
