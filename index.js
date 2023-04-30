console.log("===== PROGRAMA INICIADO =====")

let arr = [
  {
    id: 1,
    nome: "Xandim",
    classe: "Lich"
  }
]

let arrNumber = [1, 4, 2, 6, 24, 7, 8]
/**
 * @param arr é o array inicial
 */
console.log(arr);

arr.push({ id: 2, nome: "Chili", classe: "Maguim", hp: 35 })

console.log(arr);

//============================================================
console.log(arrNumber)

function deleteOne(id) {
  let newNumberArray = arrNumber.splice(id, 1)
  return newNumberArray

}
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(1));
// Expected output: Array ["camel", "duck", "elephant"]
deleteOne(1)

// console.log(deleteOne(1))
console.log(deleteOne(1))

console.log(arrNumber)

const arrToMerge = [
  { id: 1, h1: 'Daily tests' },
  { id: 2, h1: 'Details' },
  { id: 1, h2: 'Daily classes' },
  { id: 3, h2: 'Results' },
  { id: 2, h3: 'Admissions' },
  { id: 1, h4: 'Students' },
  { id: 2, h5: 'Alumni' },
  { id: 3, h3: 'Appreciations' },
  { id: 1, h5: 'Tiny Tots' },
  { id: 1, h6: 'Extras' },
];

const clubArray = (arr) => {
  return arr.reduce((acc, val, ind) => {

    // console.log(val);
    const index = acc.findIndex(el => el.id === val.id);
    if (index !== -1) {
      const key = Object.keys(val)[1];
      console.log("---KEY---");
      console.log("KEY", key);
      acc[index][key] = val[key];
    } else {
      acc.push(val);
    };
    return acc;
  }, []);
};
console.log("CLUB ARRAY", clubArray(arrToMerge));

