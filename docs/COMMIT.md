# Padronização de Commits

Este documento define as convenções para mensagens de commit para este projeto.

## Cabeçalho

O cabeçalho é obrigatório e deve ser estruturado da seguinte forma:

``` bash
<tipo>(<escopo opcional>): <descrição curta>
```

O tipo e a descrição curta são obrigatórios. O escopo é opcional, mas altamente recomendado.

## Tipo

O tipo é uma palavra-chave que descreve o tipo de mudança:

**feat:** nova funcionalidade
**fix:** correção de um bug
**docs:** alteração na documentação
**style:** mudanças que não afetam o significado do código (espaços em branco, formatação, ponto e vírgula ausente, etc)
**refactor:** uma mudança no código que não corrige um bug e não adiciona uma nova funcionalidade
**test:** adição de testes faltantes ou correção de testes existentes
**chore:** mudanças no processo de build, ferramentas auxiliares, bibliotecas, etc.
**perf:** uma mudança de código que melhora o desempenho

## Escopo (opcional)

O escopo é opcional e pode ser usado para identificar a parte do código que está sendo modificada.

## Descrição Curta

A descrição curta é uma frase curta que descreve a mudança. Ela deve ser escrita no tempo presente e não deve exceder 50 caracteres.

## Corpo

O corpo é opcional, mas altamente recomendado. Ele deve fornecer uma descrição mais detalhada da mudança e pode ser dividido em várias linhas.

## Rodapé

O rodapé é opcional e pode ser usado para referenciar problemas relacionados ou outras informações relevantes. Ele deve ser precedido por uma linha em branco e deve ser dividido em várias linhas.

## Exemplos

``` bash
feat: add new feature X
```

``` bash
fix: resolve issue with Y
```

``` bash
docs: update documentation for Z
```

``` bash
refactor: change implementation of X
```

``` bash
test: add new test for Y
```

``` bash
chore: update dependencies
```

``` bash
style: update formatting in X file
```

``` bash
perf: improve performance of X
```