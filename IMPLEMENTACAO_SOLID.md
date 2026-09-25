\# Implementação com SOLID



\## 1. Funcionalidade escolhida



A funcionalidade escolhida foi a busca de perguntas por palavra-chave.



A funcionalidade permite informar uma palavra-chave e receber as perguntas cadastradas cujo texto contém o termo pesquisado.



Endpoint:



`GET /perguntas/busca?palavra=software`



\## 2. Organização da implementação



Foram criados dois módulos:



\* `repositories/pergunta\_repository.js`

\* `services/busca\_perguntas\_service.js`



O arquivo `server.js` foi alterado para conectar esses módulos à API.



\## 3. Aplicação do SRP



O princípio SRP estabelece que cada módulo deve possuir uma responsabilidade principal.



O `PerguntaRepository` é responsável pelo acesso aos dados das perguntas.



O `BuscaPerguntasService` é responsável pela regra da busca e pela validação da palavra-chave.



O `server.js` é responsável pela comunicação HTTP com o cliente.



Essa separação evita concentrar diferentes responsabilidades em um único módulo.



\## 4. Aplicação do DIP



O `BuscaPerguntasService` recebe o Repository pelo construtor:



```javascript

constructor(perguntaRepository) {

&#x20; this.perguntaRepository = perguntaRepository;

}

```



Assim, o Service não cria diretamente sua dependência.



No `server.js`, a dependência é fornecida externamente:



```javascript

const perguntaRepository = new PerguntaRepository(bd);

const buscaPerguntasService = new BuscaPerguntasService(perguntaRepository);

```



Isso permite substituir o Repository por outra implementação sem alterar a lógica principal do Service.



\## 5. Aplicação do OCP



O Service utiliza o comportamento `buscarPorPalavra()` fornecido pelo Repository.



Isso permite futuramente criar outras implementações de acesso aos dados, como um Repository para PostgreSQL ou um Repository de teste, sem modificar a lógica principal do Service.



\## 6. Endpoint criado



Foi criada a rot



