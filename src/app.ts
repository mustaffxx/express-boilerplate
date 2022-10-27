import express from 'express'
import 'express-async-errors'
import { errorHandler } from './utils/errorHandler'


const app = express()

app.use(express.json())

/* Default error handler */
app.use(errorHandler)

export default app