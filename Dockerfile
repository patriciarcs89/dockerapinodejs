# Imagem oficial do Node.js
FROM node:14

# Definir o diretório de trabalho
WORKDIR /app

# Iniciar Projeto Node.js
RUN npm init -y

# Instalar as dependências
RUN npm install express swagger-ui-express swagger-jsdoc

# Copiar o restante do código da aplicação
COPY ./app .

# Expor a porta na qual o aplicativo vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "index.js"]
