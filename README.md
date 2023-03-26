# Node.js Template

Este repositório é um template para a implementação de sistemas utilizando a arquitetura limpa, uma abordagem que separa as diferentes responsabilidades de um sistema em camadas bem definidas. O repositório está organizado em quatro camadas principais: entidades, casos de uso, infraestrutura e apresentação. Cada camada possui sua própria pasta e arquivos correspondentes em TypeScript, de forma a tornar a implementação do sistema mais modular, testável e escalável. 

Ao utilizar este template, você terá uma base sólida para a construção de um sistema bem estruturado, onde cada camada tem uma responsabilidade bem definida e é facilmente substituível, caso necessário. Além disso, o uso de TypeScript garante uma tipagem mais forte e um código mais seguro e confiável.

## Clean Architecture

A **arquitetura limpa**, também conhecida como arquitetura hexagonal, é um padrão arquitetural que tem como objetivo principal separar as diferentes responsabilidades de um sistema, de forma a torná-lo mais modular, testável e escalável.

A arquitetura limpa é composta por **quatro camadas principais**. A primeira camada é a de **entidades**, que contém os objetos de negócio do sistema, ou seja, as classes que representam as regras de negócio e as entidades do domínio. Essa camada é responsável por definir a estrutura e o comportamento dos objetos que são utilizados pelo sistema. Esses objetos devem ser independentes de qualquer tecnologia ou infraestrutura específica, de forma que possam ser reutilizados em diferentes contextos.

A segunda camada é a de **casos de uso**, que contém a lógica de negócio do sistema. Essa camada é responsável por implementar as regras de negócio do sistema utilizando as entidades da camada anterior. Os casos de uso são responsáveis por definir as ações que o sistema pode executar e como elas devem ser executadas. Eles também são responsáveis por garantir que as regras de negócio sejam aplicadas de forma consistente em todo o sistema.

A terceira camada é a de **infraestrutura**, que contém o código responsável por fornecer as implementações concretas para as interfaces definidas nas camadas de entidades e casos de uso. Essa camada é responsável por implementar os detalhes técnicos necessários para que o sistema possa interagir com o mundo exterior, como bancos de dados, serviços externos, dispositivos de entrada e saída, entre outros.

Por fim, a camada de **apresentação** é responsável por fornecer uma interface de usuário para o sistema. Essa camada é responsável por apresentar as informações para o usuário e capturar as entradas do usuário para repassá-las aos casos de uso. É importante notar que a camada de apresentação deve ser a camada mais externa do sistema, ou seja, ela não deve depender de nenhuma das outras camadas, mas sim o contrário. Dessa forma, a camada de apresentação se torna mais flexível e fácil de ser substituída, já que as outras camadas não precisam ser modificadas para acomodar mudanças na interface de usuário.

## Como utilizar?

1. Clone o repositorio, utilizando o protocolo SSH ou HTTPS

(*exemplo com ssh*)

```bash
git clone git@github.com:arthur-rs/typescript-clean-arch-template.git
```

ou

 (*exemplo com https*)

```bash
git clone https://github.com/arthur-rs/typescript-clean-arch-template.git
```

2. Após clonar o repositório, instale as dependências

```bash
npm install
```

3. E por fim, instale os hooks do husky

```bash
npm run husky:install
```

Pronto, agora você pode começar a desenvolver seu projeto.

**Divirta-se!**

## Tecnologias utilizadas

### Commitlint

O Commitlint é uma ferramenta que ajuda a garantir que as mensagens de commit estejam em conformidade com um determinado padrão. No projeto, o Commitlint é utilizado para garantir que as mensagens de commit sigam um formato padronizado e fácil de entender.

### Eslint

O Eslint é uma ferramenta de análise de código estático que ajuda a identificar e reportar erros e problemas de estilo no código. No projeto, o Eslint é utilizado para garantir a consistência e qualidade do código.

### Husky

O Husky é uma ferramenta que permite executar scripts antes de cada commit ou push para o repositório. No projeto, o Husky é utilizado para garantir que o código esteja em conformidade com as regras de estilo e qualidade antes de ser enviado para o repositório.

### Jest

O Jest é um framework de testes para aplicações Javascript. No projeto, o Jest é utilizado para criar e executar testes automatizados, garantindo que o código funcione como esperado e não tenha regressões.

### Node.js

O Node.js é uma plataforma de desenvolvimento de aplicações backend em Javascript. No projeto, o Node.js é utilizado como plataforma de desenvolvimento, permitindo que o código seja executado em um servidor.

### Nest.js

O Nest.js é um framework de desenvolvimento web em Node.js que utiliza conceitos de programação orientada a objetos e programação funcional. No projeto, o Nest.js é utilizado para criar uma arquitetura escalável e modular, facilitando o desenvolvimento e a manutenção do código.

### SWC

O SWC é um compilador JavaScript/TypeScript de alto desempenho e baixa latência. No projeto, o SWC é utilizado para compilar o código TypeScript em JavaScript otimizado para produção.

### Typescript

O Typescript é um superset da linguagem Javascript que adiciona recursos como tipagem estática, interfaces e classes. No projeto, o Typescript é utilizado para melhorar a segurança do código, tornando-o mais fácil de ler e manter.

## Créditos

Pensando e desenvolvido por [Arthur Reis](https://github.com/arthur-rs)!