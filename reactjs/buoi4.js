var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//generic types
function getArr(items) {
    return new Array().concat(items);
}
var stringArr = getArr(["Hoa", "Thang", "Quan"]);
var arrPush = stringArr.push("Hi");
console.log(stringArr);
var getTuple = function (a, b) {
    return [a, b];
};
var stringArray = getTuple("hello", "world");
console.log(stringArray);
//
var array = [
    -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
];
function isPrime(num) {
    for (var i = 2; num > i; i++) {
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
var ClassName = /** @class */ (function () {
    function ClassName() {
    }
    ClassName.prototype.doPrint = function () {
        console.log("Hello");
    };
    return ClassName;
}());
var ClassName1 = /** @class */ (function (_super) {
    __extends(ClassName1, _super);
    function ClassName1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassName1.prototype.doPrint = function () {
        console.log("Khuat Thi Hoa");
    };
    return ClassName1;
}(ClassName));
var obj = new ClassName();
var obj1 = new ClassName1();
obj.doPrint();
obj1.doPrint();
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.feed = function (food, amount) {
        console.log("Feeding " +
            this.name +
            " the " +
            this.constructor.name +
            " " +
            amount +
            " kg of " +
            food);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var CAT = new Cat("Cosmo", 8);
var DOG = new Dog("Rusty", 12);
CAT.feed("Fish", 0.1);
DOG.feed("Beef", 0.25);
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
//lodash
var _ = require("lodash");
//difference: l
var numbers = [1, 2, 3, 4];
var listOfNumbers = "";
listOfNumbers = _.difference(numbers, [2]);
console.log(listOfNumbers);
//negate: được sử dụng để tạo một hàm phủ định kết quả của hàm vị từ đã cho
function Func(a, b) {
    return b + " is " + a;
}
//flip được sử dụng để tạo một hàm gọi tham số func đã cho với các đối số của nó bị đảo ngược.
var gfg = _.flip(Func);
console.log(gfg("Khuat Thi Hoa", "22 age"));
