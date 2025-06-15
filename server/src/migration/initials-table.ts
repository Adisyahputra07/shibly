import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('provinsi')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('provinsi', 'varchar', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute()

  await db.schema
    .createTable('kabupaten_kota')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('kabupaten_kota', 'varchar', (col) => col.notNull())
    .addColumn('provinsi_id', 'integer', (col) =>
      col.notNull().references('provinsi.id'),
    )
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute()

  await db.schema
    .createTable('kecamatan')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('kecamatan', 'varchar', (col) => col.notNull())
    .addColumn('kabupaten_kota_id', 'integer', (col) =>
      col.notNull().references('kabupaten_kota.id'),
    )
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute()


  await db.schema
    .createTable('kelurahan')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('kelurahan', 'varchar', (col) => col.notNull())
    .addColumn('kecamatan_id', 'integer', (col) =>
      col.notNull().references('kecamatan.id'),
    )
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute()

  await db.schema
    .createTable('admin')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('username', 'varchar', (col) => col.notNull())
    .addColumn('password', 'varchar', (col) => col.notNull())
    .addColumn('role', 'varchar', (col) => col.notNull())
    .addColumn('provinsi_id', 'integer', (col) =>
      col.references('provinsi.id'),
    )
    .addColumn('kabupaten_kota_id', 'integer', (col) =>
      col.references('kabupaten_kota.id'),
    )
    .addColumn('kecamatan_id', 'integer', (col) =>
      col.references('kecamatan.id'),
    )
    .addColumn('kelurahan_id', 'integer', (col) =>
      col.references('kelurahan.id'),
    )
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute()
  

  await db.schema
    .createTable('anggota')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('noKtp', 'varchar', (col) => col.notNull())
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('noHp', 'varchar', (col) => col.notNull())
    .addColumn('status', 'varchar', (col) => col.notNull())
    .addColumn('provinsi_id', 'integer', (col) =>
      col.notNull().references('provinsi.id'),
    )
    .addColumn('kabupaten_kota_id', 'integer', (col) =>
      col.notNull().references('kabupaten_kota.id'),
    )
    .addColumn('kecamatan_id', 'integer', (col) =>
      col.notNull().references('kecamatan.id'),
    )
    .addColumn('kelurahan_id', 'integer', (col) =>
      col.notNull().references('kelurahan.id'),
    )
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute()
  
  console.log('✅ Migration Success')
}


export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('user').execute()
  await db.schema.dropTable('admin').execute()
  await db.schema.dropTable('provinsi').execute()
  await db.schema.dropTable('kabupaten_kota').execute()
  await db.schema.dropTable('kecamatan').execute()
  await db.schema.dropTable('kelurahan').execute()
}