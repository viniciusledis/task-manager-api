# 📌 Task Manager API

## 🧠 Descrição do Projeto

A **Task Manager API** é uma aplicação simples de gerenciamento de tarefas (CRUD), desenvolvida com o objetivo de simular um ambiente profissional de desenvolvimento utilizando boas práticas de versionamento com Git.

O projeto resolve o problema de controle de tarefas de forma organizada, permitindo criar, listar, atualizar e remover tarefas.

Além disso, o foco principal está na aplicação de um fluxo de trabalho profissional com Git, incluindo uso de branches, Pull Requests, versionamento semântico e padronização de commits.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* Git & GitHub

---

## ▶️ Como Executar o Projeto

### Pré-requisitos

* Node.js instalado
* Git instalado

### Passos

```bash
# Clonar o repositório
git clone https://github.com/viniciusledis/task-manager-api

# Entrar na pasta do projeto
cd task-manager-api

# Instalar dependências
npm install

# Executar a aplicação
node src/app.js
```

A aplicação será iniciada em:

```
http://localhost:3000
```

---

## 📌 Endpoints da API

### ➕ Criar tarefa

```
POST /tasks
```

### 📋 Listar tarefas

```
GET /tasks
```

### ✏️ Atualizar tarefa

```
PUT /tasks/:id
```

### ❌ Deletar tarefa

```
DELETE /tasks/:id
```

---

## 🌿 Estratégia de Branches

O projeto segue uma estratégia baseada no Git Flow simplificado:

* **main** → ambiente de produção
* **develop** → ambiente de integração
* **feature/*** → desenvolvimento de novas funcionalidades
* **hotfix/*** → correções urgentes em produção

---

## 🔄 Fluxo de Desenvolvimento

1. Criar uma branch a partir da `develop`:

   ```bash
   git checkout develop
   git checkout -b feature/nome-da-feature
   ```

2. Desenvolver a funcionalidade

3. Realizar commits padronizados

4. Enviar para o repositório remoto:

   ```bash
   git push -u origin feature/nome-da-feature
   ```

5. Abrir Pull Request para `develop`

6. Revisar e realizar merge

7. Após validação, realizar merge de `develop` para `main`

---

## 🚨 Fluxo de Hotfix

Para correções em produção:

```bash
git checkout main
git checkout -b hotfix/nome-do-bug
```

Após correção:

1. Commit da correção
2. Push da branch
3. Pull Request para `main`
4. Merge em `main`
5. Sincronizar com `develop`:

   ```bash
   git checkout develop
   git merge main
   ```

---

## 🧾 Padrão de Commits

O projeto segue o padrão de commits semânticos:

* `feat:` nova funcionalidade
* `fix:` correção de bug
* `docs:` alterações na documentação
* `refactor:` melhorias internas no código
* `chore:` tarefas de manutenção

### Exemplos:

```
feat: adiciona criação de tarefas
fix: corrige erro ao deletar tarefa
docs: atualiza README
```

---

## 🏷️ Versionamento

O projeto utiliza **Versionamento Semântico (SemVer)**:

Formato:

```
MAJOR.MINOR.PATCH
```

### Exemplos:

* **v1.0.0** → versão inicial estável
* **v1.1.0** → nova funcionalidade adicionada
* **v1.1.1** → correção de bug

Tags são criadas diretamente no Git:

```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## 📁 Estrutura do Projeto

```
task-manager-api/
 ├── src/
 │   ├── controllers/
 │   ├── models/
 │   ├── routes/
 │   └── app.js
 ├── README.md
 └── .gitignore
```

---

## 🎯 Objetivo Acadêmico

Este projeto foi desenvolvido com fins educacionais, com foco em:

* Aplicação de Git em ambiente real
* Organização de fluxo de desenvolvimento
* Simulação de trabalho em equipe
* Uso de boas práticas de versionamento

---

## 👨‍💻 Autor

Desenvolvido por **Vinicius Ledis**

---

## 📄 Licença

Este projeto é apenas para fins acadêmicos.
