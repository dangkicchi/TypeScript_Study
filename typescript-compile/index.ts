let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello: string;
hello = 'hello';

//Object - 型注釈
const person: {
  name: string;
  age: number;
} = {
  name: 'jack',
  age: 21
}
console.log(person.name);
console.log(person.age);

//Object - 型推論
const person2 = {
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 21
}

console.log(person2);

//配列-型注釈
const fruits: string[] = ['Apple', 'Banana', 'Grape'];
const fruit = fruits[0];
console.log(fruit.toUpperCase());

//配列-型注釈 any型
const fruits2: any[] = ['Apple', 'Banana', 'Grape', 1];
const fruit2 = fruits2[3];
console.log(fruit2 + 100);

//配列-型推論 (union型になる)
const fruits3 = ['Apple', 'Banana', 'Grape', 9];

//Tupple (最初に定義したモノは厳しく、後はゆるく扱われる。)
const book: [string, number, boolean] = ['business', 1500, false];
book[1] = 700;
book.push(21);
console.log(book);
//pushされて実質は[3]はあるが、タプルで宣言しているため、以下はエラーになる。
// console.log(book[3]);

//enum型1
//enum の定義は大文字から始めるキャメル(らくだ)ケース、パスカルケース
//要素は大文字で定義
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT

//enum を使うと以下のようなことが出来ない。enum で定義したモノだけ使える。
// coffee.size = 'SHORT';

console.log(coffee.size);

//enum型2
enum CoffeeSize2 {
  SHORT,
  TALL,
  GRANDE,
  VENTI
}

const coffee2 = {
  hot: false,
  size: CoffeeSize2.SHORT
}
coffee2.size = CoffeeSize2.GRANDE;

//enum に値を定義しないと上からの数字(0はじまり)になる。
console.log(coffee2.size);

//any型
//なんでもできてしまうのでなるべく避ける、使わないようにする。
//⇒あくまで、JavaScriptからそのままソースをコピペ移植したときに
//　使えるツールみたいなモノとして位置づける。
let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.eiufwufh = 'nkbukhk';

let banana = 'banana';
//string型であってもany型は代入できてしまう。
banana = anything;
console.log(banana);

//union型
//numberもstringも扱える。
let unionType: number | string = 10;
//直前でnumber型を入れているので、string型のメソッドは使えない。
//unionType.toUpperCase();

unionType = 'hello';
//直前でstring型を入れているので、string型のメソッドを使える。
console.log(unionType.toUpperCase());

//union型の配列 ()の後に[]
let unionTypes: (number | string)[] = [21, 'hello', 3, 'world'];
console.log(unionTypes);

//Literal型
//Enumと同じような使い方。
//定義が少ないときはこっちを使うのもいいかも。(基本的にはenum使う)
const apple = 'apple';
//constは定数(リテラル？)なので変更できない。JavaScriptでも同じ。
//apple = 'banana';
let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large'
} = {
  color: 'white',
  //リテラル、unionの組み合わせで定義したモノ以外は使えない
  // size: 'XXLarge'

  size: 'medium'

}

//typeエイリアス
type ClothSize = 'small' | 'medium' | 'large';
const apple2 = 'apple2';
let clothSize2: ClothSize = 'large';
const cloth2: {
  color: string;
  size: ClothSize
} = {
  color: 'white',
  size: 'medium'
}



//関数宣言に型を付ける(引数と戻り値に型を付ける)
function add(num1: number, num2: number): number {
  return num1 + num2;
}
//引数の型が違うのでエラーとなる。
//add('hello', 123);

console.log(add(9, 100));

//void型(何も返さない)
function sayHello(): void {
  console.log('Hello!');
  return;
}

//void は undefinedを返す。(何も無いことを返す)
console.log(sayHello());


//関数の保持をする変数に型を付ける。(型注釈)
const anotherAdd: (n1: number, n2: number) => number = add;

//関数の保持をする変数に型を付ける。(型注釈・無名関数)
const anotherAdd2: (n1: number, n2: number) => number = function add(num1: number, num2: number): number {
  return num1 + num2;
}

//関数の保持をする変数に型を付ける。(型推論)
const anotherAdd3 = function add(num1: number, num2: number): number {
  return num1 + num2;
}

//関数の保持をする変数に型を付ける。(型推論2)
const anotherAdd4: (n1: number, n2: number) => number = function add(num1, num2) {
  return num1 + num2;
}

//アロー関数
// const doubleNumber = num => num * 2;
// console.log(doubleNumber);
// console.log(doubleNumber(9));

//アロー関数(型注釈)
const doubleNumber2 = (num: number): number => num * 2;
console.log(doubleNumber2);
console.log(doubleNumber2(5));

//アロー関数(型注釈2)
const doubleNumber3: (num: number) => number = num => num * 2;
console.log(doubleNumber3);
console.log(doubleNumber3(128));


//callback関数(あまりよくわからなかった)
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}

doubleAndHandle(21, doubleNum => {
  return doubleNum;
});


//unknown型(使う前に typeof で確認してから代入する。)
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput ='hello';
unknownInput = 21;
unknownInput = true;

//このままだとstring型のtextに代入できない
// text = unknownInput;

//typeof で unknown型がstring型であると判明した場合は代入できる。
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

anyInput ='world';
anyInput = 777;
anyInput = false;

//any型はstring型のtextに代入できてしまう
text = anyInput;

//never型よくわからない。
//Udemy動画の期待通りに動かない。

//never型(起こりえない値の型を使用する: 無限ループの場合)
// function infiniteLoop(message: string): never {
//   while (true) {

//   }
// }
// console.log(infiniteLoop('This is an infinite loop!'));


//never型(起こりえない値の型を使用する: Exceptionの場合)
function error(message: string): never {
  throw new Error(message);
}
console.log(error('This is an error!'));


