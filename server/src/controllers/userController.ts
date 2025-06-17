
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';

import Logger from "../handlers/logger";
import { database } from '../database/postgres';
import { DataToken } from '../types';

const SECRET_KEY = process.env.SECRET_KEY || "jksfd8hr389rqiohjnsda";

export const loginHandler = async (req: Request, res: Response): Promise<Response> => {
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

export const addAnggotaHandler = async (req: Request, res: Response): Promise<Response> => {
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

export const getAnggotaHandler = async (req: Request, res: Response): Promise<Response> => {
  try {
    const token = req.header('authorization');
    if (!token) {
      Logger.error('Authorization token is missing');
      return res.status(401).json({ message: 'Authorization token is missing' });
    }
    const dataToken = jwt.verify(token, process.env.SECRET_KEY!) as JwtPayload;
    // TODO:
    //Dashboard
    //Grafik pendaftaran anggota per 5 menit dalam 30 menit terakhir
    // Total anggota yang mendaftar per hari ini

    //TODO:
    // Rekapitulasi total anggota per wilayah dan tingkatannya
    // Data yang ditampilkan pada tingkat provinsi sampai dengan DLL

    const role = dataToken.userToken.role;
    const startTime = new Date().getTime();
    
    if (role === 'admin_pusat') {
      const data = await database.selectFrom('anggota')
        .leftJoin('provinsi', 'anggota.provinsi_id', 'provinsi.id')
        .leftJoin('kabupaten_kota', 'anggota.kabupaten_kota_id', 'kabupaten_kota.id')
        .leftJoin('kecamatan', 'anggota.kecamatan_id', 'kecamatan.id')
        .leftJoin('kelurahan', 'anggota.kelurahan_id', 'kelurahan.id')
        .select([
          'anggota.name',
          'anggota.noKtp',
          'anggota.noHp',
          'anggota.status',
          'provinsi.provinsi as provinsi',
          'kabupaten_kota.kabupaten_kota as kabupaten_kota',
          'kecamatan.kecamatan as kecamatan',
          'kelurahan.kelurahan as kelurahan',
        ])
        .execute();
      Logger.info(`Fetching data anggota for ${role}`);
      return res.send({
        messagge: 'Suxcessfully get data anggota',
        data,
      });
    }

    let query = database.selectFrom('anggota')
      .leftJoin('provinsi', 'anggota.provinsi_id', 'provinsi.id')
      .leftJoin('kabupaten_kota', 'anggota.kabupaten_kota_id', 'kabupaten_kota.id')
      .leftJoin('kecamatan', 'anggota.kecamatan_id', 'kecamatan.id')
      .leftJoin('kelurahan', 'anggota.kelurahan_id', 'kelurahan.id')
      .select([
        'anggota.name',
        'anggota.noKtp',
        'anggota.noHp',
        'anggota.status',
        'provinsi.provinsi as provinsi',
        'kabupaten_kota.kabupaten_kota as kabupaten_kota',
        'kecamatan.kecamatan as kecamatan',
        'kelurahan.kelurahan as kelurahan',
      ])

    switch (role) {
      case 'admin_provinsi': {
        query = query.where('provinsi.provinsi', '=', dataToken.userToken.provinsi)
        Logger.info(`Fetching data anggota for admin_provinsi = ${dataToken.userToken.provinsi}`);
        break;
      } case 'admin_kabupaten_kota': {
        query = query.where('kabupaten_kota.kabupaten_kota', '=', dataToken.userToken.kabupaten_kota)
        Logger.info(`Fetching data anggota for admin_kabupaten_kota = ${dataToken.userToken.kabupaten_kota}`);
        break;
      } case 'admin_kecamatan': {
        query = query.where('kecamatan.kecamatan', '=', dataToken.userToken_kecamatan)
        Logger.info(`Fetching data anggota for admin_kecamatan = ${dataToken.userToken.kecamatan}`);
        break;
      } case 'admin_kelurahan': {
        query = query.where('kelurahan.kelurahan', '=', dataToken.userToken.kelurahan)
        Logger.info( `Fetching data anggota for admin_kelurahan = ${dataToken.userToken.kelurahan}`);
        break;
      }
    }
    const endTime = new Date().getTime();
    const timeTaken = endTime - startTime;
    const data = await query.execute()
    Logger.info(`Successfully get data anggota - Time taken: ${timeTaken}ms`);

    return res.send({
      messagge: 'Suxcessfully get data anggota',
      data,
    });
  } catch (error) {
    Logger.error(`Error: ${error}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}