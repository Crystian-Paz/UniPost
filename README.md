# 🧑‍🎓 UniPost – Sistema de Cadastro de Alunos

## 📖 Descrição
UniPost é uma aplicação web full stack desenvolvida com **Django (backend)** e **React (frontend)**.  
A aplicação permite cadastrar, listar, editar e excluir alunos, armazenando os dados de forma persistente em **SQLite**.  

O design é totalmente responsivo, adaptando-se a diferentes dispositivos, incluindo iPhone 14 Pro Max, tablets e desktops.

---

## 🚀 Funcionalidades
- ✅ Listar alunos cadastrados  
- ✅ Cadastrar novos alunos  
- ✅ Editar informações existentes  
- ✅ Excluir alunos  
- ✅ Integração entre backend (Django REST Framework) e frontend (React)  
- ✅ Interface responsiva e moderna  
- ✅ Persistência de dados com SQLite  

---

## 🧩 Tecnologias Utilizadas

### 🔹 Frontend
- React.js (Vite)  
- HTML5  
- CSS3 (responsivo)  
- Axios (para comunicação com a API)  

### 🔹 Backend
- Django  
- Django REST Framework (DRF)  
- SQLite (banco de dados)  

---

## ⚙️ Estrutura do Projeto

```text
UniPost/
│
├── UniPost_Api/        # Backend Django
│   ├── manage.py
│   ├── db.sqlite3
│   ├── UniPost_Api/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── ...
│   ├── api/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   └── ...
│
└── frontend/           # Frontend React
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   └── ...
    └── package.json
```
## 🧠 Backend – UniPost_Api (Django)

O backend é responsável por:

- Autenticação de usuários (login/logout, registro)
- Gerenciamento de alunos (CRUD)
- Exposição de API RESTful para consumo pelo frontend
- Garantir persistência dos dados no banco SQLite
- Permissões e validações (somente editar/excluir quando autorizado)


Endpoints principais:
```text
Método   URL                     Função
GET      /api/alunos/            Listar todos os alunos
POST     /api/alunos/            Criar novo aluno
PUT      /api/alunos/{id}/       Editar dados de um aluno
DELETE   /api/alunos/{id}/       Excluir um aluno
```
---

## 🧠 Frontend – React

O frontend consome os dados da API Django via Axios, oferecendo:
```text
- Tela de registro/login de usuário (se houver autenticação futura)
- Dashboard com listagem de alunos
- Formulário para criar ou editar alunos
- Interface responsiva para mobile, tablet e desktop
```
Comandos para rodar o frontend:
```bash
cd frontend
npm install
npm run dev
```
```text
O frontend estará disponível em: http://localhost:5173/
```
## 🧠 Como Executar o Projeto Localmente

1️⃣ Clonar o repositório:
```bash
git clone https://github.com/Crystian-Paz/UniPost.git
cd UniPost
```
2️⃣ Configurar o Backend (Django):
```bash
cd UniPost_Api
python -m venv venv
# Ativar venv:
# Linux / macOS: source venv/bin/activate
# Windows: venv\Scripts\activate
pip install django djangorestframework
python manage.py migrate
python manage.py runserver
```

O backend estará rodando em: ```http://127.0.0.1:8000/```

3️⃣ Configurar o Frontend (React):
```bash
cd ../frontend
npm install
npm run dev
```
O frontend estará disponível em: ```http://localhost:5173/```
##

## 🧱 Banco de Dados

O projeto utiliza SQLite, que salva os dados localmente no arquivo db.sqlite3.
Todos os dados inseridos pelo frontend são persistidos automaticamente.
##

## 🎨 Layout Responsivo

O layout foi desenvolvido em CSS puro, usando:

- Flexbox
- @media queries
- Ajustes de fontes e espaçamentos para telas pequenas
- Suporte completo a iPhone 14 Pro Max, tablets e desktops
##

## 🌐 Arquitetura do Sistema
```text
[Usuário] 
    |
    v
[Frontend React] <--Axios--> [API Django REST] <--SQLite--> [Banco de Dados]
```

- O React envia requisições HTTP (GET, POST, PUT, DELETE) para a API Django.
- A API Django processa os dados, aplica regras de negócio e persiste informações no SQLite.
- As respostas da API são exibidas pelo frontend para o usuário.

## 🧾 Histórias de Usuário

- Cadastrar Aluno – Como usuário, quero adicionar um novo aluno com nome, curso e matrícula.
- Listar Alunos – Como usuário, quero visualizar todos os alunos cadastrados.
- Editar Aluno – Como usuário, quero alterar os dados de um aluno existente.
- Excluir Aluno – Como usuário, quero remover um aluno cadastrado.

## 👨‍💻 Desenvolvido por

- **Crystian da Paz Silva**  
- **Bruno Nogueira da Rocha**  
- **Kaique Lemos da Silva**  
- **Pedro Vinícius de Arruda Barbosa**
  
💼 Projeto de aplicação web (Django + React)  
📚 Persistência de dados com SQLite  
🗓️ 2025  

---

## 🔗 Links
- **Backend (UniPost_Api)**: [https://github.com/Crystian-Paz/UniPost_Api](https://github.com/Crystian-Paz/UniPost_Api)  
- **Frontend (UniPost)**: [https://github.com/Crystian-Paz/UniPost](https://github.com/Crystian-Paz/UniPost)
