·  \`\`   反引号  
·  \\    转义符  
·  ${}  占位符  

·  let variable = "变量";  //let定义变量  
·  const constant = "常量";//const定义常量   

· 数值类型:整数，浮点数，NaN(Not a Number 非数值)   

· 浮点数最高精度17位，但是运算精度不如整数  0.1 + 0.2 = 0.30000000000000004    

· let a = 'number';   
· let b = 10;   
· let c = a / b;   
· console.log(c); // NaN  出现NaN情况:  0/0  字符串乘以数字 NaN和任何数字进行运算   
· console.log(typeof c); // number  typeof用来判断变量类型   

· `隐式转换` 字符串 与 数字作非加法运算 ，隐式转换为数字   

· parseInt(number) //转为整数 ,向下取整  
· parseFloat(number) //转换为浮点数   

·  ==      相等，先隐式转换，在比较   9 == "9",结果为true    
·  ===     全等，不仅对值进行判断，而且对类型进行判断 9 == "9",结果为false    
·  ++/--   自增/自减    


· 布尔类型:true / false 区分大小写   非空字符串、非零数字为true   空字符串、0为false    

· if else 语句    
· switch case default break 语句    

·  `数组 `    
· let array = [];     
· let array1 = [1, '第一名', true];     
· let array2 = [1, '第一名', true, [2, '第二名', false]];     

· let arr1 = new Array();// 创建一个空数组并赋值     
· let arr2 = new Array(1, 2, 'arr');// 创建一个有内容的数组     

· let arr = ['张三', '李四', '王五', 'Lisa'];// 定义数组     
· let str = arr[2];// 定义一个变量来接收取到的值     
· arr[4] = 'Polly';//增加数组，在数组末尾添加值    
· console.log(str);// 输出取到的值    

· 变量名.push('要添加的值');//push方法可以在数组末尾添加值    
· arr.push('河海大学', '大连理工大学', '哈尔滨工业大学');    
· arr.unshift("");//unshift方法可以在数组前面添加值    
· arr.shift();//shift（从前往后删除）从开始位置删除一个元素    

· arr.splice(param1, parma2, param3);//splice方法，param1整数类型，表示起始位置，param2,整数类型，表示步长（往后选几个元素），param3要替换的数组的值    

· let deleteSchools = schools.splice(1);// 删除从下标为1的位置到结束位置的值，    
· let deleteSchools1 = schools.splice(0, 2);// 从下标为0开始,往后数两个元素,删除.并返回删除的元素    
· schools.splice(2, 0, '江西理工大学');//数组元素操作——改    

· arr.indexOf(param)//数组元素操作——查  //未查到返回值是-1，否则返回值 非-1    
· let result = schools.indexOf('大连理工', 3);//第一个参数是要找的值，第二个参数是开始查询的位置    


· `for循环`
```
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
```


· const num1 = Math.random() * 0.9 + 0.1;// num1 的范围是 [0.1, 1)    
· const num2 = Math.floor(num1 * 1000);// num2 的范围是 [100, 1000)  floor向下取整    


· `函数`：  如果同一个函数被多次声明，后面的声明会覆盖前面的声明    
```
    function print(params) { }//采用function命令声明函数时，整个函数会被提升到代码头部
    let print = function (params) { };//不存在函数声明提升
    let print = (param) => { };//不存在函数声明提升
    
    (function () {//当函数只使用一次，通常调用IIFE(Immediately Invokable Function Expressions)
        console.log("这个函数只执行一次");
    })();//立即执行函数,因为是匿名函数
```

· `计时器 `   
```
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
```

· `无限调用`    
```
    let timerId1 = setTimeout(func | code, delay)//func|code函数名，代码   delay推迟时间/ms
    clearInterval(timer);//清除计时器  
```

· `对象`  
```
    let person = {
        name:'henry',
        age:18,
        run:function() {
            console.log('running');
        }
    }
    person.run();

    // 第一步：创建构造函数
    function People(name, age) {
    this.name = name;
    this.age = age;
    }

    // 第二步：通过 new 创建对象实例
    let person = new People('henry', 18);
    console.log(person.name);
    console.log(person['name']);

    //区别
    let variable = 'name';
    console.log(person[variable]);//相当于person.name
    console.log(person.parents.papa);//链式引用
    console.log(person['parents']['mama']);//链式引用

    person.name = 'tom';//属性赋值
    person['age'] = 10

    console.log(Object.keys(person));//属性的查看Object.keys方法

    delete person.name;//delete 删除对象的某个属性
    person.gender = 'male';//属性的增加
```

· **遍历对象属性**:   
```
//for...in遍历属性
    let person = {
      name: 'henry',
      age: 18,
    }
    for (let key in person) {
      console.log('键名：' + key + '；键值：' + person[key]);
    }

//借助Object.keys遍历属性    
    let keys = Object.keys(person);
    for (let i = 0; i < keys.length; i++) {
      console.log('键名：' + keys[i] + '；键值：' + person[keys[i]]);
    }
```

· `对象的继承`：继承属性。自身属性   
``` 
// 字面量
    let o1 = {name: 'alice',};
// 构造函数
    let o2 = new Object();
    let o3 = new Object();
// 继承
    funtion O4() {}; 
    O4.prototype = o1; 
    let o4 = new O4();


    'name' in person;// in 运算符判断对象是否拥有某个属性
    'gender' in person;
    person.hasOwnProperty('name');//hasOwnProperty判断自身属性是否存在
```    
· `Object、JSON、Map 区别`     
· JSON:JSON格式和JavaScript对象的转换:    
1. JSON.parse():JSON格式 => JavaScript对象     
```
    // 一个 JSON 字符串
    const jsonStr =
      '{"sites":[{"name":"Runoob", "url":"www.runoob.com"},{"name":"Google", "url":"www.google.com"},{"name":"Taobao", "url":"www.taobao.com"}]}';

    // 转成 JavaScript 对象
    const obj = JSON.parse(jsonStr);
```
2. JSON.stringify():JavaScript对象 => JSON格式     
```
    const jsonStr2 = JSON.stringify(obj)；     
```

· Map:Map和Object很相似，都可以保存键值对，区别：    
1. 一个Object的键通常是字符串，但一个Map的键可以是任意值 (函数，对象，基本类型)    
2. Map中的键值是有序的，而添加到对象中的键则不是    
3. Map中的键值对个数可以直接获取，Object则要借助Object.keys()等计算得到    
4. Map可直接进行迭代，Object则要借助Object.keys()等    
5. Map不存在键名和原型键名冲突问题，可以直接覆盖，Object则不行    

· 内置对象——Math、Storage:    
1. Math对象：  
1.1 常量:  
    Math.E // 常数e。  
    Math.LN2 // 2 的自然对数。     
    Math.LN10 // 10 的自然对数。     
    Math.LOG2E // 以 2 为底的e的对数。     
    Math.LOG10E // 以 10 为底的e的对数。     
    Math.PI // 常数π。      
    Math.SQRT1_2 // 0.5 的平方根。      
    Math.SQRT2 // 2 的平方根。      
1.2 静态方法:除了random外，都要传入合适的参数     
    Math.abs() // 绝对值        
    Math.ceil() // 向上取整     
    Math.floor() // 向下取整        
    Math.round() // 四舍五入取整        
    Math.max() // 最大值        
    Math.min() // 最小值        
    Math.pow() // 指数运算      
    Math.sqrt() // 平方根       
    Math.log() // 自然对数      
    Math.exp() // e的指数       
    Math.random() // 随机数     
2. Storage对象:     
2.1 数据存入:setItem      
            window.localStorage.setItem('myLocalStorage', 'storage Value');
            window.localStorage.setItem('key', 'Value');//方法接受两个参数 key:键名  value:键值  两个参数都是字符串，不是则转换字符串后再存入浏览器    
//如果要存入的数据不是字符串类型的数据，最好先转换成字符串类型，如例:  
            const obj = {
              name: 'henry',
              age: 18
            }
            const value = JSON.stringify(obj);
            window.localStorage.setItem('myLocalStorage', value);     
2.2 读取数据:getItem    
            window.localStorage.getItem('myLocalStorage');
            window.localStorage.getItem('key');//接受一个参数，即键名
2.3 清除缓存:clear      
            window.localStorage.clear();//清除所有保存数据      

· 内置对象——String: 内置对象——String     
1. 字符串长度:length       
```
    let len = 'here is an apple'.length;
```          
2. 查找字符:indexOf()       
```
//从字符串中查找某个字符串是否存在,查到则返回下标值(a),反之则返回值为 -1      
    let str = 'here is an apple';
    const index = str.indexOf('an');
    console.log(index);//返回下标值8
```         
3. 去掉两端空格:trim()  不会改变原字符串，而是返回处理后的字符串         
```
    // 'here' 之前有一个空格，'apple' 之后有三个空格
    let str = ' here is an apple   ';
    const trimedStr = str.trim();
    console.log(str.length);//20
    console.log(trimedStr.length);//16
```
4. 截取字符串:substring/substr 截取一个字符串的一部分  不会改变原字符串，而是返回处理后的字符串        
```
    let url = 'https://www.youkeda.com/userhome#collect';//截取#号之后的内容
    // 首先找到 # 后第一个字母的下标
    const index = url.indexOf('#') + 1;

    // 有 hash 才能进行截取，没有就直接提示不存在
    if (index) {
      // 用 substring 截取字符串，substring(start,end):start——要截取的字符串的开始下标;end——要截取的字符串的结束下标
      const hash1 = url.substring(index, url.length);
      
      // 计算 hash 的长度
      const lenHash = url.length - index;
      // 用 substr 截取字符串，substr(start,len):start——要截取的字符串的开始下标;lenend——要截取的字符串的长度
      const hash2 = url.substr(index, lenHash);

      console.log(hash1);
      console.log(hash2);
    } else {
      console.log('不存在 hash');
    }
```             
5. 分割字符串:split   不会改变原字符串，而是返回处理后的字符串          
```
//split方法按照给定规则分割字符串，返回一个由分割出来的子 字符串组成的数组
    const splitedStr = 'a|b|c'.split('|');
    console.log(splitedStr);//['a','b','c']
```

· 内置对象——Array:          
1. 连接数组:join()  不会改变原数组      
```
//join方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回，不提供参数，默认逗号分隔
    let arr = [1, 2, 3, 4];

    arr.join(""); //'1234'
    arr.join(" "); // '1 2 3 4'
    arr.join(" | "); // "1 | 2 | 3 | 4"
    arr.join(); // "1,2,3,4"
//这个方法和字符串里的split方法正好是一对反作用方法
    let str = "a|b|c";

    const splited = str.split("|");
    console.log(splited);//['a','b','c']

    const joined = splited.join("|");
    console.log(joined);//'a|b|c'
```
2. 倒序排列:reverse()  改变原数组       
```
//reverse方法用于颠倒排列数组元素，返回改变后的数组
    let arr = ["a", "b", "c"];

    arr.reverse(); // ["c", "b", "a"]
    arr; // ["c", "b", "a"]
```
3. 排序:sort() 改变原数组         
```
//sort对数组成员进行排序，默认字典顺序，自定义排序——>传入一个函数作为参数
    let arr = [
      { name: "jenny", age: 18 },
      { name: "tom", age: 10 },
      { name: "mary", age: 40 },
    ];

    arr.sort(function (a, b) {
      return a.age - b.age;
    });

    console.log(arr); //age:10 18 40
```
4. 遍历:map/forEach     
4.1 有返回值的遍历:map          
```
//map方法，接受一个函数，然后将数组所有成员一次传入这个参数函数，最后把每一次的执行结果组成一个新数组返回  由三个参数:elem,index,a.  elem——>表示依次传入的数组成员 ； index——>表示依次传入的数组成员所对应的下标  a——>表示整个数组
//在下面的代码中，map方法的返回值是由一个return后的内容elem.name组成的数组
    let arr = [
      { name: "jenny", age: 18 },
      { name: "tom", age: 10 },
      { name: "mary", age: 40 },
    ];

    // elem: 数组成员
    // index: 成员下标
    // a: 整个数组
    const handledArr = arr.map(function (elem, index, a) {
      elem.age += 1;
      console.log(elem, index, a);
      return elem.name;
    });

    console.log(arr);
    console.log(handledArr);
```     
4.2 无返回值的遍历:forEach      
```
//与map用法一致，无返回值
    const handledArr = arr.forEach(function (elem, index, a) {
      elem.age += 1;
      console.log(elem, index, a);
      return elem.name;
    });

    console.log(handledArr);//undefined
```

· 内置对象——Date:Date对象以国际标准时间（UTC）[中国是东八区，快8个小时]1970年1月1日00:00:00作为时间零点，表示范围——>前后个1亿天（单位  毫秒）
1. 获取当前时间:new Date()      
```
//Date可以看作是一个构造函数，用new命令生成一个时间对象的实例，无参返回当前时间
    let now = new Date();
    console.log(now);
//传入参数，可以生成**特定的时间对象**，参数可以是:数字、字符串、毫秒数
    // 传入表示“年月日时分秒”的数字
    let dt1 = new Date(2020, 0, 6, 0, 0, 0);
    console.log(dt1);//2020-01-05T16:00:00Z

    // 传入日期字符串
    let dt2 = new Date("2020-1-6");
    console.log(dt2);//2020-01-05T16:00:00Z

    // 传入距离国际标准时间的毫秒数
    let dt3 = new Date(1578240000000);
    console.log(dt3);//2020-01-05T16:00:00Z
```     
2. 日期运算     
```
//时间差:毫秒数  两个时间对象是可以直接相减的，返回值为两者的毫秒数差
    let dt1 = new Date(2020, 2, 1);
    let dt2 = new Date(2020, 3, 1);

    // 求差值
    let diff = dt2 - dt1;

    // 一天的毫秒数
    let ms = 24 * 60 * 60 * 1000;

    console.log(diff / ms); // 31
//早晚比较:大于，小于符号(  >  <  )

    console.log(dt1 > dt2); // false
    console.log(dt1 < dt2); // true
```
3. 解析日期字符串:Date.parse()          
```
//Date.parse方法用来解析日期字符串，返回该时间距离零点（11970年1月1日00:00:00）的毫秒数
    let dt = Date.parse("2020-1-6");
    console.log(dt); // 1578240000000
```
4. 时间对象转时间字符串:to 方法(to方法很多，先看toJSON（）)         
```
    let dt = new Date();
    let dtStr = dt.toJSON();

    console.log(dtStr); // 2020-01-03T09:44:18.220Z
```
5. 获取时间对象的年、月、日:get 方法        
```
//get*方法返回的都是整数，只是返回范围不一样  分钟和秒 =: 0到95; 小时: 0到23; 星期: 0(星期天)到6(星期六);  日期: 1到31; 月份: 0(一月) 到 11(十二月)
/除了"日期"外，其他的时间范围都是从0开始的
    let dt = new Date();
    dt.getTime(); // 返回实例距离1970年1月1日00:00:00的毫秒数
    dt.getDate(); // 返回实例对象对应每个月的几号（从1开始）
    dt.getDay(); // 返回星期几，星期日为0，星期一为1，以此类推
    dt.getFullYear(); // 返回四位的年份
    dt.getMonth(); // 返回月份（0表示1月，11表示12月）
    dt.getHours(); // 返回小时（0-23）
    dt.getMilliseconds(); // 返回毫秒（0-999）
    dt.getMinutes(); // 返回分钟（0-59）
    dt.getSeconds(); // 返回秒（0-59）
//dt.getFullYear()获取当前的完整年份
    let dt = new Date();
    let year = dt.getFullYear();

    console.log(year);//2023
```
· 设置时间对象的年、月、日:set 方法     
```
//set与get正好相反，它能够设置时间对象的某个方面的值
//set没有setDay方法，因为星期几是计算得到的
    let dt = new Date();
    dt.setTime(ms); // 设置实例距离1970年1月1日00:00:00的毫秒数
    dt.setDate(date); // 设置实例对象对应每个月的几号（从1开始）
    dt.setFullYear(year); // 设置四位的年份
    dt.setMonth(month); // 设置月份（0表示1月，11表示12月）
    dt.setHours(hour); // 设置小时（0-23）
    dt.setMilliseconds(ms); // 设置毫秒（0-999）
    dt.setMinutes(min); // 设置分钟（0-59）
    dt.setSeconds(sec); // 设置秒（0-59）
//dt.setFullYear()获取当前完整的年份
    let dt = new Date();
    dt.setFullYear(2030);

    console.log(dt);//2030-05-14T11:38:45.460Z
```
![Date小节,转换关系](https://github.com/NicknamePetName/Photo/blob/main/javaScript/%E6%97%B6%E9%97%B4%E5%AF%B9%E8%B1%A1%E3%80%81%E6%97%A5%E6%9C%9F%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%81%E6%AF%AB%E7%A7%92%E6%95%B0%E4%B9%8B%E9%97%B4%E7%9B%B8%E4%BA%92%E8%BD%AC%E6%8D%A2%E5%9B%BE.png?raw=true)