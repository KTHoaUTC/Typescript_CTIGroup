//Khai báo type theo kiểu generic với đối số truyền vào là các type cơ bản: string, number, boolean,…
type user = { name: string; age: number; gender: boolean };

const users: user[] = [
  { name: "Khuat Thi Hoa", age: 23, gender: true },
  { name: "Khuat Huu Quan", age: 24, gender: false },
  { name: "Khuat Huu Thang", age: 20, gender: false },
];
console.log(users, "=>" + typeof users);
console.log("-----********------");
//Khai báo type theo kiểu generic với đối số Object

type strArr = Array<string>;
type numArr = Array<number>;

const lastNum = (arr: Array<number>) => arr[arr.length - 1];
const lastStr = (arr: Array<string>) => arr[arr.length - 1];

const l1 = lastNum([1, 3, 5, 6, 7]);
const l2 = lastStr(["Hoa", "Huy", "Quan", "Thang"]);

console.log(l1, "Kieu " + typeof l1);
console.log(l2, "Kieu " + typeof l2);
console.log("-----********------");

//Tuple
//khong biet truoc kieu du lieu truyen vao: any
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([2, 5, 6, 3]);
const l4 = lastT(["Hoa", "Huy", "Quan", "Thang"]);
const l5 = lastT<boolean>([true, false, true]);

console.log(l3, "=>" + typeof l3);

//make
const makeArr = <X, Y>(x: X, y: Y) => [x, y];
const m1 = makeArr(5, 3);
const m2 = makeArr(5, "Hoa");
console.log(m2, "=>" + typeof m2);

//makeTuple
const makeT = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m3 = makeT("Hoa", 22);
console.log(m3, "=> " + typeof m3);

//Khai báo type cho mảng (mảng số, chữ, mảng object, …)
type student = {
  id: number;
  yourName: string;
  gender: boolean;
};
const numList: Array<number> = [1, 2, 3, 4];
const nameList: Array<string> = ["Hoa", "Hi"];
const userList: Array<student> = [
  { id: 1, yourName: "Hoa", gender: true },
  { id: 2, yourName: "Huy", gender: false },
];
console.log(numList[1], typeof numList[1]);

console.log("-----********------");

//Các func  cơ bản của mảng (filter, find, …)
//add
function add(x: number, y: number): number {
  return x + y;
}
let sum1 = add(10, 20);
console.log(sum1, typeof sum1);

//tai su dung trong ham khac
