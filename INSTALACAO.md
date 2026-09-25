\# Instalação e execução do ESM Forum



\## 1. Pré-requisitos



Para executar o projeto localmente foram utilizados:



\* Windows

\* Node.js 22.20.0

\* npm

\* Git

\* Navegador web



O projeto é dividido em duas partes:



\* Backend: `esmforum`

\* Frontend: `esmforum-react`



\## 2. Configuração do Backend



Primeiro, foi realizado o clone do repositório do backend.



Depois, foi acessada a pasta do projeto:



```powershell

cd "C:\\Users\\renat\\OneDrive\\Área de Trabalho\\FGV\\6 trimestre\\Engenharia de Software\\esmforum"

```



As dependências foram instaladas com:



```powershell

npm install

```



Para iniciar o servidor backend:



```powershell

npm start

```



O servidor é executado na porta `5000`.



Mensagem apresentada:



```text

ESM Forum rodando em 5000

```



O backend pode ser acessado em:



```text

http://localhost:5000

```



\## 3. Configuração do Frontend



Em outro terminal, foi acessada a pasta do frontend:



```powershell

cd "C:\\Users\\renat\\OneDrive\\Área de Trabalho\\FGV\\6 trimestre\\Engenharia de Software\\esmforum-react"

```



As dependências foram instaladas com:



```powershell

npm install

```



Para iniciar o frontend:



```powershell

npm start

```



O React é executado na porta `3000`.



O sistema pode ser acessado pelo navegador em:



```text

http://localhost:3000

```



\## 4. Execução simultânea



Para o sistema funcionar completamente, o backend e o frontend devem permanecer executando em terminais separados.



\### Terminal 1 — Backend



```powershell

cd "C:\\Users\\renat\\OneDrive\\Área de Trabalho\\FGV\\6 trimestre\\Engenharia de Software\\esmforum"

npm start

```



Resultado esperado:



```text

ESM Forum rodando em 5000

```



\### Terminal 2 — Frontend



```powershell

cd "C:\\Users\\renat\\OneDrive\\Área de Trabalho\\FGV\\6 trimestre\\Engenharia de Software\\esmforum-react"

npm start

```



Resultado esperado:



```text

Compiled with warnings.

```



O frontend fica disponível em:



```text

http://localhost:3000

```



\## 5. Validação



Após iniciar os dois serviços, foi realizada a validação pelo navegador.



O frontend apresentou a página inicial do ESM Forum e carregou as perguntas cadastradas no backend.



O backend respondeu às requisições realizadas pelo frontend através da API.



Dessa forma, foi confirmada a execução local integrada do backend e frontend.



