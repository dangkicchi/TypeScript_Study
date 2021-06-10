var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var hello;
hello = 'hello';
//Object - 型注釈
var person = {
    name: 'jack',
    age: 21
};
console.log(person.name);
console.log(person.age);
//Object - 型推論
var person2 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
console.log(person2);
//配列-型注釈
var fruits = ['Apple', 'Banana', 'Grape'];
var fruit = fruits[0];
console.log(fruit.toUpperCase());
//配列-型注釈 any型
var fruits2 = ['Apple', 'Banana', 'Grape', 1];
var fruit2 = fruits2[3];
console.log(fruit2 + 100);
//配列-型推論 (union型になる)
var fruits3 = ['Apple', 'Banana', 'Grape', 9];
//Tupple (最初に定義したモノは厳しく、後はゆるく扱われる。)
var book = ['business', 1500, false];
book[1] = 700;
book.push(21);
console.log(book);
//pushされて実質は[3]はあるが、タプルで宣言しているため、以下はエラーになる。
// console.log(book[3]);
//enum型1
//enum の定義は大文字から始めるキャメル(らくだ)ケース、パスカルケース
//要素は大文字で定義
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
//enum を使うと以下のようなことが出来ない。enum で定義したモノだけ使える。
// coffee.size = 'SHORT';
console.log(coffee.size);
//enum型2
var CoffeeSize2;
(function (CoffeeSize2) {
    CoffeeSize2[CoffeeSize2["SHORT"] = 0] = "SHORT";
    CoffeeSize2[CoffeeSize2["TALL"] = 1] = "TALL";
    CoffeeSize2[CoffeeSize2["GRANDE"] = 2] = "GRANDE";
    CoffeeSize2[CoffeeSize2["VENTI"] = 3] = "VENTI";
})(CoffeeSize2 || (CoffeeSize2 = {}));
var coffee2 = {
    hot: false,
    size: CoffeeSize2.SHORT
};
coffee2.size = CoffeeSize2.GRANDE;
//enum に値を定義しないと上からの数字(0はじまり)になる。
console.log(coffee2.size);
//any型
//なんでもできてしまうのでなるべく避ける、使わないようにする。
//⇒あくまで、JavaScriptからそのままソースをコピペ移植したときに
//　使えるツールみたいなモノとして位置づける。
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.eiufwufh = 'nkbukhk';
var banana = 'banana';
//string型であってもany型は代入できてしまう。
banana = anything;
console.log(banana);
//union型
//numberもstringも扱える。
var unionType = 10;
//直前でnumber型を入れているので、string型のメソッドは使えない。
//unionType.toUpperCase();
unionType = 'hello';
//直前でstring型を入れているので、string型のメソッドを使える。
console.log(unionType.toUpperCase());
//union型の配列 ()の後に[]
var unionTypes = [21, 'hello', 3, 'world'];
console.log(unionTypes);
//Literal型
//Enumと同じような使い方。
//定義が少ないときはこっちを使うのもいいかも。(基本的にはenum使う)
var apple = 'apple';
//constは定数(リテラル？)なので変更できない。JavaScriptでも同じ。
//apple = 'banana';
var clothSize = 'large';
var cloth = {
    color: 'white',
    //リテラル、unionの組み合わせで定義したモノ以外は使えない
    // size: 'XXLarge'
    size: 'medium'
};
var apple2 = 'apple2';
var clothSize2 = 'large';
var cloth2 = {
    color: 'white',
    size: 'medium'
};
//関数に型を付ける(引数と戻り値に型を付ける)
function add(num1, num2) {
    return num1 + num2;
}
//引数の型が違うのでエラーとなる。
//add('hello', 123);
console.log(add(9, 100));
//void型(何も返さない)
function sayHello() {
    console.log('Hello!');
    return;
}
//undefinedを返す。(何も無いことを返す)
console.log(sayHello());
