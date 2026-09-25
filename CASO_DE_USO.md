# Caso de Uso — Notificações de Novas Respostas

## 1. Nome do caso de uso

**Receber notificação de nova resposta**

## 2. História de usuário relacionada

**Como usuário do fórum, eu quero receber uma notificação quando uma nova resposta for publicada em uma pergunta que criei para acompanhar as interações com meu conteúdo.**

## 3. Atores

### Ator principal

**Usuário autor da pergunta**

É o usuário que criou a pergunta e receberá uma notificação quando uma nova resposta for publicada nela.

### Atores secundários

**Outro usuário do fórum**

É o usuário que publica uma nova resposta em uma pergunta existente.

**Sistema ESM Forum**

Responsável por identificar a nova resposta e gerar a notificação para o autor da pergunta.

## 4. Pré-condições

1. O usuário deve estar cadastrado no sistema.
2. O usuário deve estar identificado no sistema.
3. Deve existir uma pergunta criada pelo usuário.
4. A pergunta deve estar cadastrada no banco de dados.
5. Outro usuário deve publicar uma resposta nessa pergunta.

## 5. Fluxo principal

1. O usuário autor cria uma pergunta no fórum.
2. O sistema registra a pergunta no banco de dados.
3. Outro usuário acessa a pergunta.
4. O outro usuário escreve uma resposta.
5. O sistema recebe a solicitação para cadastrar a resposta.
6. O sistema registra a resposta associada à pergunta.
7. O sistema identifica o usuário que criou a pergunta.
8. O sistema cria uma notificação para o autor da pergunta.
9. A notificação fica disponível para o autor da pergunta.
10. O autor acessa suas notificações.
11. O sistema apresenta a notificação informando que uma nova resposta foi publicada.

## 6. Fluxos alternativos

### Fluxo alternativo A — Pergunta não encontrada

1. O usuário tenta responder uma pergunta que não existe.
2. O sistema verifica que a pergunta não foi encontrada.
3. O sistema não registra a resposta.
4. O sistema informa que a pergunta não está disponível.
5. Nenhuma notificação é criada.

### Fluxo alternativo B — Erro ao registrar a resposta

1. O usuário envia uma nova resposta.
2. O sistema tenta registrar a resposta.
3. Ocorre um erro durante o cadastro.
4. O sistema informa que não foi possível registrar a resposta.
5. A notificação não é criada.

### Fluxo alternativo C — Resposta em pergunta de outro usuário

1. Um usuário publica uma resposta em uma pergunta que pertence a outro usuário.
2. O sistema identifica o autor da pergunta.
3. O sistema cria a notificação para o autor da pergunta.
4. O usuário que publicou a resposta não recebe uma notificação referente à própria resposta por esse caso de uso.

## 7. Pós-condições

### Sucesso

1. A resposta foi registrada no sistema.
2. A resposta está associada à pergunta correta.
3. O autor da pergunta possui uma nova notificação.
4. A notificação permite identificar a pergunta que recebeu a nova resposta.

### Falha

Caso ocorra um erro durante o cadastro da resposta, a resposta não deve ser considerada registrada e nenhuma notificação deve ser criada.

## 8. Regras de negócio

1. Somente o autor da pergunta deve receber a notificação referente a uma nova resposta.
2. A notificação deve estar associada à pergunta que recebeu a resposta.
3. Uma resposta publicada em uma pergunta não deve gerar uma notificação para usuários que não sejam o autor daquela pergunta.
4. A notificação somente deve ser criada após o registro bem-sucedido da resposta.
