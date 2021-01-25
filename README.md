front-fullstack-labenu-S21
==========================

Projeto Full Stack para a Labenu

Descrição do projeto
--------------------

Aplicação web para gerenciar músicas

![Badge](https://img.shields.io/badge/build-unstable-yellow)

Tabela de conteúdos
===================

<!--ts-->
  * [front-fullstack-labenu-S21](#front-fullstack-labenu-S21)
  * [Tabela de conteúdos](#tabela-de-conteudos)
  * [Telas](#telas)
    * [Cadastro](#cadastro)
    * [Login](#login)
    * [All Music](#all-Music)
    * [Specific Music](#specific-music)
    * [All Playlists](#all-playlists)
    * [Playlist Details](#playlist-details)
    * [Categorização](#categorização)
  * [Tecnologias e Libs utilizadas](#tecnologias-e-libs-utilizadas)
  * [Design System](#design-system)
  * [Recursos](#recursos)
  * [Pontos de melhoria](#pontos-de-melhoria)
  * [Autor](#autor)
<!--te-->

Telas
=====

Cadastro
--------

O usuário precisa informar o seu nome, o nickname, o email, senha, com, no mínimo 6 caracteres.

- _Alerta_ de <span style='color: red'>**erro**</span> caso haja falha no cadastro.

Login
-----

Todos os usuários devem se logar pela mesma tela. Eles podem fornecer o email (ou o nickname, caso tenha sido feito com este) e a senha correta.

Caso o usuário ainda não tenha cadastro, _link_ o direciona para a tela de `cadastro`.

- _Alerta_ de <span style='color: red'>**erro**</span> caso haja falha no login.

All Music
---------

Exibe todas as músicas criadas até o momento com _título_ das músicas, _autor_, _álbum_ e _gêneros_.

Cada música tem o seu próprio _player_.

- Criação de músicas
  
  - Botão que abre um modal com formulário de criação de músicas que valida os campos obrigatórios que estão vazios, e insere o arquivo de audio.
  
  - Campos (* obrigatório):
    - título *
    - álbum *
    - gêneros (pelo menos um *)
    - arquivo *
  
  - Arquivo de audio convertido para `string` em `base64` para armazenamento no banco de dados.

  - Após a criação de uma nova música o formulário é fechado, é dado um _alerta_ de <span style='color: green'>**sucesso**</span> e a lista de músicas é atualizada.

  - _Alerta_ de <span style='color: red'>**erro**</span> caso haja falha na criação.

Specific Music
--------------

Ao clicar em uma música, é direcionado para a tela dos detalhes dessa música específica.

All Playlists
-------------

Lista das playlists criadas até o momento.

Caso a playlist não tenha imagem, um `placeholder` será exibo no lugar.

Ao clicar em uma playlist, será direcionado para a tela de detalhes da playlist.

- Criação de playlist
  
  - Botão que abre um modal com formulário de criação de playlist que valida os campos obrigatórios que estão vazios, e insere o arquivo de imagem (opcional).
  
  - Campos (* obrigatório):
    - título *
    - subtítulo
    - imagem

  - Ao criar uma playlist, o modal deve se fechar e um _alerta_ informa o <span style='color: green'>**sucesso**</span> ao usuário.

  - _Alerta_ de <span style='color: red'>**erro**</span> caso haja falha na criação.

Playlist Details
----------------

Lista todas as músicas da playlist.

Ao clicar em um item é aberto um modal com os detalhes da música e o player para ela.

Cada item da lista tem um botão `delete` para remover a música selecionada da playlist que está aberta.

- _Alerta_ de <span style='color: green'>**sucesso**</span> após a remoção.

- _Alerta_ de <span style='color: red'>**erro**</span> caso haja falha na remoção.

Categorização
-------------

Exibe todos os critérios de categorização criados.

- Critérios:
  - gêneros
  - álbuns
  - artistas

Ao clicar em um item, será redirecionado para uma nova tela apenas com as músicas deste critério.

Tecnologias e Libs utilizadas
=============================

- Framework: [React](https://pt-br.reactjs.org/)

- [ReactDOM](https://pt-br.reactjs.org/docs/react-dom.html)

- [React Router DOM](https://reactrouter.com/web/guides/quick-start)

- [Axios](https://github.com/axios/axios)

- [styled-components](https://styled-components.com/)

Design System
=============

- [Material-UI](https://material-ui.com/)

- Ícones:

  - [Material Icons](https://material-ui.com/components/material-icons/)

  - [mdi](https://materialdesignicons.com/)

Recursos
========

API: [back-fullstack-labenu-S21](https://github.com/rpontosalgado/back-fullstack-labenu-S21)

Pontos de melhoria
==================

- Exibir o player de música e carregar o arquivo de audio apenas para os arquivos abertos e selecionados.

  - Request da API está mal otimizado e demora muito para carregar, já que a Response fica muito pesada com tantos arquivos de audio.

Autor
=====

**Roberto de Abreu Salgado**

Entre em contato:

[![Linkedin Badge](https://img.shields.io/badge/-Roberto-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/rsalgado3/) 
[![Gmail Badge](https://img.shields.io/badge/-r.salgado3@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:r.salgado3@gmail.com)](mailto:r.salgado3@gmail.com)
