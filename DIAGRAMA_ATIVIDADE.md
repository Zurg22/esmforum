# Diagrama de Atividade — Receber Notificação de Nova Resposta

## 1. Objetivo

O diagrama de atividade representa o fluxo de execução do processo de publicação de uma resposta e geração de uma notificação para o autor da pergunta.

O fluxo apresenta as principais atividades e decisões realizadas pelo sistema.

## 2. Fluxo principal

1. O usuário acessa uma pergunta.
2. O usuário informa uma resposta.
3. O frontend envia a resposta para a API.
4. A API verifica se a pergunta existe.
5. Se a pergunta não existir, o sistema informa o erro e encerra o processo.
6. Se a pergunta existir, a API registra a resposta.
7. Após o cadastro da resposta, o sistema identifica o autor da pergunta.
8. O sistema cria uma notificação para o autor.
9. O frontend informa que a resposta foi cadastrada com sucesso.
10. O processo é encerrado.

## 3. Diagrama UML

```mermaid
flowchart TD
    A([Início]) --> B[Usuário acessa uma pergunta]
    B --> C[Usuário informa a resposta]
    C --> D[Frontend envia a resposta para a API]
    D --> E[API verifica se a pergu]()
```
