# Sistema de Cadastro de Usuários

Um sistema simples para cadastrar, listar, editar e excluir usuários. Desenvolvido utilizando React, Node.js, Express, MySQL e Docker, com estilização usando Styled Components.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado e configurado.
- [Docker](https://www.docker.com/) instalado e configurado. (Opcional)

## Como Rodar

Siga as instruções abaixo para executar o sistema em sua máquina local.

### Configuração do Backend

1. Navegue até a pasta do backend:

```bash
cd api
```

2. Instale as dependências do servidor:

```bash
npm install
```
3. Configure as Variáveis de Ambiente do Banco de Dados:

- Abra o arquivo db.ts localizado em src/models.
- Altere as variáveis de ambiente host, user, password e database de acordo com as configurações do seu banco de dados MySQL.

4. Inicie o servidor Node.js:

```bash
npm run dev
```

- A API estará rodando em http://localhost:3333.

### Configuração do Frontend

1. Navegue até a pasta do frontend:

```bash
cd web
```

2. Instale as dependências do servidor:

```bash
npm install
```

3. Inicie o servidor React:

```bash
npm start
```

- O sistema estará disponível em http://localhost:3000 no seu navegador.

## Tecnologias Utilizadas

- React
- Styled Components
- Node.js
- Express.js
- MySQL (executado em um contêiner Docker)
- Extensão do VSCode Database Client
  
## Contribuição
- Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests.
