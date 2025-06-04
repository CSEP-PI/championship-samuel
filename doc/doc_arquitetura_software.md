# 📄 Documento Técnico de Arquitetura de Software

**Sistema de Gerenciamento de Campeonatos de Handebol**

---

## 1. 🎯 Visão Geral

Este sistema tem como objetivo facilitar o gerenciamento digital de campeonatos de handebol, incluindo cadastro de jogadores, times, partidas e classificações. A aplicação está dividida entre **frontend (React)** e **backend (Django + DRF)**, com banco de dados **MySQL** e autenticação baseada em **JWT**.

---

## 2. 📌 Requisitos Elicitados

### 2.1 Requisitos Funcionais

* Cadastro e edição de campeonatos, times, jogadores e partidas.
* Definir capitão do time e estádio-sede.
* Registrar partidas com placares e data.
* Listar partidas futuras e ocorridas.
* Listar tabela de classificação por saldo de vitórias e gols.

### 2.2 Requisitos Não Funcionais

* Backend em Django com Django REST Framework.
* Banco de dados relacional: MySQL.
* Frontend SPA em React.
* Autenticação com JWT via SimpleJWT.
* API segura com CORS configurado.
* Suporte a múltiplas edições do campeonato.

---

## 3. 🧱 Arquitetura do Sistema

```
React Frontend
   |
CORS (django-cors-headers)
   |
Django REST Framework (API)
   |
MySQL Database
```

* API RESTfull para integração entre React e Django.
* Tokens JWT para controle de sessões e segurança.
* MySQL usado como banco persistente para produção.

---

## 4. 🏗️ Estrutura de Pastas

```
.
├── backend
│   ├── apps
│   │   ├── address          # Endereços e estádios
│   │   ├── championship     # Campeonatos e edições
│   │   ├── players          # Jogadores
│   │   └── teams            # Times
│   ├── core                 # Configuração principal do Django
│   ├── data                 # Arquivos CSV para carga inicial
│   ├── doc                  # Documentação do projeto
│   ├── manage.py
│   └── requirements.txt
├── frontend                 # Aplicação React
└── README.md
```

---

## 5. ⚙️ Tecnologias Utilizadas

| Camada         | Tecnologia            |
| -------------- | --------------------- |
| Backend        | Django 4.x, DRF       |
| API            | Django REST Framework |
| Auth           | Simple JWT            |
| CORS           | django-cors-headers   |
| Banco de Dados | MySQL                 |
| Frontend       | React.js              |
| Testes         | Pytest                |
| Dados          | CSV (pré-carga)       |

---

## 6. 🔐 Autenticação

### JWT com SimpleJWT:

* Rota de login: `/api/token/`
* Refresh: `/api/token/refresh/`
* Proteção de endpoints via `IsAuthenticated`

---

## 7. 🌐 Endpoints RESTful (Exemplo)

| Recurso       | Endpoint Base         | Métodos   |
| ------------- | --------------------- | --------- |
| Campeonato    | `/api/campeonatos/`   | GET, POST |
| Edição        | `/api/edicoes/`       | GET, POST |
| Time          | `/api/times/`         | GET, POST |
| Jogador       | `/api/jogadores/`     | GET, POST |
| Estádio       | `/api/estadios/`      | GET, POST |
| Partida       | `/api/partidas/`      | GET, POST |
| Classificação | `/api/classificacao/` | GET       |

---

## 8. 🧪 Testes

* Framework: `pytest-django`
* Testes para:

  * Models
  * Serializers
  * Views/API
  * Autenticação

---

## 9. 🧩 Banco de Dados (MySQL)

### Tabelas (principais entidades)

* `championship`: campeonatos
* `edition`: edições anuais
* `team`: times por edição
* `player`: jogadores
* `stadium`: estádios
* `match`: partidas
* `address`: endereço dos estádios

---

## 10. 📂 Dados CSV

Os arquivos `.csv` no diretório `/backend/data/` são utilizados para populamento inicial:

| Arquivo          | Conteúdo                          |
| ---------------- | --------------------------------- |
| campeonato.csv   | Lista de campeonatos              |
| edicao.csv       | Edições por ano                   |
| time.csv         | Times registrados                 |
| edicao\_time.csv | Participação dos times por edição |
| jogador.csv      | Jogadores                         |
| partida.csv      | Partidas agendadas                |
| estadio.csv      | Estádios                          |
| endereco.csv     | Endereços dos estádios            |

---

## 11. 🚀 Implantação (futura)

* Backend e frontend separados (deployables individualmente).
* Docker para padronização de ambiente.
* Possíveis plataformas: Render, Railway, Vercel, Netlify.

