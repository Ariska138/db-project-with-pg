// bikin menu

import { tambahSantri } from './create.js';
import { lihatSantri } from './read.js';

async function program() {
  await tambahSantri('hanif', 'semarang');

  await lihatSantri();
}

program();
