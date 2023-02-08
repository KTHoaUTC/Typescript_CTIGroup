var users = [
    { name: "Khuat Thi Hoa", age: 23, gender: true },
    { name: "Khuat Huu Quan", age: 24, gender: false },
    { name: "Khuat Huu Thang", age: 20, gender: false },
];
console.log(users, "=>" + typeof users);
console.log("-----********------");
var lastNum = function (arr) { return arr[arr.length - 1]; };
var lastStr = function (arr) { return arr[arr.length - 1]; };
var l1 = lastNum([1, 3, 5, 6, 7]);
var l2 = lastStr(["Hoa", "Huy", "Quan", "Thang"]);
console.log(l1, "Kieu " + typeof l1);
console.log(l2, "Kieu " + typeof l2);
console.log("-----********------");
//Tuple
//khong biet truoc kieu du lieu truyen vao: any
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([2, 5, 6, 3]);
var l4 = lastT(["Hoa", "Huy", "Quan", "Thang"]);
var l5 = lastT([true, false, true]);
console.log(l3, "=>" + typeof l3);
//make
var makeArr = function (x, y) { return [x, y]; };
var m1 = makeArr(5, 3);
var m2 = makeArr(5, "Hoa");
console.log(m2, "=>" + typeof m2);
//makeTuple
var makeT = function (x, y) { return [x, y]; };
var m3 = makeT("Hoa", 22);
console.log(m3, "=> " + typeof m3);
var numList = [1, 2, 3, 4];
var nameList = ["Hoa", "Hi"];
var userList = [
    { id: 1, yourName: "Hoa", gender: true },
    { id: 2, yourName: "Huy", gender: false },
];
console.log(numList[1], typeof numList[1]);
console.log("-----********------");
//Các func  cơ bản của mảng (filter, find, …)
//add
function add(x, y) {
    return x + y;
}
var sum1 = add(10, 20);
console.log(sum1, typeof sum1);
