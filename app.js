import express from 'express';
import Database from './src/db';
import Routes from './src/routes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const healthRoutes = express.Router();

healthRoutes.route('/')
  .get((req, res) => {
   // let db = dependencies.database.connected ? "up" : "down";
  
    res.json({
      status: {
        application: "up"
      }
    })
  })

app.use('/', Routes());

new Database(process.env.DATABASE_CONNECTION)
  .then(() => {
    app.use('/health', healthRoutes);
    app.listen(port, () => {
      console.log(`Listening on ${port}. Health Check at http://localhost:${port}/health`);
    });
});