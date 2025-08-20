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
