# Consulta-CNPJ

Um site para fazer consulta de empresas através do CNPJ.

## Sobre

O site utiliza a API da receitaws: https://receitaws.com.br/

Contem as seguintes funções:

- Conseguir informações de empresas através do CNPJ
- Consultar localização da empresa

OBS: Enfrentei dificuldades para usar a API receitaws devido a problemas com o CORS. A própria biblioteca da API sugeriu que eu usasse a requisição no formato JSONP, o que me levou a testar várias bibliotecas até encontrar uma solução com o 'axios-jsonp'. Infelizmente, não consegui tratar os erros da forma que gostaria, pois não recebia um status de erro específico.

## Tecnologias

As seguintes ferramentas e frameworks foram usados na construção do projeto:

<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/styled-components%20-%2320232a.svg?&style=for-the-badge&color=b8679e&logo=styled-   components&logoColor=%3a3a3a'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-app%20-%2320232a.svg?&style=for-the-badge&color=60ddf9&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react_route%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
</p>

## Como rodar

1. Clone esse repositorio
2. Instale as dependencias

```bash
npm i
```

3. Inicie o aplicativo com

```bash
npm run dev
```

4. Acesse no seu navegador http://localhost:5173/

Ou acesse https://consulta-cnpj-sigma.vercel.app/

## Como rodar os testes

1. Vá no arquivo package.json e altere o type para "type": "commonjs",

2. Inicie o teste

```bash
npm run test
```
