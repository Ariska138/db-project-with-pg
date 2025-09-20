// input.js
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Buat interface readline sekali
const rl = readline.createInterface({ input, output });

/**
 * Fungsi umum untuk meminta input dari user
 * Bisa dipakai berkali-kali:
 * const nama = await input("Nama");
 */
export async function inputData(question) {
  const answer = await rl.question(`${question}: `);
  return answer.trim();
}

/**
 * Tutup readline setelah semua input selesai
 */
export async function closeInput() {
  await rl.close();
}
