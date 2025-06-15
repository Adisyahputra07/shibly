import { NextFunction, Request, Response} from 'express';
import Joi from 'joi';

const addAdminSchema = Joi.object().keys({
  username: Joi.string().required().min(3).max(50),
  password: Joi.string().required().min(8).max(100),
  provinsi_id: Joi.number().integer().allow(null),
  kabupaten_kota_id: Joi.number().integer().allow(null),
  kecamatan_id: Joi.number().integer().allow(null),
  kelurahan_id: Joi.number().integer().allow(null),
  role: Joi.string().required().valid(
    "admin_pusat",
    "admin_provinsi",
    "admin_kabupaten_kota",
    "admin_kecamatan",
    "admin_kelurahan"
  ),
}).or(
  'provinsi_id',
  'kabupaten_kota_id',
  'kecamatan_id',
  'kelurahan_id'
);

const loginSchema = Joi.object().keys({
  username: Joi.string().required().min(5).max(100),
  password: Joi.string().required().min(8).max(100)
});

const addAnggotaSchema = Joi.object().keys({
  noKtp: Joi.string().required().min(16).max(50),
  name: Joi.string().required().min(3).max(50),
  noHp: Joi.string().required().min(8).max(100),
  status: Joi.string().required().min(8).max(100),
  provinsi_id: Joi.number().required().integer(),
  kabupaten_kota_id: Joi.number().required().integer(),
  kecamatan_id: Joi.number().required().integer(),
  kelurahan_id: Joi.number().required().integer(),
});

const updateAdminSchema = Joi.object().keys({
  id: Joi.number().required().integer(),
  password: Joi.string().min(8).max(100),
  noKtp: Joi.string().min(16).max(50),
  username: Joi.string().min(3).max(50),
  noHp: Joi.string().min(8).max(100),
  status: Joi.string().min(8).max(100),
  provinsi_id: Joi.number().integer(),
  kabupaten_kota_id: Joi.number().integer(),
  kecamatan_id: Joi.number().integer(),
  kelurahan_id: Joi.number().integer(),
}).or(
  'noKtp',
  'username',
  'noHp',
  'status',
  'provinsi_id',
  'kabupaten_kota_id',
  'kecamatan_id',
  'kelurahan_id'
);

export const validateAddAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = addAdminSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export const validateUpdateAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = updateAdminSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};


export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export const validateAddAnggotaSchema = (req: Request, res: Response, next: NextFunction) => {
  const { error } = addAnggotaSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};