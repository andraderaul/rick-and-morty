# Rick and Morty - Web

Neste repositório contém a implementação de uma aplicação web utilizando o framework [Next.js](https://nextjs.org/), a ideia principal dessa aplicação é exibir dados sobre o desenho animado [Rick and Morty](https://pt.wikipedia.org/wiki/Rick_and_Morty).

O principal intuito desse repositório é de estudar a biblioteca [React-Query](https://react-query.tanstack.com/) que é uma lib responsável por lidar com dados async em React, facilitando assim o fetch, cache e update dos dados da aplicação sem a necessidade de um estado global.

A api consumida nesta aplicação foi a [Rick and Morty - Api](https://rickandmortyapi.com/).

## Tabela de conteúdo
- [Screenshot](#screenshot)
- [Demo](#demo)
- [Instalação](#instalação)
- [Tecnologias](#tecnologias)


## Screenshot
![rick and morty screen](https://github.com/andraderaul/rick-and-morty/blob/main/public/img/Screenshot.png)

## Demo
Demonstração online da aplicação: https://rick-and-morty-web.vercel.app/

Demonstração do storybook: https://andraderaul.github.io/rick-and-morty/

## Instalação
Instalação usando [yarn](https://yarnpkg.com/)
```bash
git clone https://github.com/andraderaul/rick-and-morty.git
cd rick-and-morty
yarn 
yarn dev
```
Os comandos listados acima são para realizar o clone do repositório, baixar as dependências e por o servidor de desenvolvimento no ar no ``http://localhost:3000/``

## Tecnologias
- [Typescript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [NextJs](https://nextjs.org/docs/getting-started)
- [React-Query](https://react-query.tanstack.com/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Storybook](https://storybook.js.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
