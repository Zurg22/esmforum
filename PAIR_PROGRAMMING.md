\# Plano de Pair Programming — ESM Forum



\## 1. Introdução



Pair Programming é uma prática de Extreme Programming (XP) na qual duas pessoas trabalham juntas no desenvolvimento de uma mesma funcionalidade.



Uma pessoa atua como \*\*Driver\*\*, responsável por escrever o código, enquanto a outra atua como \*\*Navigator\*\*, acompanhando o desenvolvimento, analisando a solução e identificando possíveis problemas.



As funções podem ser alternadas durante a atividade.



\## 2. Aplicação no ESM Forum



A prática será aplicada principalmente durante o desenvolvimento das novas funcionalidades planejadas para o ESM Forum.



As funcionalidades previstas são:



\* votação em perguntas;

\* busca de perguntas por palavra-chave;

\* categorização e tags;

\* perfil do usuário com histórico;

\* notificações de novas respostas.



\## 3. Divisão das funções



Durante uma sessão de programação em pares:



\### Driver



O Driver será responsável por:



\* escrever o código;

\* executar os comandos necessários;

\* realizar testes durante a implementação;

\* implementar as alterações discutidas pela dupla.



\### Navigator



O Navigator será responsável por:



\* acompanhar o código enquanto ele é escrito;

\* verificar se a implementação atende ao requisito;

\* identificar possíveis erros;

\* sugerir melhorias;

\* verificar se a solução está mantendo o design simples.



As funções devem ser alternadas durante o desenvolvimento para que os dois participantes tenham contato com diferentes partes da implementação.



\## 4. Etapas de uma sessão



Uma sessão de Pair Programming poderá seguir as seguintes etapas:



\### 1. Entendimento da tarefa



A dupla analisa a funcionalidade que será desenvolvida e verifica seus critérios de aceitação.



\### 2. Planejamento



Antes de começar a programar, os participantes discutem uma solução simples para o problema.



\### 3. Implementação



O Driver começa a escrever o código enquanto o Navigator acompanha a implementação.



\### 4. Revisão durante o desenvolvimento



O Navigator verifica continuamente se o código está de acordo com o requisito e se não está sendo adicionada complexidade desnecessária.



\### 5. Troca de funções



Após um período de desenvolvimento, os participantes trocam as funções de Driver e Navigator.



\### 6. Testes



A dupla executa os testes necessários para verificar o funcionamento da alteração.



\### 7. Revisão final



Antes de finalizar a tarefa, os dois participantes revisam o resultado e verificam se os critérios de aceitação foram atendidos.



\## 5. Exemplo de aplicação



Para a funcionalidade de \*\*busca de perguntas por palavra-chave\*\*, a dupla poderia trabalhar da seguinte maneira:



O Navigator começa analisando o requisito e discutindo com o Driver como a busca poderia ser implementada.



O Driver implementa a rota da API e as alterações necessárias no modelo.



Durante a implementação, o Navigator verifica se:



\* a busca recebe corretamente a palavra-chave;

\* as perguntas correspondentes são retornadas;

\* a solução não adiciona funcionalidades que não foram solicitadas;

\* o código permanece simples e compreensível.



Depois de uma etapa de desenvolvimento, os participantes podem trocar de função e continuar a implementação.



Por fim, a dupla executa os testes e verifica o resultado no frontend.



\## 6. Benefícios esperados



A utilização de Pair Programming no projeto pode contribuir para:



\* identificar erros mais cedo;

\* compartilhar conhecimento sobre o código;

\* melhorar a revisão durante o desenvolvimento;

\* discutir soluções antes de implementá-las;

\* manter o código mais simples;

\* reduzir a possibilidade de decisões técnicas tomadas sem revisão.



\## 7. Relação com Simple Design e YAGNI



A prática de Pair Programming também pode ajudar na aplicação de Simple Design e YAGNI.



Enquanto uma pessoa implementa a solução, a outra pode questionar se determinada estrutura realmente é necessária para atender ao requisito.



Por exemplo, antes de criar uma nova camada ou estrutura, a dupla pode discutir se ela possui uma necessidade concreta.



Isso ajuda a evitar a implementação antecipada de funcionalidades e estruturas que ainda não são necessárias.



\## 8. Resultado esperado



O objetivo da utilização de Pair Programming é desenvolver as funcionalidades de maneira colaborativa, mantendo uma comunicação constante entre os participantes e realizando uma revisão contínua durante a implementação.



A prática será utilizada principalmente nas funcionalidades consideradas mais relevantes do backlog e poderá ser aplicada sempre que uma tarefa apresentar maior complexidade ou exigir maior revisão.



