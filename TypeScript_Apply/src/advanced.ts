interface Engineer {
  name: string;
  role: string;
}
interface Blogger {
  name: string;
  follower: number;
}
//エンジニアかつ、ブロガーの型
//type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}
const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}
type NumberBoolean = number | boolean;
type StringNumber = string | number;
//AかつB、number型になる。
type Mix = NumberBoolean & StringNumber;

//関数のオーバーロード
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  } else {
    return x;
  }
}
const upperHelloStr = toUpperCase('hello');
const upperHelloNum = toUpperCase(888);

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}
class Dog {
  kind: 'dog' = 'dog';
  speak() {
    console.log('bow-wow');
  }
}
class Bird {
  kind: 'bird' = 'bird';
  speak() {
    console.log('tweet-tweet');
  }
  fly() {
    console.log('flutter');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  //タグ付きunion
  switch (pet.kind) {
    case 'bird':
      pet.fly();
  }

  //Birdクラスのインスタンスか調べる。
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());
havePet(new Dog());

//型アサーション(型上書き) Javaのクラスキャストみたいなもの

//const input = <HTMLInputElement>document.getElementById('input');

//jsx の場合、こっちのがわかりやすい。
const input = document.getElementById('input') as HTMLInputElement;
input.value = 'initial input value';

//1行で書く場合
(<HTMLInputElement>document.getElementById('input')).value = 'initial input value';

//インデックスシグネチャ(基本的には使わない)
interface Designer {
  name: string;
  [index: string]: string;
}
const desiner: Designer = {
  name: 'Quill',
  aaa: 'aaa',
  bbb: 'bbb'
}

//オプショナルチェイニング
interface DownloadedData {
  id: number;user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}
const downloadedData: DownloadedData = {
  id: 1
}
//オプショナルチェイニング
//user, name が undefined か null だったら、undefined か null を返す。
console.log(downloadedData.user?.name?.first);

//ナレッシュコアレシング
//user, name が undefined か null だったら、右辺を返す('no-user') を返す。
console.log(downloadedData.user ?? 'no-user');

//LookUp型
type id2 = DownloadedData["id" | "user"];


type id = DownloadedData["id"]
enum Color {
  RED,
  BLUE
}
class AdvancedPerson {
  name: string = 'Peter'
  age: number = 35;
}
class AdvancedCar {
  name: string = 'Prius'
  age: number = 5;
}
let target = new AdvancedPerson();
let source = new AdvancedCar();
target = source;
function advancedFn(...args: readonly number[]) {
}
advancedFn(0, 1)
const milk = 'milk' as const;
let drink = milk;
const array = [10, 20] as const;
const peter = {
  name: 'Peter',
  age: 38
} as const;
type PeterType = typeof peter;