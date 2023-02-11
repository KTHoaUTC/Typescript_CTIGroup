//generic types
function getArr(items: string[]): string[] {
  return new Array().concat(items);
}
let stringArr = getArr(["Hoa", "Thang", "Quan"]);
let arrPush = stringArr.push("Hi");
console.log(stringArr);

//Generic Interface
interface TupleFunction {
  <T, U>(a: T, b: U): [T, U];
}

var getTuple: TupleFunction = (a, b) => {
  return [a, b];
};
var stringArray = getTuple<string, string>("hello", "world");
console.log(stringArray);

//
const array: number[] = [
  -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
];
function isPrime(num: number): boolean {
  for (let i: number = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// => [1, 3, 5]
//class: extends và implement
//class: extends: kế thừa
// Các lớp có thể extendtừ một lớp cơ sở.
// Một lớp dẫn xuất có tất cả các thuộc tính và phương thức của lớp cơ sở của nó,
//  đồng thời định nghĩa các thành viên bổ sung.
//cu phap
// class A {
//     a(): void
// }
// clas B extends A {
//     b(): void
// }
class ClassName {
  doPrint(): void {
    console.log("Hello");
  }
}
class ClassName1 extends ClassName {
  doPrint(): void {
    console.log("Khuat Thi Hoa");
  }
}
var obj = new ClassName();
var obj1 = new ClassName1();
obj.doPrint();
obj1.doPrint();

class Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  feed(food: string, amount: number): void {
    console.log(
      "Feeding " +
        this.name +
        " the " +
        this.constructor.name +
        " " +
        amount +
        " kg of " +
        food
    );
  }
}
class Cat extends Animal {}
class Dog extends Animal {}
const CAT = new Cat("Cosmo", 8);
const DOG = new Dog("Rusty", 12);
CAT.feed("Fish", 0.1);
DOG.feed("Beef", 0.25);

//implement: Một lớp có thể triển khai một hoặc nhiều giao diện.

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
const myRect = new Rectangle(10, 20);
console.log(myRect.getArea());

//lodash
var _ = require("lodash");

//difference: l
var numbers = [1, 2, 3, 4];
var listOfNumbers = "";

listOfNumbers = _.difference(numbers, [2]);
console.log(listOfNumbers);
//negate: được sử dụng để tạo một hàm phủ định kết quả của hàm vị từ đã cho

function Func(a: string, b: string) {
  return b + " is " + a;
}
//flip được sử dụng để tạo một hàm gọi tham số func đã cho với các đối số của nó bị đảo ngược.
var gfg = _.flip(Func);

console.log(gfg("Khuat Thi Hoa", "22 age"));
