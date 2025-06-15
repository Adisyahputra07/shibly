import {
  Generated,
  ColumnType,
  Insertable,
} from "kysely";


export interface Database {
  anggota: AnggotaTable;
  admin: AdminTable;
  provinsi: ProvinsiTable;
  kabupaten_kota: KabupatenKota;
  kecamatan: KecamatanTable;
  kelurahan: KelurahanTable
}

export interface DataToken {
  id: Generated<number> | number
  username: string
  role: "admin_pusat" | "admin_provinsi" | "admin_kabupaten_kota" | "admin_kecamatan" | "admin_kelurahan"
  provinsi: string | null
  kabupaten_kota: string | null
  kecamatan: string | null
  kelurahan: string | null
}

export interface AnggotaTable {
  id: Generated<number> | number
  noKtp: string
  name: string
  noHp: string
  status: string
  provinsi_id: number
  kabupaten_kota_id: number
  kecamatan_id: number
  kelurahan_id: number
  created_at: ColumnType<Date, string | undefined, never>,
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface AdminTable {
  id: Generated<number> | number
  username: string
  password: string
  role: "admin_pusat" | "admin_provinsi" | "admin_kabupaten_kota" | "admin_kecamatan" | "admin_kelurahan"
  provinsi_id: number | null
  kabupaten_kota_id: number | null
  kecamatan_id: number | null
  kelurahan_id: number | null
  created_at: ColumnType<Date, string | undefined, never>,
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface ProvinsiTable {
  id: Generated<number> | number
  provinsi: string
  created_at: ColumnType<Date, string | undefined, never>,
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface KabupatenKota {
  id: Generated<number> | number
  kabupaten_kota: string
  provinsi_id: number
  created_at: ColumnType<Date, string | undefined, never>,
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface KecamatanTable {
  id: Generated<number> | number
  kecamatan: string
  kabupaten_kota_id: number
  created_at: ColumnType<Date, string | undefined, never>,
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface KelurahanTable {
  id: Generated<number> | number
  kelurahan: string
  kecamatan_id: number
  created_at: ColumnType<Date, string | undefined, never>,
  updated_at: ColumnType<Date, string | undefined, never>
}

export type NewAnggota = Insertable<AnggotaTable>;
export type NewAdmin = Insertable<AdminTable>;
export type NewProvinsi = Insertable<ProvinsiTable>;
export type NewKabupatenKota = Insertable<KabupatenKota>;
export type NewKecamatan = Insertable<KecamatanTable>;
export type NewKelurahan = Insertable<KelurahanTable>;