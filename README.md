🧑‍🎓 UniPost – Sistema de Cadastro de Alunos

📖 Descrição

UniPost é uma aplicação web full stack com backend em Django e frontend em React, permitindo cadastrar, listar, editar e excluir alunos com persistência em SQLite.
O layout é totalmente responsivo, compatível com dispositivos como iPhone 14 Pro Max, tablets e desktops.

🚀 Funcionalidades

Cadastrar, listar, editar e excluir alunos

Interface responsiva e moderna

Integração via API RESTful

Persistência de dados com SQLite

🧩 Tecnologias
🔹 Frontend

React.js (Vite)

HTML5, CSS3

Axios para comunicação com API

🔹 Backend

Django, Django REST Framework

SQLite

⚙️ Estrutura dos Repositórios
1️⃣ Backend – UniPost_Api

Repositório

UniPost_Api/
├── manage.py
├── db.sqlite3
├── UniPost_Api/
│   ├── settings.py
│   ├── urls.py
│   └── ...
├── api/
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   ├── urls.py
│   └── ...

2️⃣ Frontend – UniPost (React)

(Repositorio separado, link a adicionar)

frontend/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── ...
└── package.json

🧠 Backend – UniPost_Api

O backend é responsável por:

Autenticação e autorização de usuários

CRUD de alunos

Exposição de API RESTful consumida pelo frontend

Persistência dos dados no SQLite

Endpoints principais:

Método	URL	Função
GET	/api/alunos/	Listar alunos
POST	/api/alunos/	Criar aluno
PUT	/api/alunos/{id}/	Editar aluno
DELETE	/api/alunos/{id}/	Excluir aluno
🌐 Arquitetura do Sistema
[Frontend React] <--Axios--> [API Django REST] <--SQLite--> [Banco de Dados]
       |                                   
       | Usuário interage via navegador   


O React envia requisições HTTP (GET, POST, PUT, DELETE) para a API Django.

A API Django processa os dados, aplica regras de negócio e persiste informações no SQLite.

As respostas da API são exibidas pelo frontend para o usuário.

🧠 Como Executar
Backend
git clone https://github.com/Crystian-Paz/UniPost_Api.git
cd UniPost_Api
python -m venv venv
# Ativar venv:
# Linux / macOS: source venv/bin/activate
# Windows: venv\Scripts\activate
pip install django djangorestframework
python manage.py migrate
python manage.py runserver


API rodando em: http://127.0.0.1:8000/

Frontend
# Clonar repositório do frontend
cd frontend
npm install
npm run dev


Frontend disponível em: http://localhost:5173/
