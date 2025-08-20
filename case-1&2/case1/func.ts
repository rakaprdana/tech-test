import { fruits } from "./data";
//soal 1
export function AndiFruit() {
  const seen = new Set<string>();
  const uniqueFruits = fruits.filter((fruit) => {
    const key = fruit.fruitName.toLowerCase();
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
  const allFruit = fruits.map((fruit) => fruit.fruitName);
  const fruitNames = uniqueFruits.map((fruit) => fruit.fruitName);
  console.log("All fruit: ", allFruit);
  console.log(fruitNames);
}

//soal 2
export function FilterStock() {
  const groupedByType = fruits.reduce((acc, fruit) => {
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = [];
    }
    acc[fruit.fruitType]!.push(fruit.fruitName);
    return acc;
  }, {} as Record<string, string[]>);

  console.log("Jumlah wadah:", Object.keys(groupedByType).length);
  console.log("Isi tiap wadah:", groupedByType);
}

//soal 3
export function Stock() {
  const stockPerType = fruits.reduce((acc, fruit) => {
    acc[fruit.fruitType] = (acc[fruit.fruitType] || 0) + fruit.stock;
    return acc;
  }, {} as Record<string, number>);

  console.log("Total stock tiap wadah:", stockPerType);
}

//soal 4
/**
 * Catatan terkait data fruits:
 * 1. Duplikasi fruitId:
 *    - Terdapat beberapa entri dengan fruitId = 5 (Jeruk Bali, KURMA, Salak).
 *    - Seharusnya setiap fruitId bersifat unik agar tidak membingungkan saat CRUD.
 *
 * 2. Inkonstistensi penulisan fruitName:
 *    - Ada "Apel" vs "apel", dan "Kurma" vs "KURMA".
 *    - Secara logika sama, tapi secara string dianggap berbeda.
 *    - Perlu normalisasi (misalnya toLowerCase atau TitleCase).
 *
 * 3. Duplikasi data buah yang sama:
 *    - Contoh: "Kurma" muncul dua kali dengan stok berbeda (20 + 20).
 *    - Hal ini bisa menyebabkan perhitungan stok tidak akurat.
 *
 * 4. Saran perbaikan:
 *    - Pastikan fruitId unik.
 *    - Normalisasi fruitName sebelum disimpan.
 *    - Gabungkan stok jika ada duplikat nama buah.
 */
