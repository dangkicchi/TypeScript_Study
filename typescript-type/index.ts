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




