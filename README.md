# Signo Web Desafio - 003/2022

## Tecnologias Utilizadas 🛠

### Backend
- Node.JS com Typescript

### Frontend
- React.JS com Typescript

### Banco de Dados
- MySQL
- Prisma ORM para manipulação

## Como rodar o Projeto?

### Backend

Para instalar:
```
  yarn 
```

Para iniciar o Prisma: 
```
npx prisma init
```
*alterar usuário, senha, porta e banco de dados para os compatíveis com o mySQL.

Rodar o comando: 
```
npx prisma migrate
```

### Frontend

Para instalar:
```
  npm init
```

*alterar a variável PORT para a utilizada pelo backend (originalmente foi a 3334).

Rodar o comando: 
```
npx prisma migrate
```

### Backend - Endpoints📝

*Nem todos os Endpoints foram consumidos pelo frontend da aplicação.

#### Enquetes (Polls)
- [X] GET /polls - retorna todas as enquetes
- [X] POST /polls - retorna a enquete criada com as opções
```json
{
    "title": "É biscoito ou bolacha?",   
    "beginDate": "2022-07-17",
    "endDate": "2022-07-23",
    "options": [
        {
            "text": "Biscoito"
        },
        {
            "text": "Bolacha"
        },
        {
          "text": "Tanto faz"
        }
    ]
}
```
- [X] PUT /polls/:id - retorna a enquente atualizada
```json
{
    "title": "É biscoito ou bolacha?",
    "beginDate": "2022-07-10T00:00:00.000Z",
    "endDate": "2022-07-12T00:00:00.000Z"
}
```
- [X] DELETE /polls/:id - delete a enquete

- [X] GET /polls/finished /polls/upcoming /polls/upcoming

#### Opções (Options)

- [X] POST /options - retorna a opção criada para a enquete
```json
{
    "text": "Opção 3 atualizado",
    "pollId": "badaf92a-83f0-4015-9b7d-67f2d38db9df"
}
```
- [X] PUT /options - adiciona voto em uma opção e retorna essa opção atualizada
```json
{
    "optionId": "857fa6a9-8f19-4664-af91-1a2786b7979b"
}
```
- [X] DELETE /options/:id - deleta a opção

### Autor
---
Feito por Fábio Monteiro 👋🏽 Entre em contato!

 [![Linkedin Badge](https://img.shields.io/badge/-fabiomrm-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/fabiomrm/)](https://www.linkedin.com/in/fabiomrm/) 
