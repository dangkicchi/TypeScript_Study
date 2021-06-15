"use strict";
var _a, _b, _c;
const quill = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    else {
        return x;
    }
}
const upperHelloStr = toUpperCase('hello');
const upperHelloNum = toUpperCase(888);
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
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
const input = document.getElementById('input');
input.value = 'initial input value';
//1行で書く場合
document.getElementById('input').value = 'initial input value';
const desiner = {
    name: 'Quill',
    aaa: 'aaa',
    bbb: 'bbb'
};
const downloadedData = {
    id: 1
};
//オプショナルチェイニング
//user, name が undefined か null だったら、undefined か null を返す。
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
//ナレッシュコアレシング
//user, name が undefined か null だったら、右辺を返す('no-user') を返す。
console.log((_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user');
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
class AdvancedPerson {
    constructor() {
        this.name = 'Peter';
        this.age = 35;
    }
}
class AdvancedCar {
    constructor() {
        this.name = 'Prius';
        this.age = 5;
    }
}
let target = new AdvancedPerson();
let source = new AdvancedCar();
target = source;
function advancedFn(...args) {
}
advancedFn(0, 1);
const milk = 'milk';
let drink = milk;
const array = [10, 20];
const peter = {
    name: 'Peter',
    age: 38
};
