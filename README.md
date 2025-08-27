# gerenciamento-tema-contextApi

Exercício 1 Semana 11 Turma Futuro Dev v4

[M1S11] - Ex. 1 - Gerencimento de Tema com ContextAPI

Descrição

Objetivo: Implementar um sistema de tema (claro/escuro) usando ContextAPI para gerenciar o estado global.

Crie uma aplicação React simples. Implemente um ThemeContext que forneça o tema atual ('light' ou 'dark') e uma função para alterná-lo. Crie um componente ThemeToggle (um botão) que use o contexto para mudar o tema. Crie também um componente ContentDisplay que exiba texto e tenha seu estilo (cor de fundo e texto) alterado de acordo com o tema do contexto.

Checklist

Crie um novo projeto React com Vite.

Crie o arquivo src/contexts/ThemeContext.js com createContext.

Crie um ThemeProvider que gerencie o estado do tema (useState) e forneça o tema e a função de toggle via ThemeContext.Provider.

Envolva o App ou uma parte da aplicação com o ThemeProvider.

Crie o componente ThemeToggle que usa useContext para acessar e alternar o tema.

Crie o componente ContentDisplay que usa useContext para acessar o tema e aplicar estilos dinamicamente.

Teste a funcionalidade de alternar o tema e observe as mudanças nos componentes.
