"use strict";
class Person {
    //protectedは継承先に使う場合
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = 32;
        this.id = 31; //readonlyでもコンストラクタの中なら×。
        this.name = 'hehh';
        this.id = 30;
    }
    static isAdult(age) {
        if (age > 17) {
            return true;
        }
        return false;
    }
    // public name: string;//省略するとパブリックになる。
    // private age: number;
    // constructor(initName: string, initAge: number) { //コンストラクタはクラスを初期化するもの
    //   this.name = initName;
    //   this.age = initAge;
    // }
    incrementAge() {
        this.age++;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
//クラスの継承
class Teacher extends Person {
    //シングルトン、コンストラクタをprivate
    //Newでインスタンス作れない。
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am ateacher and I tearch ${this.subject}`);
    }
    //getter, setter は ES5以降じゃ無いと使えない。
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    //シングルトン・インスタンス作成
    static getInstance() {
        //インスタンスが作成されている場合
        if (Teacher.instance) {
            //インスタンスを返す
            return Teacher.instance;
        }
        //インスタンスが作成されていない場合は、インスタンスを作成する。
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
}
Math.random();
console.log(Person.species);
console.log(Person.isAdult(38));
console.log(Teacher.species);
console.log(Teacher.isAdult(17));
// const teacher = new Teacher('Quill', 51, 'Math');
const teacher = Teacher.getInstance();
teacher.subject = 'Music';
console.log(teacher.subject);
teacher.greeting();
let person2 = Person;
//abstractクラスはインスタンスが作成できない。
//abstractクラスは継承するためのクラスなので。
// const quill = new Person('Quill', 38);
// const quill = new Teacher('Quill', 38, 'English');
const quill = Teacher.getInstance();
quill.greeting();
quill.incrementAge();
quill.greeting();
// quill.age = 42;//privateにしたらいじれない。
quill.incrementAge();
quill.incrementAge();
quill.incrementAge();
quill.greeting();
console.log(quill.id);
console.log(quill.name);
// quill.name = 'AAA';//readonlyなので書き込めない
console.log(quill.name);
// const anotherQuill = {//thisはこのオブジェクトのthisを指してしまう。宣言されたオブジェクトに依存する。
//   name: 'anotherQuill',
//   greeting: quill.greeting
// }
// anotherQuill.greeting();
console.log('##########');
const teacher2 = Teacher.getInstance();
teacher2.greeting();
//シングルトンで作ったインスタンス確認
console.log(teacher);
console.log(quill);
console.log(teacher2);
quill.incrementAge();
console.log(teacher);
console.log(quill);
console.log(teacher2);
