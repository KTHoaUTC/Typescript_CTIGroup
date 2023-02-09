var users = [
    { id: 1, name: "Khuat Thi Hoa", age: 23, gender: true },
    { id: 2, name: "Khuat Huu Quan", age: 24, gender: false },
    { id: 3, name: "Khuat Huu Thang", age: 20, gender: false },
];
console.log(users, "=>" + typeof users);
console.log("-----********------");
//Khai báo type theo kiểu generic với đối số Object
// type strArr = Array<string>;
// type numArr = Array<number>;
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
console.log(l4, "=>" + typeof l4);
console.log(l5, "=>" + typeof l5);
//make
var makeArr = function (x, y) { return [x, y]; };
var m1 = makeArr(5, 3);
var m2 = makeArr(5, "Hoa");
console.log(m1, "=>" + typeof m1);
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
console.log(nameList[2], typeof nameList[2]);
console.log(userList[2], typeof userList[2]);
console.log("-----********------");
//Các func  cơ bản của mảng (filter, find, …)
//add
function add(x, y) {
    return x + y;
}
var sum1 = add(10, 20);
console.log(sum1, typeof sum1);
//=> kq: 30 number
//tai su dung trong ham khac
function total(people, sum1) {
    return "".concat(people, " has ").concat(sum1, " cai but");
}
var user2 = total("Hoa", sum1);
console.log(user2);
//forEach
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return (total += num); });
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
var staticUser = {
    id: 4,
    name: "Khuat Huu Thang 1",
    age: 20,
    gender: false
};
//every kiem tra phan tu thoa man, dung toan bo tra ve true, sai 1 phan tu tra ve false
var isEvery = users.every(function (e) { return e.age <= 21; });
console.log(isEvery); //false
//filter: loc cac phan tu theo dieu kien
var filterUser = users.filter(function (e) { return e.id >= 2; });
console.log(filterUser);
//find:
console.log("-----***find*****------");
var findUser = users.find(function (e) { return e.id > 2; });
console.log(findUser);
//findIndex
var findIndexUser = users.findIndex(function (e) { return e.id <= 2; });
console.log(findIndexUser);
//includes timf kiem chuoi trong phan tu, co tra ve true sai tra ve false
var includesUser = users.includes(users[1]);
console.log(includesUser); //true
//indexOf : ko cos tra ve -1, co tra ve chi muc so lan xuat hien dau tien cua gia tri
var indexOfUser = users.indexOf(users[1]);
console.log(indexOfUser); //1
//map
var mapUser = users
    .map(function (e) { return e.name; })
    .join("\n")
    .toUpperCase();
console.log(mapUser);
var mapUser1 = users.map(function (e) { return e.age * 2; }).join("\n");
console.log(mapUser1);
// lastIndexOf vi tri xuat hien cuoi cung cua phan tu trong list
var lists = ["a", "b", "4", "h"];
var lastList = lists.lastIndexOf("h");
console.log(lastList);
//pop loai bo phan tu cuoi cung trong mang;
users.length;
users.map(function (e) { return e; });
users.pop();
console.log(users);
//push
users.push(staticUser);
users.push.apply(users, users);
console.log(users);
console.log(users.length);
