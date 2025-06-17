import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import Logger from "../handlers/logger";
import { database } from '../database/postgres';

const SECRET_KEY = process.env.SECRET_KEY || "jksfd8hr389rqiohjnsda";

export const addAdminHandler = async (req: Request, res: Response) : Promise<Response> => {
  const {
    username,
    password,
    role,
    provinsi_id,
    kabupaten_kota_id,
    kecamatan_id,
    kelurahan_id,
  } = req.body;
  try {
    const startTimeRegister = new Date().getTime();
    const hashedPassword = await bcrypt.hash(password, 10);

    await database.insertInto('admin').values({
      username,
      password: hashedPassword,
      role,
      provinsi_id,
      kabupaten_kota_id,
      kecamatan_id,
      kelurahan_id,
    })
      .executeTakeFirst()

    const endTimeRegister = new Date().getTime();
    const timeTakenRegister = endTimeRegister - startTimeRegister;
    Logger.info(`Successfully registered user - Time taken: ${timeTakenRegister}ms`);

    return res.send({ messagge: 'Admin berhasil ditambahkan' });
  } catch (error) {
    Logger.error(`Error occurred during register: ${error}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const updateAdminHandler = async (req: Request, res: Response): Promise<Response> => {
  const id = req.body.id;
  const {
    username,
    password,
    role,
    provinsi_id,
    kabupaten_kota_id,
    kecamatan_id,
    kelurahan_id,
  } = req.body;
  try {
    const startTimeRegister = new Date().getTime();
    // Check if the admin exists
    const dataAdmin = await database.selectFrom('admin')
      .leftJoin('provinsi', 'admin.provinsi_id', 'provinsi.id')
      .leftJoin('kabupaten_kota', 'admin.kabupaten_kota_id', 'kabupaten_kota.id')
      .leftJoin('kecamatan', 'admin.kecamatan_id', 'kecamatan.id')
      .leftJoin('kelurahan', 'admin.kelurahan_id', 'kelurahan.id')
      .select([
        'admin.username',
        'admin.password',
        'admin.role',
        'provinsi.provinsi as provinsi',
        'kabupaten_kota.kabupaten_kota as kabupaten_kota',
        'kecamatan.kecamatan as kecamatan',
        'kelurahan.kelurahan as kelurahan',
      ])
      .where('admin.id', '=', id)
      .executeTakeFirst();

    if (!dataAdmin) {
      Logger.info(`Admin with ID ${id} not found`);
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Update the admin details
    await database.updateTable('admin').set({
      username,
      password,
      role,
      provinsi_id,
      kabupaten_kota_id,
      kecamatan_id,
      kelurahan_id,
    })
      .where('id', '=', id)
      .executeTakeFirst()

    const endTimeRegister = new Date().getTime();
    const timeTakenRegister = endTimeRegister - startTimeRegister;
    Logger.info(`Successfully registered user - Time taken: ${timeTakenRegister}ms`);

    return res.send({ messagge: `Admin berhasil update dengan ID ${id}` });
  } catch (error) {
    Logger.error(`Error occurred during register: ${error}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const deleteAdminHandler = async (req: Request, res: Response): Promise<Response> => {
  const id = req.body.id;
  try {
    const startTime = new Date().getTime();
    // Check if the admin exists
    const deleteFrom = await database.deleteFrom('admin')
      .where('admin.id', '=', id)
      .executeTakeFirst();

    if (!deleteFrom) {
      Logger.info(`Admin with ID ${id} not found`);
      return res.status(404).json({ message: 'Admin not found' });
    }

    const endTime = new Date().getTime();
    const timeTaken = endTime - startTime;
    Logger.info(`Successfully delete user - Time taken: ${timeTaken}ms`);

    return res.send({ messagge: `Admin berhasil Delete dengan ID ${id}` });
  } catch (error) {
    Logger.error(`Error occurred during : ${error}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
