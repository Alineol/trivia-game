Projeto realizado como forma de avaliação no curso de desenvolvimento web da escola de programação **Trybe**.

**Objetivo**: Desenvolver um jogo de perguntas e respostas baseado no jogo Trivia (tipo um show do milhão americano rs) utilizando React e 
Redux, desenvolvendo em grupo suas funcionalidades de acordo com as demandas definidas em um quadro Kanban. A partir dessas demandas, 
teremos uma aplicação onde a pessoa usuária poderá:

1. Logar no jogo e, se o email tiver cadastro no site Gravatar, ter sua foto associada ao perfil da pessoa usuária.
2. Acessar a página referente ao jogo, onde se deverá escolher uma das respostas disponíveis para cada uma das perguntas apresentadas. A resposta deve ser marcada antes do contador de tempo chegar a zero, caso contrário a resposta deverá ser considerada errada(as perguntas são adquiridas através de uma API).
3. Ser redirecionada, após 5 perguntas respondidas, para a tela de score, onde o texto mostrado depende do número de acertos.
4. Visualizar a página de ranking, se quiser, ao final de cada jogo.
<!-- 5. Configurar algumas opções para o jogo em uma tela de configuração acessível a partir do cabeçalho do app. -->

Esse projeto foi realizado em trio. 

Entre minhas contribuições, posso citar: 

- css das páginas de login, de jogo e feedback ( na página de login, o efeito da palavra "Trivia" foi fornecido pelo Trybe)
- o arquivo Questions.js
- o arquivo Interval.js foi feito pelo meu colega, eu apenas complementei colocando o som de tic-tac, barra de progresso circular e a lógica do botão next. 
- o arquivo helpers.js


**Tecnologias usadas**

Linguagem : JavaScript

Bicliotecas : React e Redux 

**Dependencias necessárias**

[React-ciruclar-progressbar](https://www.npmjs.com/package/react-circular-progressbar)

[CryptoJs](https://github.com/brix/crypto-js)

[sanitize-html](https://www.npmjs.com/package/sanitize-html)

**O que precisa melhorar**

Eu criei um arquivo separado de cada css, poderia melhorar isso unificando o css desses arquivos e gerando classes mais globais de acordo com o comportamento que eu espero;

Poderiamos adicionar uma página de configurações na qual a pessoa usuária poderia selecionar a categoria das pesguntas que ela quer;

Implementar um botão para pausar o som de tic-tac;

implementar um botão de resertar o score;

implementar o sanitizer nas respostas.

**Resultado final**
https://alineol.github.io/trivia-game/

  
  ![](https://github.com/Alineol/Pixels-art/blob/main/1_viMDiyH9fN7cmcM0n3qqIg.gif)
