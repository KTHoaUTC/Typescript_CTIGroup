//Khai báo type cho các biến: string, number, boolean, undefined, null, date =>
var myName = "Khuat Thi Hoa";
var age = 22;
var phone = null;
var gioi = true;
var addDress = undefined;
console.log("-----********------");
console.log("Ten " + myName + " Tuoi " + age + " Gioi Tinh " + gioi);
console.log("-----********------");
//khai báo biến với các type trên. dùng lệnh check type để kiểm tra
console.log(typeof myName); //kieu string
console.log(typeof age); //kieu number
console.log(typeof phone); //kieu undefined
console.log(typeof gioi); //kieu boolean
if (phone === null) {
    console.log("kieu null rong");
}
console.log("-----********------");
var id = 1;
var name1 = "Khuất Thị Hoa";
var gender = true;
var birthday = new Date(2001, 1, 5);
var profile = "id: ".concat(id, " \nTen: ").concat(name1);
console.log(profile);
console.log("Giới Tính:");
console.log(gender ? "Nữ" : "Nam");
console.log("Ngày, tháng, năm sinh: " +
    birthday.getDate() +
    "/" +
    birthday.getMonth() +
    "/" +
    birthday.getFullYear());
console.log(birthday.toDateString());
console.log("-----********------");
console.log(typeof birthday);
console.log(typeof gender);
//Khai báo type cho Object chung (chưa biết trước các trường dữ liệu)
console.log("-----********------");
var info = {
    name: "Khuất Thị Hoa",
    age: 22,
    phone: 0865169700,
    addDress: "Hà Nội",
    gender: "Nữ"
};
console.log("Ten: " +
    info.name +
    "\nTuoi: " +
    info.age +
    "\nSo Dien Thoai: " +
    info.phone +
    "\nDia chi: " +
    info.addDress +
    "\nGioi Tinh: " +
    info.gender);
console.log(typeof info);
console.log("-----********------");
var user = {
    name: "Hoa",
    birth: new Date(2001, 12, 20),
    phone: 087865756,
    cat: {
        color: "black",
        age: 5
    }
};
console.log(user.cat.color);
//Khai báo type theo kiểu generic với đối số truyền vào là các type cơ bản: string, number, boolean,…
