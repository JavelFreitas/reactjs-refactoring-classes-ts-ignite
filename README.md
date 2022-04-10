
<h1 align="center">GoRestaurant</h1>
<p align="center">Projeto de refatoração JS -> TS</p>
<h1 align="center">
<img alt="Tela inicial da aplicação GoRestaurant" title="#GoRestaurant" src="https://github.com/JavelFreitas/reactjs-refactoring-classes-ts-ignite/blob/master/docs/assets/GoRestaurant.PNG" />
</h1>
<img src="https://img.shields.io/apm/l/vim-mode"/>
<img src="https://img.shields.io/npm/types/typescript?color=blue&label=language"/>
<hr>
<h2>Tópicos</h2>

* [Pre-requisitos](#pre-requisitos)
* [Como instalar o projeto](#instalar-projeto)
* [Funcionalidades](#funcionalidades)
* [Tecnologias](#tecnologias)
* [Novidades](#novidade)
* [Créditos](#creditos)
* [(Bonus) Configuração do Eslint](#eslint)

<h2 id="pre-requisitos">Pre-requisitos</h2>

* Node (v16^)
* Git
* Yarn

<h2 id="instalar-projeto">Como instalar o projeto</h2>
<h3>
Baixar Projeto 
</h3>

```
git clone https://github.com/JavelFreitas/reactjs-refactoring-classes-ts-ignite.git
```
<h3>
Instalar as Dependências 
</h3>

```
yarn
```
<h3>
Criar uma build 
</h3>

```
yarn build
```
<h3>
Rodar 
</h3>

<h4>
Terminal 1
</h4>

```
yarn server
```
<h4>
Terminal 2
</h4>

```
yarn start
```

<h3>
Testar (Opcional) 
</h3>

```
yarn test
```
<h2 id="funcionalidades">Funcionalidades</h2>

* Adicionar prato
  - Link para imagem
  - Título do prato
  - Preço em Real
  - Descrição do prato
* Excluir prato
* Editar prato
* Tornar prato "disponível" ou "Indisponível"
<h2 id="tecnologias">Tecnologias</h2>

* [React](https://pt-br.reactjs.org) 
* [Typescript](https://www.typescriptlang.org)
* [SASS](https://sass-lang.com)
* [Babel](https://babeljs.io)
* [Webpack](https://webpack.js.org)
* [Jest](https://jestjs.io/pt-BR/)

<h2 id="novidade">Novidade</h2>

* Componente de modal (react-modal)
* Config do Eslint
* Uso de Conventional Commits
* Aprendizado de GitFlow

<h2 id="creditos">Créditos</h2>

* [Projeto Original](https://github.com/rocketseat-education/ignite-template-reactjs-refactoring-classes-ts) (Template)
* [Ignite](https://rocketseat.com.br/ignite)
* [Config do Eslint](https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/)

<h2 id="eslint">(Bonus) Configuração do Eslint</h2>

---
<h3>Essa configuração não faz parte do desafio do Ignite, e gostaria de ressaltar que:</h3>

1. Algumas verificações do ESlint disparam erro, fazendo que o projeto do create-react-app pare de funcionar, depois de instalar é só ajeitar o que ele pede e o projeto volta a rodar
2. No futuro, algum desses passos ou customizações podem estar ultrapassadas, sintam-se a vontade para fazer um merge request com alguma atualização e ajudar esse projeto a crescer.

---
<h3>Instalar o eslint como dependencia de desenvolvimento</h3>

```
npm install --save-dev eslint
```

<!---
<h3>Instalar o prettier como dependência de desenvolvimento (Futuramente farei a integração dos dois)</h3>

```
npm install --save-dev --save-exact prettier
```
-->
<h3>Criando o arquivo de configuração do Eslint</h3>

```
npm init @eslint/config
```
<h3><strong>Escolhi style guide do airbnb</strong></h3>

<h3>Verificando erros com Eslint</h3>

```
npm run lint
```
<h3>Ajeitando o que da pra ajeitar</h3>

```
npm run lint-fix
```
<h3>Caso dê problema com Typescript</h3>
- Adicionar no extends do eslintrc.json os pacotes abaixo

```
npm install --save-dev --save-exact @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

<h2>Coisas que modifiquei</h2>

<h3>Adicionei as regras:<h3>

>"react/react-in-jsx-scope": "off"
>>Pois desde a versão 17 do react não é necessário importar React em todo arquivo de componente.

>"import/extensions": [ "error", "never" ]
>>Pois ao usar extensão no final de um import surgia o erro ts(2691)

>"settings": { "import/resolver": { "node": { "extensions": [".js", ".jsx", ".ts", ".tsx"] } } }
>>Pois "Unable to resolve path to module" aparecia

> "no-use-before-define": "off"
>>Pois estava alertando em um import de React na primeira linha, pelo visto é um problema do eslint, relato [aqui](https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916)

>"react/jsx-props-no-spreading": "off"
>>Gosto do Spread Operator

>"react/require-default-props" 
>>Resolvido no arquivo Index.tsx, linha 60

>"import/prefer-default-export" 
>>Resolvido em styles.ts e index.tsx do Dashboard

>JSX: true em globals, dentro de eslintrc.json 
>>Para aceitar JSX

