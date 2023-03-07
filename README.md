# Node.js Template

Neste repositorio temos um template para projetos Node.js com Typescript.

Esse template tem o intuito de auxiliar no desenvolvimento de projetos em node.js, com uma estrutura de pastas e arquivos padronizados, além de ferramentas que auxiliam no desenvolvimento. A arquitetura utilizada é a Clean Architecture.

## Clean Architecture

A Clean Architecture é uma arquitetura que visa separar as responsabilidades de cada camada do projeto, facilitando a manutenção e a escalabilidade do projeto.

A arquitetura Clean Architecture é composta por 4 camadas:

- **Entities**: Camada responsável por armazenar as entidades do projeto, que são as entidades de negócio do projeto. Essas entidades são utilizadas pelas outras camadas do projeto.

- **Application**: Camada responsável por armazenar os casos de uso do projeto. Essa camada é responsável por conter as regras de negócio do projeto.

- **Infrastructure**: Camada responsável por armazenar os frameworks e drivers do projeto. Essa camada é responsável por conter os frameworks e drivers que são utilizados pelas outras camadas do projeto.


## Como usar

1. Clone o repositorio

```bash
git clone git@github.com:arthur-rs/nodejs-template.git
```

2. Instale as dependencias

```bash
npm install
```

3. Instale o Husky

```bash
npm run husky:install
```

Pronto, agora você pode começar a desenvolver seu projeto.

## Tecnologias utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [Commitlint](https://commitlint.js.org/#/)    

## Arquitetura e design patterns

O template utiliza a arquitetura [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) e os seguintes design patterns:

- [SOLID](https://en.wikipedia.org/wiki/SOLID)
- [Repository Pattern](https://www.baeldung.com/java-dao-vs-repository)

## Créditos

- [Arthur Reis](https://github.com/arthur-rs)