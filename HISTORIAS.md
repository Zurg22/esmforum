# Histórias de Usuário — ESM Forum

## 1. Introdução

Esta etapa apresenta três histórias de usuário selecionadas a partir das funcionalidades planejadas para o ESM Forum.

As histórias foram definidas considerando as necessidades dos usuários do fórum e estão relacionadas às funcionalidades registradas no GitHub Project.

As três funcionalidades selecionadas são:

1. Votação em perguntas;
2. Busca de perguntas por palavra-chave;
3. Notificações de novas respostas.

---

## 2. História de Usuário 1 — Votação em perguntas

### História

**Como usuário do fórum, eu quero votar positivamente ou negativamente nas perguntas para indicar a relevância do conteúdo para a comunidade.**

### Critérios de aceitação

1. O sistema deve permitir que um usuário vote positivamente em uma pergunta.
2. O sistema deve permitir que um usuário vote negativamente em uma pergunta.
3. O sistema deve apresentar a quantidade de votos da pergunta.
4. O sistema deve impedir que o mesmo usuário registre mais de um voto ativo na mesma pergunta.
5. O usuário deve poder alterar seu voto, caso essa funcionalidade esteja disponível na implementação.

### Prioridade

**Alta**

### Justificativa

A votação permite que a própria comunidade indique quais perguntas possuem maior relevância ou interesse, contribuindo para a organização e utilização do fórum.

---

## 3. História de Usuário 2 — Busca de perguntas por palavra-chave

### História

**Como usuário do fórum, eu quero pesquisar perguntas utilizando palavras-chave para encontrar rapidamente conteúdos relacionados ao assunto que procuro.**

### Critérios de aceitação

1. O sistema deve disponibilizar um campo para o usuário informar uma palavra-chave.
2. O sistema deve pesquisar perguntas que contenham a palavra-chave informada.
3. O sistema deve apresentar ao usuário as perguntas encontradas.
4. Caso nenhuma pergunta seja encontrada, o sistema deve informar que não existem resultados para a pesquisa.
5. A pesquisa deve considerar o texto das perguntas cadastradas no fórum.

### Prioridade

**Alta**

### Justificativa

A busca facilita a localização de informações já existentes no fórum e evita que o usuário precise percorrer manualmente todas as perguntas cadastradas.

---

## 4. História de Usuário 3 — Notificações de novas respostas

### História

**Como usuário do fórum, eu quero receber uma notificação quando uma nova resposta for publicada em uma pergunta que criei para acompanhar as interações com meu conteúdo.**

### Critérios de aceitação

1. O sistema deve identificar quando uma nova resposta é publicada em uma pergunta criada pelo usuário.
2. O sistema deve gerar uma notificação para o autor da pergunta.
3. A notificação deve indicar que uma nova resposta foi publicada.
4. A notificação deve permitir que o usuário identifique a pergunta relacionada à nova resposta.
5. O usuário não deve receber notificações de respostas em perguntas que não criou.

### Prioridade

**Média**

### Justificativa

As notificações permitem que o autor acompanhe as respostas recebidas em suas perguntas sem precisar acessar manualmente cada discussão.

---

## 5. Priorização das histórias

As histórias foram priorizadas considerando a importância das funcionalidades para a utilização do fórum e sua relação com as prioridades estabelecidas no GitHub Project.

| História | Funcionalidade                       | Prioridade |
| -------- | ------------------------------------ | ---------- |
| 1        | Votação em perguntas                 | Alta       |
| 2        | Busca de perguntas por palavra-chave | Alta       |
| 3        | Notificações de novas respostas      | Média      |

As funcionalidades de votação e busca foram classificadas como prioridade alta por contribuírem diretamente para a interação e localização de conteúdo dentro do fórum.

As notificações foram classificadas como prioridade média por complementarem a interação dos usuários, permitindo o acompanhamento das respostas às perguntas criadas.
