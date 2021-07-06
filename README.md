<h1>Project Backend</h1>

### Desafio

desenvolver uma API, usando o Node.JS, para um aplicativo de gerenciamento de catálogo de produtos.
 

### Entidades

<br>

   `CATEGORIA` :
  - id: string, (primário)(gerado uuid),
  - name: string (único),
  - description: string,
  - createdAt: Date,
  - updatedAt: Date
  
 `PRODUTO` :
  - id: string, (primário)(gerado uuid),
  - titulo: string,
  - descricao: string,
  - preco: number,
  - category_id: (foreign key),
  - createdAt: Date,
  - updatedAt: Date

 
#### RF

  `CATEGORIA`
  - [] Cria uma categoria recebendo os dados pelo corpo da requisição: retorna os dados da categoria criado com status correspondente.
    - Se categoria já existe, retornar status e mensagem de erro.
  - [] Listar todas as categorias cadastradas.
  - [] Listar uma categoria pelo titulo passado como parâmetro: retorna uma única categoria com seus dados.
  - [] Alterar name e description recebido no corpo da requisição, baseado no id(uuid) recebido como parâmetro de rota: retorna o categoria alterada com as novas informações.
    - Se o name da categoria for existente, deve retornar status e mensagem de erro.
  - [] Deletar uma categoria baseado no id recebido como parâmetro de rota: retorna o status de sucesso.

<br>

   `PRODUTO`
  - [] Cria uma produto recebendo titulo, descricao, preco e category_id pelo corpo da requisição: retorna os dados do produto criado com status correspondente.
    - Se produto já existe, retornar status e mensagem de erro.
  - [] Listar todos as produtos cadastrados.
  - [] Listar uma produto pelo titulo passado como parâmetro: retorna uma única produto com seus dados.
  - [] Alterar titulo, descricao e preco recebido no corpo da requisição, baseado no id(uuid) recebido como parâmetro de rota: retorna o produto alterado com as novas informações.
    - Se o titulo do produto for existente, deve retornar status e mensagem de erro.
  - [] Deletar uma produto baseado no id recebido como parâmetro de rota: retorna o status de sucesso.


<br> 

### 🚀 Tecnologias
<br>
  Este projeto foi desenvolvido com as seguintes tecnologias:

- [Nodejs](https://nodejs.org/en/)
- [Express](http://expressjs.com/pt-br/)
- [Typescript](https://docs.microsoft.com/pt-br/archive/msdn-magazine/2015/january/typescript-understanding-typescript)
- [TypeORM](https://typeorm.io/#/)
- [Docker](https://www.docker.com/)
- [Swagger](https://swagger.io/tools/swagger-ui/)
- [VS Code](https://code.visualstudio.com/) com [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) e [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---
  ### ❗ Como baixar
<br>

Para clonar e executar esse projeto, você precisa do [Git](https://git-scm.com/), [Nodejs v12.16](https://nodejs.org/en/) ou superior + [Yarn 1.22](https://yarnpkg.com/) ou superior  instalado no seu computador. Digite na sua linha de comando:

``` bash

    # Clonar o repositório
    $ git clone https://github.com/jhongomes/test-backend-nodejs.git

    # Entrar no repositório
    $ cd test-backend-nodejs

    # Instalar as dependências
    $ yarn

    # Abrir projeto
    $ code .

    


```
<br>

### 🔗 Banco de dados

<br>

 Para estabelecer uma conexão com o banco, você precisa de [Docker v19.03](http://docs.docker.oeynet.com/toolbox/toolbox_install_windows/) ou superior instalado no seu computador. Digite na sua linha de comando:

 ``` bash
    # Criar uma imagem do postgres com docker
    $ docker run --name BACKEND -e POSTGRES_PASSWORD=docker -p  5432:5432 -d postgres

    # Executar o banco
    $ docker start BACKEND
    
    # Para migrar as tabelas existente no projeto para a imagem do postgres, execute o comando no terminal do seu editor:

    $ yarn typeorm migration:run

    # Execute o projeto
    $ yarn dev




```

<br>

### API 🟣
<br>

 Para testar a API desenvolvida você pode usar [Insomnia v7.1](https://insomnia.rest/) ou [Postman](https://www.postman.com/) superior instalado no seu computador,

 -  {
   "baseURL": "http://localhost:3333"
   } 


<br>

### Swagger 🧾

<br>

 - http://localhost:3333/api-docs

---
<br>

Feito com 💜 por Jhonatan G.