import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { validateLogin, validateAddAdmin, validateAddAnggotaSchema, validateUpdateAdmin } from './handlers/validationHandlers';
import { loginHandler, addAdminHandler, addAnggotaHandler, getAnggotaHandler, updateAdminHandler, deleteAdminHandler } from './handlers/auth';

const app = express()
const port = 8080;
dotenv.config();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.post('/login', validateLogin as any, loginHandler as any)
app.post('/add-anggota', validateAddAnggotaSchema as any , addAnggotaHandler as any);
app.get('/get-anggota', getAnggotaHandler as any);


app.post('/add-admin', validateAddAdmin as any , addAdminHandler as any);
app.put('/update-admin', validateUpdateAdmin as any , updateAdminHandler as any);
app.delete('/delete-admin' , deleteAdminHandler as any);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

