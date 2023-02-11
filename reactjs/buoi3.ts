// Tìm hiểu namespace để group các type cùng loại với nhau
//để tránh xung đột về tên,có thể gộp các lớp, hàm ... vào một Namespace
//cu phap
// namespace<name>{}

namespace thongbao {
  export function log(msg: string) {
    console.log(msg);
  }
  export function error(msg: string) {
    console.log(msg);
  }
  export class ClassExam {
    nameExam: string | undefined;
  }
}
//su dung: truy cap toi ham, lop phai chi ra namespace cu the
thongbao.log("Xin Chao");
thongbao.error("Loi roi! Vui long thu lai");
var classExam: thongbao.ClassExam = new thongbao.ClassExam();
export { thongbao };

//tai su dung code trong file khac
// import {thongbao} form '..../';

// Tìm hiểu về file d.ts
//Tệp .d.ts là tệp khai báo chỉ chứa thông tin loại, không tạo đầu ra .js.
//file thongbao.d.ts, định nghĩa một giao diện
// declare function thongbao2(
//     str:string
// ):string;
// export { thongbao2};
// //file thongbao.js, cài đặt giao diện
// //@type {import("./thongbao2")}
// module.exports=(str)=>[...str].reverse().join("");
// //main.js, sử dụng giao diện.
// const thongbao2= require("./thongbao2")
// console.log(thongbao2("hello"));

// Tìm hiểu về  global type
//kieu khai bao toan cau
//Tạo một global.d.ts tệp và khai báo các loại trong không gian tên chung.
declare global {
  interface Users {
    id: number;
    name: string;
    salary: number;
  }
  type Person = {
    name: string;
    age: number;
  };
}
//Biến tệp thành một mô-đun bằng cách sử dụng export {}.
export {};
//file index.ts// truy cập các loại trong dự án của mình mà không cần phải nhập
const user1_: Users = {
  id: 1,
  name: "fdsad",
  salary: 2222,
};
console.log(user1_);

const person: Person = {
  name: "Hoa",
  age: 22,
};
// Tìm hiểu về các type có sẵn (Partial, Pick, Omit, ReturnType, ParameterType,
//Partial  Nếu muốn tất cả các trường trong một đối tượng là tùy chọn
//dùng partial để cập nhật lại tập hợp con của một loại nhất định
type Film = {
  title: string;
  description: string;
  age: number;
};
function updateFilm(film: Film, dataUpdate: Partial<Film>) {
  return { ...film, ...dataUpdate };
}
const Film1 = {
  title: "Doremon",
  description: "Hay",
  age: 4,
};
console.log(Film1); //   "title": "organize desk",    "description": "clear clutter"

const Film2 = updateFilm(Film1, {
  description: "Te",
  age: 4,
});
console.log(Film2); // "title": "organize desk", "description": "throw out trash"

//Pick Sử dụng pick để tạo ra type mới từ 1 type trước đó với chỉ 1 số key cần thiết.
type PickFilm = Pick<Film, "title" | "description">;
const filmPick: PickFilm = {
  title: "batman",
  description: "khong co ",
};
console.log(filmPick); //  "title": "batman", "description": "khong co "
//Omit tạo 1 type bao gồm tất cả trừ 1 vài field từ 1 type trước đó

type OmitFilm = Omit<Film, "age">;
const filmOmit: OmitFilm = {
  title: "Pikachu",
  description: "Hay",
};
console.log(filmOmit); //"title": "Pikachu","description": "Hay"

//exclude loại bỏ các phần tử khỏi loại liên kết đã được xác định và giữ chúng ở đó khi chúng tôi cần lại.

type Primitive = string | number | boolean;

const value: Exclude<Primitive, string> = true;

console.log(typeof value); //boolean

//Required: Xây dựng một loại bao gồm tất cả các thuộc tính Typeđược đặt thành bắt buộc. Ngược lại với Partial.

const Required_Film: Required<Film> = {
  title: "Doremon",
  description: "Hay",
  age: 4,
};
console.log(Required_Film);

//ReturnType lấy ket qua trả về của một hàm và xây dựng một kiểu dựa trên nó
type NumType = () => { x: number; y: number };
const return_Num: ReturnType<NumType> = {
  x: 10,
  y: 20,
};
console.log(return_Num); //x:10, y:20

function dataNum(a: number, b: number) {
  return {
    a: `${a}`,
    b: `${b}`,
  };
}
const Data_Return: ReturnType<typeof dataNum> = {
  a: "Hoa",
  b: "Trang",
};
console.log(Data_Return);
// "a": "Hoa", "b": "Trang"

//ParameterType trích xuất các loại tham số của một loại hàm dưới dạng một mảng.
type Num_Para = (p: { x: number; y: number }) => void;
const numPara: Parameters<Num_Para>[0] = {
  x: 10,
  y: 20,
};
console.log(numPara);

//Variables: bien
var name: string = "Hoa";
var DToan: number = 6;
var DVan: number = 7;
var sum = (DToan + DVan) / 2;
console.log("name" + name);
console.log("Điểm Toán: " + DToan);
console.log("Diem Van: " + DVan);
console.log("Tong TBM: " + sum);

//class :lop

class SanPham {
  id: number;
  tenSP: string;
  moTa: string;
  constructor(id: number, tenSP: string, moTa: string) {
    this.tenSP = tenSP;
    this.id = id;
    this.moTa = moTa;
  }
  show() {
    console.log(this.tenSP);
  }
}
var sanPham1 = new SanPham(1, "Giay AF1", "Dep");
sanPham1.show();

//promiss
const promise = new Promise((resolve, reject) => {
  resolve(123);
});
promise.then((res) => {
  console.log("I get called:", res === 1);
});
promise.catch((err) => {
  console.log("Fail:", err === 2);
});

//function

function sumNum(a: number, ...b: number[]): number {
  let result = a;
  for (var i = 0; i < b.length; i++) {
    result += b[i];
  }
  return result;
}
let result1 = sumNum(3, 5);
let result2 = sumNum(3, 5, 7, 9);
console.log(result1 + "\n" + result2);

console.log("-----****LODASH****------");

const lodash = require("lodash");

let arraySample = ["This", "is", "Lodash", "in", "Typescript"];
let firstElem = lodash.first(arraySample); //để lấy phần tử đầu tiên của mảng.
let lastElem = lodash.last(arraySample); //lấy phần tử hoặc cuối cùng của mảng.
console.log(`phần tử đầu tiên trong mảng là ${firstElem}`);
console.log(`phần tử cuối cùng trong mảng là ${lastElem}`);
console.log(
  `phần tử ở vị trí thứ 3 tính từ đầu là ${lodash.nth(arraySample, 3)}`
);
console.log(
  `phần tử ở vị trí thứ 4 tính từ cuối là ${lodash.nth(arraySample, -2)}`
);

let randNum = lodash.random(100); // tạo ngẫu nhiên phần tử
console.log(randNum);

let concatNum = lodash.concat([1], [2, 3, 4], [5, 6]); // nối phần tử trong mảng
console.log(concatNum); //[ 1, 2, 3, 4, 5, 6 ]

let compatNum = lodash.compact([0, 1, false, 2, "", 3]);
//để lọc ra các giá trị giả ( false, null, 0, "", undefined, và NaN).= filter
console.log(compatNum); //[ 1, 2, 3 ]

let fllatNum = lodash.flattenDepth([1, [2, [3, [4]], 5]], 3); //thu gọn thành mảng một chiều
console.log(fllatNum); //[ 1, 2, 3, 4, 5 ]

let zipOj = lodash.zipObject(["a", "b"], [1, 2]); //ghep gia tri cua tung mang vao nhau
console.log(zipOj); //{ a: 1, b: 2 }

let advNested = lodash.flatten([[1], [2, 3], [[4, 5]]]);
console.log(advNested); //[ 1, 2, 3, [ 4, 5 ] ]
let advNested2 = lodash.flatten([[1], [2, 3], [[4, 5]]], true);
console.log(advNested2); //[ 1, 2, 3, [ 4, 5 ] ]
