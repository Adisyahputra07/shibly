import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import adminRouter from './routers/adminRoutes';
import authRouter from './routers/authRoutes';
import authPreHandler from './handlers/preHandler';

const PORT = process.env.PORT || 8000;
const app = express()
dotenv.config();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/admin', authPreHandler, adminRouter);
app.use('/api/auth', authRouter);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});

