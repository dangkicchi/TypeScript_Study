interface Nameable {
  name?: string;
  nickName?: string;
}

interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

//インターフェースをimplementsした時、インターフェース以外の変数も定義できる。
class Developer implements Human, Nameable {
  name?:string;
  constructor(public age: number,
                public experience: number, initName?: string) {
    if (initName) {
      this.name = initName;
    }
  }

  greeting(message: string): void {
    console.log(message);
  }
}

const tmpDeveloper = {
  name: 'Quill',
  age: 38,
  greeting(message: string): void {
    console.log(message);
  }
}
//インターフェースの中身が全部あればOK
const user: Human = tmpDeveloper;

//インターフェースの中身が全部あればOK
let developer = new Developer( 38, 3, 'Quill');
console.log(developer.name);

developer.name = 'Mike';
console.log(developer.name);
