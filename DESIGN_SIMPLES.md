\# Design Simples e YAGNI — ESM Forum



\## 1. Introdução



A prática de Simple Design busca manter o sistema o mais simples possível, implementando apenas aquilo que é necessário para atender aos requisitos atuais.



Uma das práticas relacionadas a esse princípio é o YAGNI (You Aren't Gonna Need It), que significa evitar a implementação de funcionalidades que ainda não são necessárias.



Na análise do backend do ESM Forum, foram observados principalmente o arquivo `modelo.js` e as rotas definidas em `server.js`.



\## 2. Análise do modelo



O arquivo `modelo.js` possui responsabilidades relacionadas ao acesso e manipulação dos dados de perguntas e respostas.



Entre suas principais funções estão:



\* listar perguntas;

\* cadastrar perguntas;

\* cadastrar respostas;

\* consultar uma pergunta;

\* consultar as respostas de uma pergunta;

\* contar o número de respostas.



Por exemplo, a função `cadastrar\_pergunta` possui uma implementação direta:



```javascript

function cadastrar\_pergunta(texto) {

&#x20; const params = \[texto, 1];

&#x20; const result = bd.exec(

&#x20;   'INSERT INTO perguntas (texto, id\_usuario) VALUES(?, ?) RETURNING id\_pergunta',

&#x20;   params

&#x20; );

&#x20; return result.lastInsertRowid;

}

```



A função realiza somente as operações necessárias para cadastrar uma pergunta e retornar seu identificador.



Não existe uma camada adicional de abstração criada apenas para essa operação. Para o escopo atual do projeto, essa abordagem mantém o código mais simples.



\## 3. Consultas simples



As consultas também são realizadas diretamente por meio das funções disponíveis no módulo de banco de dados.



Por exemplo:



```javascript

function get\_respostas(id\_pergunta) {

&#x20; return bd.queryAll(

&#x20;   'select \* from respostas where id\_pergunta = ?',

&#x20;   \[id\_pergunta]

&#x20; );

}

```



A função recebe o identificador da pergunta e retorna suas respostas.



Essa implementação atende diretamente à necessidade da aplicação, sem criar mecanismos adicionais de consulta que não são utilizados atualmente.



\## 4. Contagem de respostas



A função `get\_num\_respostas` também possui uma implementação objetiva:



```javascript

function get\_num\_respostas(id\_pergunta) {

&#x20; const resultado = bd.query(

&#x20;   'select count(\*) from respostas where id\_pergunta = ?',

&#x20;   \[id\_pergunta]

&#x20; );

&#x20; return resultado\['count(\*)'];

}

```



A função executa somente a consulta necessária para obter a quantidade de respostas.



Uma possível implementação excessiva seria carregar todas as respostas para depois realizar a contagem em JavaScript. Isso adicionaria processamento e complexidade sem trazer benefício para o requisito atual.



A utilização de `count(\*)` mantém a operação simples e diretamente relacionada ao objetivo.



\## 5. Rotas do servidor



O arquivo `server.js` também apresenta rotas simples e diretamente relacionadas às funcionalidades existentes.



Entre elas estão:



\* `GET /` — lista as perguntas;

\* `POST /perguntas` — cadastra uma pergunta;

\* `GET /respostas/:id\_pergunta` — consulta uma pergunta e suas respostas;

\* `POST /respostas` — cadastra uma resposta.



Por exemplo:



```javascript

app.post('/perguntas', (req, res) => {

&#x20; try {

&#x20;   const id\_pergunta = modelo.cadastrar\_pergunta(req.body.pergunta);

&#x20;   res.json({id\_pergunta: id\_pergunta});

&#x20; }

&#x20; catch(erro) {

&#x20;   res.status(500).json(erro.message);

&#x20; }

});

```



A rota recebe os dados necessários, chama o modelo e retorna o identificador da pergunta criada.



Não existe uma estrutura adicional de serviços ou controladores intermediários. Para o tamanho e escopo atual do projeto, manter essa estrutura simples evita adicionar camadas sem necessidade.



\## 6. Exemplo de YAGNI



As novas funcionalidades previstas para o projeto incluem votação, busca, categorização, perfil do usuário e notificações.



Entretanto, essas funcionalidades ainda não devem ser implementadas antes de serem efetivamente desenvolvidas no backlog.



Por exemplo, não seria adequado criar antecipadamente:



\* tabelas de notificações sem a funcionalidade de notificações;

\* sistema completo de votação antes da necessidade de votação;

\* mecanismo de busca avançado antes da implementação da busca;

\* estrutura complexa de categorias antes da funcionalidade de categorização;

\* sistema completo de histórico de usuário antes da implementação do perfil.



Essas estruturas poderiam aumentar a complexidade do sistema sem atender a uma necessidade imediata.



A aplicação das ideias do YAGNI indica que essas funcionalidades devem ser implementadas somente quando fizerem parte do desenvolvimento planejado.



\## 7. O que evitar



Durante a evolução do projeto, devem ser evitadas soluções que aumentem a complexidade sem necessidade.



Alguns exemplos são:



\### Criar abstrações sem uso



Não é necessário criar classes ou módulos genéricos para operações que possuem apenas uma utilização.



\### Implementar funcionalidades antecipadamente



Uma funcionalidade que está apenas planejada no backlog não precisa ser implementada antes do momento previsto.



\### Adicionar camadas desnecessárias



A criação de várias camadas entre as rotas e o modelo pode tornar o projeto mais complexo sem benefício proporcional.



\### Otimizar prematuramente



Também deve ser evitada a criação de mecanismos de otimização antes que exista uma necessidade real identificada.



\## 8. Conclusão



A estrutura atual do backend apresenta uma implementação relativamente simples, com funções diretamente relacionadas às operações de perguntas e respostas.



O uso de consultas SQL simples, funções com responsabilidades específicas e rotas diretamente conectadas ao modelo contribui para manter o código compreensível.



Para a evolução do ESM Forum, o princípio YAGNI deve continuar sendo aplicado: novas estruturas e funcionalidades devem ser criadas quando forem necessárias para atender aos requisitos do projeto, evitando antecipar soluções que ainda não possuem uma necessidade concreta.



Dessa forma, o sistema pode evoluir de maneira incremental, mantendo a complexidade sob controle.



