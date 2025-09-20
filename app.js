// bikin menu

import { tambahSantri } from './create.js';
import { lihatSantri } from './read.js';
import pool from './utils/db.js';
import { closeInput, inputData } from './utils/input.js';

async function program() {
  const name = await inputData('masukkan nama: ');
  const alamat = await inputData('masukkan almat: ');

  await tambahSantri(name, alamat);

  await lihatSantri();

  closeInput();
  pool.end();
}

program();
