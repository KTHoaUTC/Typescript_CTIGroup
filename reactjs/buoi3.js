"use strict";
// Tìm hiểu namespace để group các type cùng loại với nhau
//để tránh xung đột về tên,có thể gộp các lớp, hàm ... vào một Namespace
//cu phap
// namespace<name>{}
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.thongbao = void 0;
var thongbao;
(function (thongbao) {
    function log(msg) {
        console.log(msg);
    }
    thongbao.log = log;
    function error(msg) {
        console.log(msg);
    }
    thongbao.error = error;
    var ClassExam = /** @class */ (function () {
        function ClassExam() {
        }
        return ClassExam;
    }());
    thongbao.ClassExam = ClassExam;
})(thongbao || (thongbao = {}));
exports.thongbao = thongbao;
//su dung: truy cap toi ham, lop phai chi ra namespace cu the
thongbao.log("Xin Chao");
thongbao.error("Loi roi! Vui long thu lai");
var classExam = new thongbao.ClassExam();
//file index.ts// truy cập các loại trong dự án của mình mà không cần phải nhập
var user1_ = {
    id: 1,
    name: "fdsad",
    salary: 2222
};
console.log(user1_);
var person = {
    name: "Hoa",
    age: 22
};
function updateFilm(film, dataUpdate) {
    return __assign(__assign({}, film), dataUpdate);
}
var Film1 = {
    title: "Doremon",
    description: "Hay",
    age: 4
};
console.log(Film1); //   "title": "organize desk",    "description": "clear clutter"
var Film2 = updateFilm(Film1, {
    description: "Te",
    age: 4
});
console.log(Film2); // "title": "organize desk", "description": "throw out trash"
var filmPick = {
    title: "batman",
    description: "khong co "
};
console.log(filmPick); //  "title": "batman", "description": "khong co "
var filmOmit = {
    title: "Pikachu",
    description: "Hay"
};
console.log(filmOmit); //"title": "Pikachu","description": "Hay"
var value = true;
console.log(typeof value); //boolean
//Required: Xây dựng một loại bao gồm tất cả các thuộc tính Typeđược đặt thành bắt buộc. Ngược lại với Partial.
var Required_Film = {
    title: "Doremon",
    description: "Hay",
    age: 4
};
console.log(Required_Film);
var return_Num = {
    x: 10,
    y: 20
};
console.log(return_Num); //x:10, y:20
function dataNum(a, b) {
    return {
        a: "".concat(a),
        b: "".concat(b)
    };
}
var Data_Return = {
    a: "Hoa",
    b: "Trang"
};
console.log(Data_Return);
var numPara = {
    x: 10,
    y: 20
};
console.log(numPara);
//Variables: bien
var name = "Hoa";
var DToan = 6;
var DVan = 7;
var sum = (DToan + DVan) / 2;
console.log("name" + name);
console.log("Điểm Toán: " + DToan);
console.log("Diem Van: " + DVan);
console.log("Tong TBM: " + sum);
//class :lop
var SanPham = /** @class */ (function () {
    function SanPham(id, tenSP, moTa) {
        this.tenSP = tenSP;
        this.id = id;
        this.moTa = moTa;
    }
    SanPham.prototype.show = function () {
        console.log(this.tenSP);
    };
    return SanPham;
}());
var sanPham1 = new SanPham(1, "Giay AF1", "Dep");
sanPham1.show();
//promiss
var promise = new Promise(function (resolve, reject) {
    resolve(123);
});
promise.then(function (res) {
    console.log("I get called:", res === 1);
});
promise["catch"](function (err) {
    console.log("Fail:", err === 2);
});
//function
function sumNum(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var result = a;
    for (var i = 0; i < b.length; i++) {
        result += b[i];
    }
    return result;
}
var result1 = sumNum(3, 5);
var result2 = sumNum(3, 5, 7, 9);
console.log(result1 + "\n" + result2);
console.log("-----****LODASH****------");
var lodash = require("lodash");
var arraySample = ["This", "is", "Lodash", "in", "Typescript"];
var firstElem = lodash.first(arraySample); //để lấy phần tử đầu tiên của mảng.
var lastElem = lodash.last(arraySample); //lấy phần tử hoặc cuối cùng của mảng.
console.log("ph\u1EA7n t\u1EED \u0111\u1EA7u ti\u00EAn trong m\u1EA3ng l\u00E0 ".concat(firstElem));
console.log("ph\u1EA7n t\u1EED cu\u1ED1i c\u00F9ng trong m\u1EA3ng l\u00E0 ".concat(lastElem));
console.log("ph\u1EA7n t\u1EED \u1EDF v\u1ECB tr\u00ED th\u1EE9 3 t\u00EDnh t\u1EEB \u0111\u1EA7u l\u00E0 ".concat(lodash.nth(arraySample, 3)));
console.log("ph\u1EA7n t\u1EED \u1EDF v\u1ECB tr\u00ED th\u1EE9 4 t\u00EDnh t\u1EEB cu\u1ED1i l\u00E0 ".concat(lodash.nth(arraySample, -2)));
var randNum = lodash.random(100); // tạo ngẫu nhiên phần tử
console.log(randNum);
var concatNum = lodash.concat([1], [2, 3, 4], [5, 6]); // nối phần tử trong mảng
console.log(concatNum); //[ 1, 2, 3, 4, 5, 6 ]
var compatNum = lodash.compact([0, 1, false, 2, "", 3]);
//để lọc ra các giá trị giả ( false, null, 0, "", undefined, và NaN).= filter
console.log(compatNum); //[ 1, 2, 3 ]
var fllatNum = lodash.flattenDepth([1, [2, [3, [4]], 5]], 3); //thu gọn thành mảng một chiều
console.log(fllatNum); //[ 1, 2, 3, 4, 5 ]
var zipOj = lodash.zipObject(["a", "b"], [1, 2]); //ghep gia tri cua tung mang vao nhau
console.log(zipOj); //{ a: 1, b: 2 }
var advNested = lodash.flatten([[1], [2, 3], [[4, 5]]]);
console.log(advNested); //[ 1, 2, 3, [ 4, 5 ] ]
var advNested2 = lodash.flatten([[1], [2, 3], [[4, 5]]], true);
console.log(advNested2); //[ 1, 2, 3, [ 4, 5 ] ]
