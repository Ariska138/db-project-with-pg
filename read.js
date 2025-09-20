import pool from './utils/db.js';

async function lihatSantri() {
  try {
    // Query SQL untuk SELECT semua data
    const res = await pool.query('SELECT * FROM santri ORDER BY id ASC');

    if (res.rows.length === 0) {
      console.log('Tidak ada data santri.');
      return;
    }

    console.log('Daftar Santri:');
    // Looping untuk menampilkan setiap baris data
    res.rows.forEach(santri => {
      console.log(`ID: ${santri.id}, Nama: ${santri.name}, Alamat: 
${santri.alamat}`);
    });

  } catch (err) {
    console.error('Gagal mengambil data santri:', err.stack);
  } finally {
    await pool.end();
  }
}

lihatSantri();