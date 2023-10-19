//  ``   反引号
//  \    转义符
//  ${}  占位符

var s = 6;

let variable = "变量";  //let定义变量
const constant = "常量";//const定义常量

// 数值类型:整数，浮点数，NaN(Not a Number 非数值)

// 浮点数最高精度17位，但是运算精度不如整数  0.1 + 0.2 = 0.30000000000000004

let a = 'number';
let b = 10;
let c = a / b;
console.log(c); // NaN  出现NaN情况:  0/0  字符串乘以数字 NaN和任何数字进行运算
console.log(typeof c); // number  typeof用来判断变量类型

// 隐式转换 字符串 与 数字作非加法运算 ，隐式转换为数字

parseInt(number) //转为整数 ,向下取整
parseFloat(number) //转换为浮点数

// ==      相等，先隐式转换，在比较   9 == "9",结果为true
// ===     全等，不仅对值进行判断，而且对类型进行判断 9 == "9",结果为false
// ++/--   自增/自减


// 布尔类型:true / false 区分大小写   非空字符串、非零数字为true   空字符串、0为false

// if else 语句
// switch case default break 语句

//  数组 
let array = [];
let array1 = [1, '第一名', true];
let array2 = [1, '第一名', true, [2, '第二名', false]];

let arr1 = new Array();// 创建一个空数组并赋值
let arr2 = new Array(1, 2, 'arr');// 创建一个有内容的数组

let arr = ['张三', '李四', '王五', 'Lisa'];// 定义数组
let str = arr[2];// 定义一个变量来接收取到的值
arr[4] = 'Polly';//增加数组，在数组末尾添加值
console.log(str);// 输出取到的值

变量名.push('要添加的值');//push方法可以在数组末尾添加值
arr.push('河海大学', '大连理工大学', '哈尔滨工业大学');
arr.unshift("");//unshift方法可以在数组前面添加值
arr.shift();//shift（从前往后删除）从开始位置删除一个元素

arr.splice(param1, parma2, param3);//splice方法，param1整数类型，表示起始位置，param2,整数类型，表示步长（往后选几个元素），param3要替换的数组的值

let deleteSchools = schools.splice(1);// 删除从下标为1的位置到结束位置的值，
let deleteSchools1 = schools.splice(0, 2);// 从下标为0开始,往后数两个元素,删除.并返回删除的元素
schools.splice(2, 0, '江西理工大学');//数组元素操作——改

arr.indexOf(param)//数组元素操作——查  //未查到返回值是-1，否则返回值 非-1
let result = schools.indexOf('大连理工', 3);//第一个参数是要找的值，第二个参数是开始查询的位置


//for循环
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//for…in,访问数组中的每一项，i对应数组下标,遍历的结果是数组元素的下标
for (let i in arr) {
    console.log(arr[i]);
}
//for…of,访问数组中的每一项，item对应数组的每一项，遍历的结果是元素的值
for (let item of arr) {
    console.log(item);
}


const num1 = Math.random() * 0.9 + 0.1;// num1 的范围是 [0.1, 1)
const num2 = Math.floor(num1 * 1000);// num2 的范围是 [100, 1000)  floor向下取整


//函数  如果同一个函数被多次声明，后面的声明会覆盖前面的声明
function print(params) { }//采用function命令声明函数时，整个函数会被提升到代码头部
let print = function (params) { };//不存在函数声明提升
let print = (param) => { };//不存在函数声明提升

(function () {//当函数只使用一次，通常调用IIFE(Immediately Invokable Function Expressions)
    console.log("这个函数只执行一次");
})();//立即执行函数,因为是匿名函数


//计时器
let timerId = setTimeout(func | code, delay)//func|code函数名，代码   delay推迟时间/ms 
console.log(1);

//   第一个参数是代码，注意代码需用引号包裹，否则会立即执行代码
//   第二个参数是 1000，即 1000ms 后执行 console.log(2)
setTimeout('console.log(2)', 1000);

//   第一个参数是匿名函数
//   第二个参数是 2000，即 2s 后执行 console.log(3)
setTimeout(function () {
    console.log(3);
}, 2000);

// 第一个参数是函数名，注意函数名后不要加小括号“()”，否则会立即执行 print4
setTimeout(print4, 3000);
console.log(5);
function print4() {
    console.log(4);
}

//无限调用
let timerId1 = setTimeout(func | code, delay)//func|code函数名，代码   delay推迟时间/ms 
