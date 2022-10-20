import  express from 'express';
import cors from 'cors' 
import swaggerUi from 'swagger-ui-express'

import swaggerDocs from './swagger.json'

import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(cors())

app.use(routes)

app.listen(3333, () => console.log('server running'));