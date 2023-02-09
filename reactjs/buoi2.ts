//Khai báo type theo kiểu generic với đối số truyền vào là các type cơ bản: string, number, boolean,…
type user = { id: number | string; name: string; age: number; gender: boolean };

const users: user[] = [
  { id: 1, name: "Khuat Thi Hoa", age: 23, gender: true },
  { id: 2, name: "Khuat Huu Quan", age: 24, gender: false },
  { id: 3, name: "Khuat Huu Thang", age: 20, gender: false },
];
console.log(users, "=>" + typeof users);
console.log("-----********------");
//Khai báo type theo kiểu generic với đối số Object

// type strArr = Array<string>;
// type numArr = Array<number>;

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
console.log(l4, "=>" + typeof l4);
console.log(l5, "=>" + typeof l5);

//make
const makeArr = <X, Y>(x: X, y: Y) => [x, y];
const m1 = makeArr(5, 3);
const m2 = makeArr(5, "Hoa");
console.log(m1, "=>" + typeof m1);
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
console.log(nameList[2], typeof nameList[2]);
console.log(userList[2], typeof userList[2]);

console.log("-----********------");

//Các func  cơ bản của mảng (filter, find, …)
//add
function add(x: number, y: number): number {
  return x + y;
}
const sum1 = add(10, 20);
console.log(sum1, typeof sum1);
//=> kq: 30 number

//tai su dung trong ham khac
function total(people: string, sum1: number): string {
  return `${people} has ${sum1} cai but`;
}
const user2 = total("Hoa", sum1);
console.log(user2);
//forEach
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}
console.log(getTotal());
console.log(getTotal(10, 20));

// type user = { id: number | string; name: string; age: number; gender: boolean };

// const users: user[] = [
//   { id: 1, name: "Khuat Thi Hoa", age: 23, gender: true },
//   { id: 2, name: "Khuat Huu Quan", age: 24, gender: false },
//   { id: 3, name: "Khuat Huu Thang", age: 20, gender: false },
// ];

const staticUser: user = {
  id: 4,
  name: "Khuat Huu Thang 1",
  age: 20,
  gender: false,
};

//every kiem tra phan tu thoa man, dung toan bo tra ve true, sai 1 phan tu tra ve false
const isEvery = users.every((e) => e.age <= 21);
console.log(isEvery); //false
//filter: loc cac phan tu theo dieu kien
const filterUser = users.filter((e) => e.id >= 2);
console.log(filterUser);
//find:
console.log("-----***find*****------");
const findUser = users.find((e) => e.id > 2);
console.log(findUser);
//findIndex
const findIndexUser = users.findIndex((e) => e.id <= 2);
console.log(findIndexUser);

//includes timf kiem chuoi trong phan tu, co tra ve true sai tra ve false
const includesUser = users.includes(users[1]);
console.log(includesUser); //true

//indexOf : ko cos tra ve -1, co tra ve chi muc so lan xuat hien dau tien cua gia tri
const indexOfUser = users.indexOf(users[1]);
console.log(indexOfUser); //1

//map
const mapUser = users
  .map((e) => e.name)
  .join("\n")
  .toUpperCase();
console.log(mapUser);
const mapUser1 = users.map((e) => e.age * 2).join("\n");
console.log(mapUser1);
// lastIndexOf vi tri xuat hien cuoi cung cua phan tu trong list
const lists = ["a", "b", "4", "h"];
const lastList = lists.lastIndexOf("h");
console.log(lastList);

//pop loai bo phan tu cuoi cung trong mang;
users.length;
users.map((e) => e);
users.pop();

console.log(users);

//push thêm phần tử vào trong mảng
users.push(staticUser);
users.push(...users);
console.log(users);
console.log(users.length);
