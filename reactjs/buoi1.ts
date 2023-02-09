//Khai báo type cho các biến: string, number, boolean, undefined, null, date
//=> khai báo biến với các type trên. dùng lệnh check type để kiểm tra
type Name = string;
type Age = number;
type gioiTinh = boolean;
//type diaChi = undefined;
type phoneNumber = null;

//Khai báo type cho các biến: string, number, boolean, undefined, null, date =>
const myName: Name = 'Khuat Thi Hoa';
const age: Age = 22;
const phone: phoneNumber = null;
const gioi: gioiTinh = true;
//const DiaChi: diaChi = undefined;
console.log('-----********------');
console.log('Ten ' + myName + ' Tuoi ' + age + ' Gioi Tinh ' + gioi);
console.log('-----********------');

//khai báo biến với các type trên. dùng lệnh check type để kiểm tra

console.log(typeof myName); //kieu string
console.log(typeof age); //kieu number
console.log(typeof phone); //kieu undefined
console.log(typeof gioi); //kieu boolean
if (phone === null) {
    console.log('kieu null rong');
}
console.log('-----********------');

//Khai báo type cho các Object (id, name, gender, birthday)
//=> khai báo biến với type trên, nhập dữ liệu đúng và sai => dùng lệnh check type để kiểm tra
type Id = number;
type Name1 = string;
type Gender = boolean;
//type Birthday = Date;
const id: Id = 1;
const name1: Name1 = 'Khuất Thị Hoa';
const gender: Gender = true;
const birthday = new Date(2001, 1, 5);

const profile = `id: ${id} \nTen: ${name1}`;
console.log(profile);
console.log('Giới Tính: ' + gender ? 'Nữ' : 'Nam');
console.log(
    'Ngày, tháng, năm sinh: ' +
    birthday.getDate() +
    '/' +
    birthday.getMonth() +
    '/' +
    birthday.getFullYear()
);
console.log(birthday.toDateString());
console.log('-----********------');
console.log(typeof birthday);
console.log(typeof gender);

//Khai báo type cho Object chung (chưa biết trước các trường dữ liệu)
console.log('-----********------');

const info = {
    name: 'Khuất Thị Hoa',
    age: 22,
    phone: 5597054450,
    addDress: 'Hà Nội',
    gender: 'Nữ',
};
console.log(
    'Ten: ' +
    info.name +
    '\nTuoi: ' +
    info.age +
    '\nSo Dien Thoai: ' +
    info.phone +
    '\nDia chi: ' +
    info.addDress +
    '\nGioi Tinh: ' +
    info.gender
);
console.log(typeof info);
console.log('-----********------');
//Khai báo type cho Object nested (ex: user.name.last)
type User = {
  name: string;
  birth: Date;
  phone: number;
  cat: {
    color: string;
    age: number;
  };
};
const user: User = {
    name: 'Hoa',
    birth: new Date(2001, 12, 20),
    phone: 3424234756,
    cat: {
        color: 'black',
        age: 5,
    },
};
console.log(user.cat.color);
