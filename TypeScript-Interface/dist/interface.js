"use strict";
//インターフェースをimplementsした時、インターフェース以外の変数も定義できる。
class Developer {
    constructor(age, experience, initName) {
        this.age = age;
        this.experience = experience;
        if (initName) {
            this.name = initName;
        }
    }
    greeting(message) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    greeting(message) {
        console.log(message);
    }
};
//インターフェースの中身が全部あればOK
const user = tmpDeveloper;
//インターフェースの中身が全部あればOK
let developer = new Developer(38, 3, 'Quill');
console.log(developer.name);
developer.name = 'Mike';
console.log(developer.name);
