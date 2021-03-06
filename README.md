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
npm install
# ou
yarn install
```

Antes de iniciar o servidor, crie um arquivo chamado `.env.local` na raiz do projeto, e cole o seguinte código:

```ini
NEXT_PUBLIC_TMDB_API_KEY=CHAVE_API_V3
```

Substitua `CHAVE_API_V3` por sua **Chave da API (v3 auth)**.

Inicie o servidor:

```bash
npm run dev
# ou
yarn dev
```

Por fim, acesse [http://localhost:3000](http://localhost:3000) no browser.

## Sobre o projeto

Projeto desenvolvido seguindo o desafio de front-end do [Promobit](https://github.com/Promobit/front-end-challenge/), com base no layout sugerido no [Figma](https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End), utilizando a [API gratuita do The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction) como fonte de dados.

## Tecnologias utilizadas

- React com Next.js
- TypeScript
- Styled Components
