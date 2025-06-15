// seed.ts

import { database } from "../database/postgres";

async function seed() {
  // Provinsi
  await database.insertInto('provinsi').values([
    { id: 1, provinsi: 'DKI Jakarta' },
    { id: 2, provinsi: 'Jawa Barat' },
    { id: 3, provinsi: 'Jawa Tengah' },
    { id: 4, provinsi: 'Jawa Timur' },
    { id: 5, provinsi: 'Banten' },
  ]).execute();

  // Kabupaten Kota
  await database.insertInto('kabupaten_kota').values([
    { "id": 101, "provinsi_id": 1, "kabupaten_kota": "Kota Jakarta Pusat" },
    { "id": 102, "provinsi_id": 1, "kabupaten_kota": "Kota Jakarta Utara" },
    { "id": 103, "provinsi_id": 1, "kabupaten_kota": "Kota Jakarta Barat" },
    { "id": 104, "provinsi_id": 1, "kabupaten_kota": "Kota Jakarta Selatan" },
    { "id": 105, "provinsi_id": 1, "kabupaten_kota": "Kota Jakarta Timur" },

    { "id": 201, "provinsi_id": 2, "kabupaten_kota": "Kota Bandung" },
    { "id": 202, "provinsi_id": 2, "kabupaten_kota": "Kota Bogor" },
    { "id": 203, "provinsi_id": 2, "kabupaten_kota": "Kota Depok" },
    { "id": 204, "provinsi_id": 2, "kabupaten_kota": "Kabupaten Bekasi" },
    { "id": 205, "provinsi_id": 2, "kabupaten_kota": "Kabupaten Bandung Barat" },

    { "id": 301, "provinsi_id": 3, "kabupaten_kota": "Kota Semarang" },
    { "id": 302, "provinsi_id": 3, "kabupaten_kota": "Kota Surakarta" },
    { "id": 303, "provinsi_id": 3, "kabupaten_kota": "Kabupaten Banyumas" },
    { "id": 304, "provinsi_id": 3, "kabupaten_kota": "Kabupaten Demak" },
    { "id": 305, "provinsi_id": 3, "kabupaten_kota": "Kabupaten Kendal" },

    { "id": 401, "provinsi_id": 4, "kabupaten_kota": "Kota Surabaya" },
    { "id": 402, "provinsi_id": 4, "kabupaten_kota": "Kota Malang" },
    { "id": 403, "provinsi_id": 4, "kabupaten_kota": "Kabupaten Sidoarjo" },
    { "id": 404, "provinsi_id": 4, "kabupaten_kota": "Kabupaten Gresik" },
    { "id": 405, "provinsi_id": 4, "kabupaten_kota": "Kabupaten Lamongan" },

    { "id": 501, "provinsi_id": 5, "kabupaten_kota": "Kota Tangerang" },
    { "id": 502, "provinsi_id": 5, "kabupaten_kota": "Kota Serang" },
    { "id": 503, "provinsi_id": 5, "kabupaten_kota": "Kabupaten Tangerang" },
    { "id": 504, "provinsi_id": 5, "kabupaten_kota": "Kabupaten Lebak" },
    { "id": 505, "provinsi_id": 5, "kabupaten_kota": "Kabupaten Pandeglang" }
  ]).execute();

  // Kecamatan
  await database.insertInto('kecamatan').values([
    { "id": 10101, "kabupaten_kota_id": 101, "kecamatan": "Kecamatan Menteng" },
    { "id": 10102, "kabupaten_kota_id": 101, "kecamatan": "Kecamatan Tanah Abang" },
    { "id": 10103, "kabupaten_kota_id": 101, "kecamatan": "Kecamatan Gambir" },
    { "id": 10104, "kabupaten_kota_id": 101, "kecamatan": "Kecamatan Sawah Besar" },
    { "id": 10105, "kabupaten_kota_id": 101, "kecamatan": "Kecamatan Senen" },

    { "id": 10201, "kabupaten_kota_id": 102, "kecamatan": "Kecamatan Cilincing" },
    { "id": 10202, "kabupaten_kota_id": 102, "kecamatan": "Kecamatan Koja" },
    { "id": 10203, "kabupaten_kota_id": 102, "kecamatan": "Kecamatan Kelapa Gading" },
    { "id": 10204, "kabupaten_kota_id": 102, "kecamatan": "Kecamatan Tanjung Priok" },
    { "id": 10205, "kabupaten_kota_id": 102, "kecamatan": "Kecamatan Pademangan" },

    { "id": 10301, "kabupaten_kota_id": 103, "kecamatan": "Kecamatan Grogol Petamburan" },
    { "id": 10302, "kabupaten_kota_id": 103, "kecamatan": "Kecamatan Kalideres" },
    { "id": 10303, "kabupaten_kota_id": 103, "kecamatan": "Kecamatan Palmerah" },
    { "id": 10304, "kabupaten_kota_id": 103, "kecamatan": "Kecamatan Kebon Jeruk" },
    { "id": 10305, "kabupaten_kota_id": 103, "kecamatan": "Kecamatan Kembangan" },
    
    { "id": 10401, "kabupaten_kota_id": 104, "kecamatan": "Kecamatan Cilandak" },
    { "id": 10402, "kabupaten_kota_id": 104, "kecamatan": "Kecamatan Kebayoran Baru" },
    { "id": 10403, "kabupaten_kota_id": 104, "kecamatan": "Kecamatan Pasar Minggu" },
    { "id": 10404, "kabupaten_kota_id": 104, "kecamatan": "Kecamatan Jagakarsa" },
    { "id": 10405, "kabupaten_kota_id": 104, "kecamatan": "Kecamatan Tebet" },

    { "id": 10501, "kabupaten_kota_id": 105, "kecamatan": "Kecamatan Jatinegara" },
    { "id": 10502, "kabupaten_kota_id": 105, "kecamatan": "Kecamatan Duren Sawit" },
    { "id": 10503, "kabupaten_kota_id": 105, "kecamatan": "Kecamatan Ciracas" },
    { "id": 10504, "kabupaten_kota_id": 105, "kecamatan": "Kecamatan Kramat Jati" },
    { "id": 10505, "kabupaten_kota_id": 105, "kecamatan": "Kecamatan Makasar" },

    { "id": 20101, "kabupaten_kota_id": 201, "kecamatan": "Kecamatan Sukajadi" },
    { "id": 20102, "kabupaten_kota_id": 201, "kecamatan": "Kecamatan Antapani" },
    { "id": 20103, "kabupaten_kota_id": 201, "kecamatan": "Kecamatan Cibeunying Kidul" },
    { "id": 20104, "kabupaten_kota_id": 201, "kecamatan": "Kecamatan Coblong" },
    { "id": 20105, "kabupaten_kota_id": 201, "kecamatan": "Kecamatan Arcamanik" },

    { "id": 20201, "kabupaten_kota_id": 202, "kecamatan": "Kecamatan Tanah Sareal" },
    { "id": 20202, "kabupaten_kota_id": 202, "kecamatan": "Kecamatan Bogor Barat" },
    { "id": 20203, "kabupaten_kota_id": 202, "kecamatan": "Kecamatan Bogor Timur" },
    { "id": 20204, "kabupaten_kota_id": 202, "kecamatan": "Kecamatan Bogor Utara" },
    { "id": 20205, "kabupaten_kota_id": 202, "kecamatan": "Kecamatan Bogor Selatan" },

    { "id": 30101, "kabupaten_kota_id": 301, "kecamatan": "Kecamatan Semarang Tengah" },
    { "id": 30102, "kabupaten_kota_id": 301, "kecamatan": "Kecamatan Semarang Barat" },
    { "id": 30103, "kabupaten_kota_id": 301, "kecamatan": "Kecamatan Semarang Timur" },
    { "id": 30104, "kabupaten_kota_id": 301, "kecamatan": "Kecamatan Semarang Selatan" },
    { "id": 30105, "kabupaten_kota_id": 301, "kecamatan": "Kecamatan Gajahmungkur" },

    { "id": 40101, "kabupaten_kota_id": 401, "kecamatan": "Kecamatan Genteng" },
    { "id": 40102, "kabupaten_kota_id": 401, "kecamatan": "Kecamatan Gubeng" },
    { "id": 40103, "kabupaten_kota_id": 401, "kecamatan": "Kecamatan Sukolilo" },
    { "id": 40104, "kabupaten_kota_id": 401, "kecamatan": "Kecamatan Tambaksari" },
    { "id": 40105, "kabupaten_kota_id": 401, "kecamatan": "Kecamatan Wiyung" },

    { "id": 50101, "kabupaten_kota_id": 501, "kecamatan": "Kecamatan Tangerang" },
    { "id": 50102, "kabupaten_kota_id": 501, "kecamatan": "Kecamatan Batuceper" },
    { "id": 50103, "kabupaten_kota_id": 501, "kecamatan": "Kecamatan Benda" },
    { "id": 50104, "kabupaten_kota_id": 501, "kecamatan": "Kecamatan Cibodas" },
    { "id": 50105, "kabupaten_kota_id": 501, "kecamatan": "Kecamatan Jatiuwung" }
  ]).execute();

  // Kelurahan
  await database.insertInto('kelurahan').values([
    { "id": 1010101, "kecamatan_id": 10101, "kelurahan": "Kelurahan Menteng" },
    { "id": 1010102, "kecamatan_id": 10101, "kelurahan": "Kelurahan Pegangsaan" },
    { "id": 1010103, "kecamatan_id": 10101, "kelurahan": "Kelurahan Cikini" },
    { "id": 1010104, "kecamatan_id": 10101, "kelurahan": "Kelurahan Gondangdia" },
    { "id": 1010105, "kecamatan_id": 10101, "kelurahan": "Kelurahan Kebon Sirih" },

    { "id": 1010201, "kecamatan_id": 10102, "kelurahan": "Kelurahan Kebon Melati" },
    { "id": 1010202, "kecamatan_id": 10102, "kelurahan": "Kelurahan Kebon Kacang" },
    { "id": 1010203, "kecamatan_id": 10102, "kelurahan": "Kelurahan Petamburan" },
    { "id": 1010204, "kecamatan_id": 10102, "kelurahan": "Kelurahan Karet Tengsin" },
    { "id": 1010205, "kecamatan_id": 10102, "kelurahan": "Kelurahan Bendungan Hilir" },

    { "id": 1050101, "kecamatan_id": 10501, "kelurahan": "Kelurahan Bali Mester" },
    { "id": 1050102, "kecamatan_id": 10501, "kelurahan": "Kelurahan Kampung Melayu" },
    { "id": 1050103, "kecamatan_id": 10501, "kelurahan": "Kelurahan Bidara Cina" },
    { "id": 1050104, "kecamatan_id": 10501, "kelurahan": "Kelurahan Cipinang Cempedak" },
    { "id": 1050105, "kecamatan_id": 10501, "kelurahan": "Kelurahan Rawa Bunga" },

    { "id": 2010101, "kecamatan_id": 20101, "kelurahan": "Kelurahan Pasteur" },
    { "id": 2010102, "kecamatan_id": 20101, "kelurahan": "Kelurahan Sukabungah" },
    { "id": 2010103, "kecamatan_id": 20101, "kelurahan": "Kelurahan Sukagalih" },
    { "id": 2010104, "kecamatan_id": 20101, "kelurahan": "Kelurahan Sukamaju" },
    { "id": 2010105, "kecamatan_id": 20101, "kelurahan": "Kelurahan Cipedes" },

    { "id": 2020101, "kecamatan_id": 20201, "kelurahan": "Kelurahan Kedung Badak" },
    { "id": 2020102, "kecamatan_id": 20201, "kelurahan": "Kelurahan Sukaresmi" },
    { "id": 2020103, "kecamatan_id": 20201, "kelurahan": "Kelurahan Kedung Halang" },
    { "id": 2020104, "kecamatan_id": 20201, "kelurahan": "Kelurahan Kayumanis" },
    { "id": 2020105, "kecamatan_id": 20201, "kelurahan": "Kelurahan Cibadak" },

    { "id": 3010101, "kecamatan_id": 30101, "kelurahan": "Kelurahan Lamper Kidul" },
    { "id": 3010102, "kecamatan_id": 30101, "kelurahan": "Kelurahan Pleburan" },
    { "id": 3010103, "kecamatan_id": 30101, "kelurahan": "Kelurahan Randusari" },
    { "id": 3010104, "kecamatan_id": 30101, "kelurahan": "Kelurahan Bulusan" },
    { "id": 3010105, "kecamatan_id": 30101, "kelurahan": "Kelurahan Sendangmulyo" },

    { "id": 4010101, "kecamatan_id": 40101, "kelurahan": "Kelurahan Pucang Sewu" },
    { "id": 4010102, "kecamatan_id": 40101, "kelurahan": "Kelurahan Darmo" },
    { "id": 4010103, "kecamatan_id": 40101, "kelurahan": "Kelurahan Wonokromo" },
    { "id": 4010104, "kecamatan_id": 40101, "kelurahan": "Kelurahan Jagir" },
    { "id": 4010105, "kecamatan_id": 40101, "kelurahan": "Kelurahan Ngagel" },

    { "id": 5010101, "kecamatan_id": 50101, "kelurahan": "Kelurahan Cimone" },
    { "id": 5010102, "kecamatan_id": 50101, "kelurahan": "Kelurahan Karawaci" },
    { "id": 5010103, "kecamatan_id": 50101, "kelurahan": "Kelurahan Cibodas" },
    { "id": 5010104, "kecamatan_id": 50101, "kelurahan": "Kelurahan Jati Uwung" },
    { "id": 5010105, "kecamatan_id": 50101, "kelurahan": "Kelurahan Periuk" }
  ]).execute();

  await database
    .insertInto('admin')
    .values([
    {
      "username": "adminpusat",
      "password": "$2b$10$EK3fuKz6tb/IDBe8ashXoeCFlVAUh33m.jtC1vbtQwVuma0NpCdm2",
      "role": "admin_pusat",
      "provinsi_id": null,
      "kabupaten_kota_id": null,
      "kecamatan_id": null,
      "kelurahan_id": null
    },
    {
      "username": "adminprovdki",
      "password": "$2b$10$EK3fuKz6tb/IDBe8ashXoeCFlVAUh33m.jtC1vbtQwVuma0NpCdm2",
      "role": "admin_provinsi",
      "provinsi_id": 1,
      "kabupaten_kota_id": null,
      "kecamatan_id": null,
      "kelurahan_id": null
    },
    {
      "username": "adminprovjabar",
      "password": "$2b$10$EK3fuKz6tb/IDBe8ashXoeCFlVAUh33m.jtC1vbtQwVuma0NpCdm2",
      "role": "admin_provinsi",
      "provinsi_id": 2,
      "kabupaten_kota_id": null,
      "kecamatan_id": null,
      "kelurahan_id": null
    },
    {
      "username": "adminprovjateng",
      "password": "$2b$10$EK3fuKz6tb/IDBe8ashXoeCFlVAUh33m.jtC1vbtQwVuma0NpCdm2",
      "role": "admin_provinsi",
      "provinsi_id": 3,
      "kabupaten_kota_id": null,
      "kecamatan_id": null,
      "kelurahan_id": null
    },
    {
      "username": "adminprovjatim",
      "password": "$2b$10$EK3fuKz6tb/IDBe8ashXoeCFlVAUh33m.jtC1vbtQwVuma0NpCdm2",
      "role": "admin_provinsi",
      "provinsi_id": 4,
      "kabupaten_kota_id": null,
      "kecamatan_id": null,
      "kelurahan_id": null
    },
    {
      "username": "adminprovbanten",
      "password": "$2b$10$EK3fuKz6tb/IDBe8ashXoeCFlVAUh33m.jtC1vbtQwVuma0NpCdm2",
      "role": "admin_provinsi",
      "provinsi_id": 5,
      "kabupaten_kota_id": null,
      "kecamatan_id": null,
      "kelurahan_id": null
    },
    {
      "username": "adminkabjakpus",
      "password": "$2b$10$EK3fuKz6tb/IDBe8ashXoeCFlVAUh33m.jtC1vbtQwVuma0NpCdm2",
      "role": "admin_kabupaten_kota",
      "provinsi_id": 1,
      "kabupaten_kota_id": 101,
      "kecamatan_id": null,
      "kelurahan_id": null
    },
    {
      "username": "adminkabbandung",
      "password": "$2b$10$EK3fuKz6tb/IDBe8ashXoeCFlVAUh33m.jtC1vbtQwVuma0NpCdm2",
      "role": "admin_kabupaten_kota",
      "provinsi_id": 2,
      "kabupaten_kota_id": 201,
      "kecamatan_id": null,
      "kelurahan_id": null
    },
    {
      "username": "adminkecmenteng",
      "password": "$2b$10$EK3fuKz6tb/IDBe8ashXoeCFlVAUh33m.jtC1vbtQwVuma0NpCdm2",
      "role": "admin_kecamatan",
      "provinsi_id": 1,
      "kabupaten_kota_id": 101,
      "kecamatan_id": 10101,
      "kelurahan_id": null
    },
    {
      "username": "adminkecsukajadi",
      "password": "$2b$10$EK3fuKz6tb/IDBe8ashXoeCFlVAUh33m.jtC1vbtQwVuma0NpCdm2",
      "role": "admin_kecamatan",
      "provinsi_id": 2,
      "kabupaten_kota_id": 201,
      "kecamatan_id": 20101,
      "kelurahan_id": null
    },
    {
      "username": "adminkelmenteng",
      "password": "$2b$10$EK3fuKz6tb/IDBe8ashXoeCFlVAUh33m.jtC1vbtQwVuma0NpCdm2",
      "role": "admin_kelurahan",
      "provinsi_id": 1,
      "kabupaten_kota_id": 101,
      "kecamatan_id": 10101,
      "kelurahan_id": 1010101
    },
    {
      "username": "adminkelpasteur",
      "password": "$2b$10$EK3fuKz6tb/IDBe8ashXoeCFlVAUh33m.jtC1vbtQwVuma0NpCdm2",
      "role": "admin_kelurahan",
      "provinsi_id": 2,
      "kabupaten_kota_id": 201,
      "kecamatan_id": 20101,
      "kelurahan_id": 2010101
    }
  ])
    .execute();

  await database
    .insertInto('anggota')
    .values([
    {
      "noKtp": "3171010000000001",
      "name": "Aditya Pratama",
      "noHp": "081234567891",
      "provinsi_id": 1,
      "kabupaten_kota_id": 101,
      "kecamatan_id": 10101,
      "kelurahan_id": 1010101,
      "status": "aktif"
    },
    {
      "noKtp": "3171010000000002",
      "name": "Bella Cahyani",
      "noHp": "081234567892",
      "provinsi_id": 1,
      "kabupaten_kota_id": 101,
      "kecamatan_id": 10101,
      "kelurahan_id": 1010101,
      "status": "non-aktif"
    },
    {
      "noKtp": "3171010000000003",
      "name": "Candra Wijaya",
      "noHp": "081234567893",
      "provinsi_id": 1,
      "kabupaten_kota_id": 101,
      "kecamatan_id": 10101,
      "kelurahan_id": 1010102,
      "status": "aktif"
    },
    {
      "noKtp": "3171010000000004",
      "name": "Dewi Fortuna",
      "noHp": "081234567894",
      "provinsi_id": 1,
      "kabupaten_kota_id": 101,
      "kecamatan_id": 10101,
      "kelurahan_id": 1010103,
      "status": "aktif"
    },
    {
      "noKtp": "3171010000000005",
      "name": "Eko Susanto",
      "noHp": "081234567895",
      "provinsi_id": 1,
      "kabupaten_kota_id": 101,
      "kecamatan_id": 10101,
      "kelurahan_id": 1010104,
      "status": "non-aktif"
    },
    {
      "noKtp": "3171010000000006",
      "name": "Fika Andriani",
      "noHp": "081234567896",
      "provinsi_id": 1,
      "kabupaten_kota_id": 101,
      "kecamatan_id": 10101,
      "kelurahan_id": 1010105,
      "status": "aktif"
    },
    {
      "noKtp": "3273010000000008",
      "name": "Hana Safira",
      "noHp": "081234567898",
      "provinsi_id": 2,
      "kabupaten_kota_id": 201,
      "kecamatan_id": 20101,
      "kelurahan_id": 2010101,
      "status": "aktif"
    },
    {
      "noKtp": "3371010000000009",
      "name": "Indra Wijaya",
      "noHp": "081234567899",
      "provinsi_id": 3,
      "kabupaten_kota_id": 301,
      "kecamatan_id": 30101,
      "kelurahan_id": 3010101,
      "status": "aktif"
    }
  ])
    .execute();
    
  console.log('✅ Seeding selesai!');
  process.exit();
}

seed().catch((err) => {
  console.error('❌ Seeding gagal:', err);
  process.exit(1);
});
