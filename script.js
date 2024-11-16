//Задание 135

let age = 19;
let res;

if (age >= 18) {
	res;
	
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);

//Задание 137

let arr = [1, 2, 3];
let res1;

if(arr.length == 3){
    res1 = arr[0] + arr[2] + arr[1];
    console.log(res1);
}

//Задание 138

let str = 'abcd';

if(str[0] == 'a'){
    console.log('+++');
}

//Задание 139.1

let num = 12340;
let str1 = String(num)
if ((str1[str1.length-1]) == 0){
    console.log('++');
}

//Задание 139.2

let number = 23454;
let num_str = String(number);

if((num_str[num_str.length-1]%2)==0){
    console.log('Четное');
}