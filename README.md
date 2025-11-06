# Promobit Front-end Challenge

![promobit-front-end-challenge](https://user-images.githubusercontent.com/49072766/164571639-029674d8-a312-4680-be02-d49c96666a87.jpg)

[Live demo 🚀](https://promobit-front-end-challenge.netlify.app)

## Rode o servidor localmente

Clone esse repositório:

```bash
git clone https://github.com/adsonmacedo/promobit-front-end-challenge.git
```

Entre na pasta do projeto:

```bash
cd promobit-front-end-challenge
```

Installe as dependências:

```bash
pnpm install
# ou
npm install
```

Antes de iniciar o servidor, crie um arquivo chamado `.env.local` na raiz do projeto, e cole o seguinte código:

```ini
NEXT_PUBLIC_TMDB_API_KEY=CHAVE_API_V3
```

Substitua `CHAVE_API_V3` por sua **Chave da API (v3 auth)** do TMDB.

- Saiba mais: https://www.themoviedb.org/documentation/api

Inicie o servidor:

```bash
pnpm install
# ou
npm install
```

Por fim, acesse [http://localhost:3000](http://localhost:3000) no browser.

## Sobre o projeto

Projeto desenvolvido seguindo o desafio de front-end do [Promobit](https://github.com/Promobit/front-end-challenge/), com base no layout sugerido no [Figma](https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End), utilizando a [API gratuita do The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction) como fonte de dados.

## Tecnologias utilizadas

- React com Next.js
- TypeScript
- Styled Components
- Axios

## Requisitos funcionais

- [x] O usuário deve ter acesso a uma listagem dos filmes mais populares do dia.
- [x] O usuário deve conseguir paginar a lista para encontrar novos filmes.
- [x] O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem.
- [x] A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa.

## Requisitos não funcionais

- [x] O app deverá ser criado usando React.
- [x] Na raiz do projeto, será necessário incluir um arquivo README.md com as instruções para construir seu projeto localmente.
- [x] O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge.
- [x] O app deverá ser responsivo.

## Features sugeridas pelo desafio

- [x] O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero.
- [x] O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido.
- [x] O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos.

## Features extras não sugeridas pelo desafio

- [x] Filtros salvos no localStorage.
- [x] Input de pesquisa.
- [x] Cada pessoa do elenco tem a sua página específica com informações.
