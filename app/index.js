const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

// Configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js API',
      version: '1.0.0',
      description: 'API básica usando Node.js e Express',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./index.js'], // Caminho dos arquivos de definição da API
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Definir uma rota simples
/**
 * @swagger
 * /:
 *   get:
 *     description: Retorna uma mensagem de boas-vindas
 *     responses:
 *       200:
 *         description: Mensagem de boas-vindas
 */
app.get('/', (req, res) => {
  res.send('Bem-vindo à API Node.js!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
