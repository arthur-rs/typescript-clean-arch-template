# Padrões de Estilização de Pastas e Arquivos

## Nomenclatura

- Use letras minúsculas para nomear pastas e arquivos, separando as palavras com hífens (`-`);
- Evite o uso de caracteres especiais, acentos ou espaços nos nomes de pastas e arquivos;
- Use nomes descritivos e autoexplicativos para pastas e arquivos.

Exemplo: `src/api/controllers/user-controller.ts`

## Estrutura de Pastas

- Utilize uma estrutura de pastas que reflita a arquitetura do sistema, seguindo os princípios da Arquitetura Limpa ou outras arquiteturas similares;
- Organize as pastas de acordo com a responsabilidade de cada módulo ou componente do sistema;
- Utilize pastas compartilhadas para arquivos ou funcionalidades que possam ser reutilizados em diferentes partes do sistema.

Exemplo:

``` bash
src/
├── api/
│ ├── controllers/
│ │ └── user-controller.ts
│ ├── middlewares/
│ └── routes/
│ └── user-routes.ts
├── config/
├── domain/
│ ├── entities/
│ ├── repositories/
│ └── use-cases/
├── infrastructure/
├── interfaces/
└── shared/
├── errors/
├── helpers/
├── services/
└── validators/
```

## Padronização de Arquivos

- Utilize sufixos para identificar o tipo de arquivo, como `.ts` para arquivos TypeScript, `.spec.ts` para arquivos de teste unitário, `.test.ts` para arquivos de teste de integração, etc.;
- Utilize prefixos para identificar a ordem de execução dos arquivos, como `001-` para o primeiro arquivo a ser executado, `002-` para o segundo, e assim por diante;
- Evite utilizar arquivos com nomes genéricos, como `index.ts`, a menos que seja necessário.

Exemplo: `src/api/controllers/user-controller.ts`
