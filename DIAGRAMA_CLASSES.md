# Diagrama de Classes — ESM Forum

## 1. Objetivo

O diagrama de classes representa as principais entidades do ESM Forum e os relacionamentos entre elas.

Foram consideradas as classes existentes no sistema e as novas classes necessárias para representar as funcionalidades planejadas na Parte 2, especialmente votação, busca e notificações.

As principais classes representadas são:

* Usuario;
* Pergunta;
* Resposta;
* Notificacao;
* Voto.

---

## 2. Classes

### Usuario

Representa uma pessoa cadastrada no fórum.

**Atributos:**

* id_usuario
* nome
* email

Um usuário pode criar várias perguntas, publicar várias respostas, realizar votos e receber notificações.

### Pergunta

Representa uma pergunta publicada no fórum.

**Atributos:**

* id_pergunta
* texto
* id_usuario

Uma pergunta pertence a um usuário e pode possuir várias respostas e vários votos.

### Resposta

Representa uma resposta publicada para uma pergunta.

**Atributos:**

* id_resposta
* texto
* id_pergunta
* id_usuario

Uma resposta pertence a uma pergunta e é publicada por um usuário.

### Notificacao

Representa uma notificação gerada quando uma nova resposta é publicada em uma pergunta do usuário.

**Atributos:**

* id_notificacao
* mensagem
* lida
* id_usuario
* id_pergun_
