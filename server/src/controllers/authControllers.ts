import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import Logger from "../handlers/loggerHandlers";
import { database } from '../database/postgresDatabase';
import { DataToken } from '../types';

const SECRET_KEY = process.env.SECRET_KEY || "jksfd8hr389rqiohjnsda";

export const loginController = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  try {
    const startTime = new Date().getTime();
    const dataAdmin = await database.selectFrom('admin')
      .leftJoin('provinsi', 'admin.provinsi_id', 'provinsi.id')
      .leftJoin('kabupaten_kota', 'admin.kabupaten_kota_id', 'kabupaten_kota.id')
      .leftJoin('kecamatan', 'admin.kecamatan_id', 'kecamatan.id')
      .leftJoin('kelurahan', 'admin.kelurahan_id', 'kelurahan.id')
      .where('admin.username', '=', username)
      .select([
        'admin.username',
        'admin.id',
        'admin.password',
        'admin.role',
        'provinsi.provinsi as provinsi',
        'kabupaten_kota.kabupaten_kota as kabupaten_kota',
        'kecamatan.kecamatan as kecamatan',
        'kelurahan.kelurahan as kelurahan',
      ]).executeTakeFirst();
    const endTime = new Date().getTime();
    const timeTaken = endTime - startTime;

    if (!dataAdmin) {
      Logger.info(`Login failed for user ${username} - Time taken: ${timeTaken}ms`);
      return res.status(401).json({ message: 'Username atau password salah' });
    }

    const checkPassword = await bcrypt.compare(password, dataAdmin.password);

    if (checkPassword === false) {
      Logger.info(`Login failed for user ${username} Password is wrong- Time taken: ${timeTaken}ms`);
      return res.status(401).json({ message: 'Password Anda salah' });
    }

    Logger.info(`Login successful for user ${dataAdmin.id} - Time taken: ${timeTaken}ms`);
    const userToken: DataToken = {
      id: dataAdmin.id,
      username: dataAdmin.username,
      role: dataAdmin.role,
      provinsi: dataAdmin.provinsi ?? null,
      kabupaten_kota: dataAdmin.kabupaten_kota ? dataAdmin.kabupaten_kota : null,
      kecamatan: dataAdmin.kecamatan ? dataAdmin.kecamatan : null,
      kelurahan: dataAdmin.kelurahan ? dataAdmin.kelurahan : null,
    };

    const token = jwt.sign({ userToken }, SECRET_KEY!, {
      expiresIn: '1h',
    });

    return res.json({
      message: 'success',
      data: userToken,
      token,
    });
  } catch (error) {
    Logger.error(`Error occurred during login: ${error}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const registerMemberController = async (req: Request, res: Response): Promise<Response> => {
  const {
    noKtp,
    name,
    noHp,
    status,
    provinsi_id,
    kabupaten_kota_id,
    kecamatan_id,
    kelurahan_id,
  } = req.body;
  try {
    const startTimeRegister = new Date().getTime();
    await database.insertInto('anggota').values({
      noKtp,
      name,
      noHp,
      status,
      provinsi_id,
      kabupaten_kota_id,
      kecamatan_id,
      kelurahan_id,
    })
      .executeTakeFirst()

    const endTimeRegister = new Date().getTime();
    const timeTakenRegister = endTimeRegister - startTimeRegister;
    Logger.info(`Successfully registered user - Time taken: ${timeTakenRegister}ms`);

    return res.send({ messagge: 'Anggota berhasil ditambahkan' });
  } catch (error) {
    Logger.error(`Error occurred during register: ${error}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
