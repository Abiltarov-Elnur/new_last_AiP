//Задание 93

let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

let obj = {
	[key1 + '1']: 1,
    [key2]: 2,
	[key3]: 3
};

//Задание 96

let obj1 = {x: 1, y: 2, z: 3};
console.log( typeof obj1['x'] );

let obj2 = {x: 1, y: 2, z: 3};
console.log( typeof obj2 );

console.log( typeof {} );

//Задание 100

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
console.log(arr1);

//Задание 103.1

let obj4 = {x: 1, y: 2, z: 3};
console.log(obj4['x']);

//Задание 103.2

let obj5 = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj5[key]);


//Задание 103.3

let obj6 = {x: 1, y: 2, z: 3};
let sum = obj6['x'] + obj6['y'] + obj6['x'];

console.log(sum);

//Задание 103.4

let obj7 = {x: 1, y: 2, z: 3};

console.log(Object.keys(obj7).length);






