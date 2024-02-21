# Aula useEffect

Linke Demo: 
[https://joseolinda.github.io/produtos](https://joseolinda.github.io/produtos)

Este projeto foi criado com o intuito de aprender sobre o hook useEffect do React.

## O que é useEffect?

O useEffect é um hook que serve para executar efeitos colaterais em componentes funcionais. Ele é executado após a renderização do componente e pode ser utilizado para realizar operações como chamadas a APIs, manipulação do DOM, entre outras.

## useEffect não obstrutivo

Usar o useEffect sem asyn/await permite que o código seja executado de forma não obstrutiva, ou seja, o código não irá bloquear a renderização do componente.

Os dados podem ser carregados de forma assíncrona e, quando estiverem prontos, o estado do componente pode ser atualizado.