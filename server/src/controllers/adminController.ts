import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import Logger from "../handlers/loggerHandlers";
import { database } from '../database/postgresDatabase';

export const addAdminController = async (req: Request, res: Response) : Promise<Response> => {
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

export const updateAdminController = async (req: Request, res: Response): Promise<Response> => {
  const id = req.query.id as string
  
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
      .where('admin.id', '=', Number(id))
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
      .where('id', '=', Number(id))
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

export const deleteAdminController = async (req: Request, res: Response): Promise<Response> => {
  const id = req.query.id as string
  try {
    const startTime = new Date().getTime();

    // Check if the admin exists
    const deleteFrom = await database.deleteFrom('admin')
      .where('admin.id', '=', Number(id))
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

export const getMemberHandler = async (req: Request, res: Response): Promise<Response> => {
  const userToken = req.user;
  try {
    if (!userToken) {
      return res.status(401).json({ message: 'Unauthorized: user not found in request' });
    }
    // TODO:
    //Dashboard
    //Grafik pendaftaran anggota per 5 menit dalam 30 menit terakhir
    // Total anggota yang mendaftar per hari ini

    //TODO:
    // Rekapitulasi total anggota per wilayah dan tingkatannya
    // Data yang ditampilkan pada tingkat provinsi sampai dengan DLL

    const role = userToken.role;
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
        query = query.where('provinsi.provinsi', '=', userToken.provinsi)
        Logger.info(`Fetching data anggota for admin_provinsi = ${userToken.provinsi}`);
        break;
      } case 'admin_kabupaten_kota': {
        query = query.where('kabupaten_kota.kabupaten_kota', '=', userToken.kabupaten_kota)
        Logger.info(`Fetching data anggota for admin_kabupaten_kota = ${userToken.kabupaten_kota}`);
        break;
      } case 'admin_kecamatan': {
        query = query.where('kecamatan.kecamatan', '=', userToken.kecamatan)
        Logger.info(`Fetching data anggota for admin_kecamatan = ${userToken.kecamatan}`);
        break;
      } case 'admin_kelurahan': {
        query = query.where('kelurahan.kelurahan', '=', userToken.kelurahan)
        Logger.info( `Fetching data anggota for admin_kelurahan = ${userToken.kelurahan}`);
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