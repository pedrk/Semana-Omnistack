const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/* 
 *Rota / Recurso

*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação back-end
 * POST: Criar informação no back-end
 * PUT: Alterar uma informção no back-end
 * DELETE: Deletar uma informaçao no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query: Parametros nomeados eviados na rota após "?" (Filtros e paginação)
 * Route: Parâmetros utilizados para identificar recursos
 * Requeste Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: My SQL, SQLite, Oracle
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */
