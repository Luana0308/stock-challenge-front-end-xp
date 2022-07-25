# Desafio Tecnico XP - Aplicação FrontEnd

---

##   ✅ Introdução

<details>
  <summary><strong>O que é o projeto?</strong></summary>
  
  O projeto é uma aplicação FrontEnd de um site de investimentos, possui a tela de login, a tela de ações com as ações da Invest Money e as ações do usuario, e a tela de conta do usuario. 

  Todo o projeto é conectado com o uma API REST e toda alteração realizada na aplicação também é alterado no banco de dados.  

<br />
</details>

<details>
  <summary><strong>Quais foram as dependencias utilizadas?</strong></summary>
  
  * Node
  * CommitLint
  * Prettier
  * Husky
  * Eslint
  * TypeScript
  * React
  * Styled-Components


<br />
</details>

---

##  ✅ Como executar o projeto

  <details>
    <summary><strong>Rodando o projeto localmente</strong></summary>
  
  Para rodar o projeto localmente faça o git clone da aplicação: 

      git@github.com:Luana0308/stock-challenge-front-end-xp.git

  No terminal:

       npm install
       npm start

  <br />
  </details>

  <details>
    <summary><strong>Deploy do Projeto</strong></summary>

  O projeto teve o deploy realizado no heroku, com docker para que pudesse sempre manter a aplicação ativa enquanto estivesse rodando uma nova action no gitHub. 

  https://stock-challenge-front-end-xp.herokuapp.com/

    Para fazer login: 
      e-mail: luana@gmail.com
      senha: 123456


  <br />
  </details>

  <details>
    <summary><strong>Gif do Projeto</strong></summary>

  ![](./src//images/stieInvestMoney.gif)

  <br />
  </details>
  
  
  ---

##  ✅ Informações sobre o projeto

<details>
  <summary><strong>Arquitetura Utilizada</strong></summary>
    
  O projeto foi estruturado com pastas separadas por funções, por exemplo dentro da pasta borão tem o index, o style e o type. Utilizei essa forma pois quando for necessario mexer em um compoente tudo está dentro da mesma pasta falicitando assim a busca.

  Na minha pasta SRC eu dividi as por paginas e por compoenentes além de pastas auxiliares que poderiam ser utilizadas por toda a aplicação.  

  Sites que utilizei para consulta para is escrevendo a minha aplicação:

  https://alexkondov.com/tao-of-react/

  https://blog.openreplay.com/react-architecture-patterns-for-your-projects

<br />
</details>

<details>
  <summary><strong>Porque utilizei o React e o TypeScript</strong></summary>

  O React é um framework que possibilita de forma pratica construir as interfaces para o usuario, e com a compentização e os estados é possivel reutilizar o codigo em varias partes. 
  
  O typescript foi utilizado como forma de detectar os erros durante o desenvolvimento do codigo, e com a tipagem correta, diminui os erros que podem acontecer durante a aplicação. 


<br />
</details>

<details>
  <summary><strong>Dificuldades Superadas</strong></summary>
  
  - Entender as telas propostas e como iria desenvolver o código
  - Fazer o setup da aplicação
  - Fazer o deploy da aplicação no heroku
  - Fazer todo o projeto componentizado para que pudesse ser reutlizado
  - Fazer a conexão com o a API do BackEnd
  - Corrigir o problema de Cors - para corrigir eu tive que desabilitar no BackEnd
  - Passar o token pelas rotas 
  - Estilizar com o styled-components 

<br />
</details>


---

##  ✅ Referencias

<details>
  <summary><strong>CommitLint</strong></summary>
     
https://github.com/goldbergyoni/nodebestpractices/blob/master/README.brazilian-portuguese.md#3-pr%C3%A1ticas-de-estilo-de-c%C3%B3digo

https://github.com/conventional-changelog/commitlint

https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657

https://dev.to/vitordevsp/padronizacao-de-commit-com-commitlint-husky-e-commitizen-3g1n

<br />
</details>

<details>
  <summary><strong>Eslint</strontng></summary>
  
   https://github.com/testing-library/eslint-plugin-testing-library
  
   https://eslint.org/docs/latest/user-guide/getting-started
  
   https://eslint.org/docs/latest/user-guide/configuring/rules#using-configuration-files
  
   https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-mocha-arrows.md
  
   https://eslint.org/docs/latest/rules/func-names
  
   https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md

   https://dev.to/drsimplegraffiti/eslint-configuration-for-node-project-275l

   https://blog.bitsrc.io/how-to-set-up-node-js-application-with-eslint-and-prettier-b1b7994db69f

<br />
</details>


<details>
  <summary><strong>TypeScript</strontng></summary>
 
   https://dev.to/christiantld/configurando-um-projeto-react-com-typescript-3kg

<br />
</details>


<details>
  <summary><strong>Testes Jest</strontng></summary>
 
 https://www.codementor.io/@rajjeet/add-jest-to-your-typescript-project-with-4-easy-steps-1do5lhfjb1
 
 https://github.com/jest-community/eslint-plugin-jest

 https://bobbyhadz.com/blog/react-jest-usenavigate-may-only-be-used-in-the-context-of-router#:~:text=The%20jest%20error%20%22useNavigate(),testing%20in%20a%20Router%20context.

 https://bobbyhadz.com/blog/react-cannot-read-property-pathname-of-undefined

<br />
</details>

<details>
  <summary><strong>Styled-Componets</strontng></summary>
 
 https://styled-components.com/docs/basics#installation

<br />
</details>


https://flaviocopes.com/axios-send-authorization-header/

https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests

https://www.digitalocean.com/community/tutorials/react-axios-react

https://www.angularfix.com/2022/01/importing-images-in-typescript-react.html

https://www.npmjs.com/package/react-loading

