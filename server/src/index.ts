import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import adminRouter from './routes/adminRoutes';
import userRouter from './routes/userRoutes';

const PORT = process.env.PORT || 8000;
const app = express()
dotenv.config();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});

