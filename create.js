import pool from './utils/db.js';

export async function tambahSantri(namaSantri = 'ibrahim', alamatSantri = 'banyumas') {
  try {

    const queryText = `insert into santri(name, alamat) values($1, $2) returning *`;
    const res = await pool.query(queryText, [namaSantri, alamatSantri]);

    console.log('res: ', res);
    console.log('Santri baru berhasil ditambahkan!');
    console.log(res.rows[0]);
  } catch (err) {
    console.error('Gagal menambahkan santri', err.stack);
  } finally {
    // await pool.end();
  }
}


